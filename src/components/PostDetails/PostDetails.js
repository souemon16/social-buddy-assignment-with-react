import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        marginTop: '100px',
        boxShadow: '2px 2px 15px lightseagreen',
        borderRadius: '5px',
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
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    center: {
        textAlign: "center",
        margin: '60px 0',
    },
}));

const PostDetails = () => {
    let { id } = useParams();

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // GET user detail 
    const [postDetail, getPostDetail] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => getPostDetail(data))
    }, [])
    const { userId, title, body } = postDetail;

    // GET user Comment 
    const [comments, getPostComments] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => res.json())
            .then(data => getPostComments(data))
    }, [])

    // GET user Pic
    const [profileImg, getProfileImg] = useState([]);
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=${comments.length}`)
            .then(res => res.json())
            .then(data => getProfileImg(data))
    }, [])
    console.log(profileImg);
    return (
        <>
            <Container maxWidth="md">
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            UserID : {userId}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            Id: {id}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {body}
                            <br />
                            {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton
                            className={clsx(classes.expand, {
                                [classes.expandOpen]: expanded,
                            })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                </Card>
            </Container>
            <Typography variant="h2" className={classes.center}>Comments</Typography>
            {
                comments.map(commentsData => <Comments profileImg={profileImg} comments={commentsData}></Comments>)
            }
        </>
    );
};

export default PostDetails;