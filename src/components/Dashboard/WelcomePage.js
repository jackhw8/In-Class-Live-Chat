import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid'
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
    "@global": {
        body: {
            backgroundColor: '#4ECEFF1',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            height: "100%"
        },
        html: {
            height: "100%"
        },
        "#componentWithId": {
            height: "100%"
        }
    },
    paper: {
        marginTop: '0vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 0,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 8}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },



});


const cards = [1, 2, 3];

function SignIn(props) {
    const { classes } = props;

    return (
        <main>
            {/* Hero unit */}
            <div className={classes.paper}>
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Welcome!
            </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    Are you ready to Chime In? Select or add a class to start.
            </Typography>
                <Typography variant="h6" align="center" color="textSecondary" paragraph>
                    With us you can enroll into class with just class name and add code,
                    raise your question to the professor annonymosly in real time, or even start your own class.
            </Typography>

            </div>
            <div className={classNames(classes.layout, classes.cardGrid)}>
                <Grid container spacing={40}>
                    <Grid item key='0' sm={6} md={4} lg={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://cl.ly/700ee03b707f/Screen%2520Recording%25202018-11-28%2520at%252012.22%2520AM.gif"
                                title="Image title"
                            />

                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Enroll in classes
                    </Typography>
                                <Typography>
                                    Join a class to be able to ask questions in real time.
                    </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item key='1' sm={6} md={4} lg={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://cl.ly/a946530a2090/Screen%2520Recording%25202018-11-28%2520at%252012.28%2520AM.gif"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Ask your questions
                    </Typography>
                                <Typography>
                                Annonymosly ask your questions without the fear of professionalism deduction.
                    </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                    <Grid item key='3' sm={6} md={4} lg={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://cl.ly/6c6b1c3190d8/Screen%2520Recording%25202018-11-28%2520at%252012.34%2520AM.gif"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Upvote questions
                    </Typography>
                                <Typography>
                                    Express your interest in a question by upvoting it.
                    </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                </Grid>
            </div>
        </main>

    );
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);