import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

// Style for Component 
const useStyles = makeStyles((theme) => ({
    commentsContainer: {
        marginBottom: '30px',
    },
    root: {
        boxShadow: '2px 2px 15px lightseagreen',
        display: 'flex',
        alignItems: "center",
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    profileThumbnail: {
        marginLeft: '5px',
        marginTop: '-80px',
    },
}));


const Comments = (props) => {


    const classes = useStyles();
    const theme = useTheme();
    const { postId, id, name, email, body } = props.comments;
    const { url } = props.profileImg;

    // GET user Pic
    const [profileImg, getProfileImg] = useState([]);
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${props.comments.length}`)
            .then((data) => data.json())
            .then((data) => getProfileImg(data.results[0].picture.medium));
    }, []);

    return (
        <Container className={classes.commentsContainer} maxWidth="md">
            <Card className={classes.root}>
                <CardMedia className={classes.profileThumbnail}>
                    <Avatar alt="profile" size="100px" variant="rounded" src={profileImg} className={classes.rounded}></Avatar>
                </CardMedia>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="p" variant="body3">
                            {body}
                        </Typography>
                        <br />
                        <Typography variant="subtitle1" color="textSecondary">
                            Name: {name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            <small>Email: {email}</small>
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Container>
    );
};

export default Comments;