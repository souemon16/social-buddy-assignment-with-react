import React, { useEffect, useState, createContext } from 'react';
import Post from '../Post/Post';

export const PostContext = createContext(); 

const Home = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(error => console.log(error))
    }, [])

    return (
       <>
       {
           post.map(perPost => <Post post={perPost}></Post>)
       }
        </>
    );
};

export default Home;