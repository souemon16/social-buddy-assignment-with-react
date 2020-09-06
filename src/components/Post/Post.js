import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    container:{
        marginTop: 20,
    },
    root: {
        minWidth: 275,
        boxShadow: '1px 1px 15px #3f51b5',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});



const Post = (props) => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const { userId, id, title, body } = props.post;

    return (
        <Container className={classes.container} maxWidth="md">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Post No : {id}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {body}
                        <br />
                    </Typography>
                </CardContent>
                <CardActions>
                <Link to={`/profile/${id}`}> <Button variant="contained" color="primary" href="#contained-buttons" >View Post</Button></Link>
                </CardActions>
            </Card>
        </Container>
    );
};

export default Post;
