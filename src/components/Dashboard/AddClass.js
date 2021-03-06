import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/LibraryAdd';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});


class AddClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            StudentClass: [],
            TAClass: [],
            open: false,
            addCode: '',
            className: '',
            uid: this.props.db.auth().currentUser.uid
        };

        this.firebaseRef = this.props.db.database().ref("User").child(this.state.uid);
        var TARef = this.firebaseRef.child('TAClass');
        var StudentRef = this.firebaseRef.child('studentClass');
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleAdd = () => {
        //this line will create a route to the database, no matter if the database child is exist or not
        var classRef = this.props.db.database().ref("ClassFinal").child(this.state.className + "+" + this.state.addCode);


        classRef.once('value', (snapshot) => {
            const classObject = snapshot.val();
            if (classObject == null) {
                alert("Class not registered or wrong add code!");
            } else {
                var userRef = this.props.db.database().ref("User").child(this.state.uid);
                var classRef = userRef.child("studentClass").child(this.state.className + "+" + this.state.addCode);
                classRef.update({ className: this.state.className + "+" + this.state.addCode });
                alert("Operation Add Class：success!");
            }
            this.handleClose();
        });


        // check if the there is actually this class entered by user. by using .on and snapshot
    };

    _handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleAdd();
        }
    }

    render() {
        return (
            <div>
                <ListItem button>
                    <ListItemIcon>
                        <AddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Add Class" onClick={this.handleClickOpen} />
                </ListItem>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Add Class</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter the Course code in the following format to add course:
                        </DialogContentText>
                        <DialogContentText>
                            ClassName + 6-Digit-ID
                        </DialogContentText>
                        <DialogContentText>
                            For example: CSE30+A1B2C3
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Course Name"
                            type="text"
                            fullWidth
                            onChange={e => this.setState({ className: (e.target.value) })}
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            label="6-Digit Add code"
                            type="text"
                            fullWidth
                            onChange={e => this.setState({ addCode: (e.target.value) })}
                            onKeyPress={this._handleKeyPress}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleAdd.bind(this)} color="primary">
                            add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(AddClass);