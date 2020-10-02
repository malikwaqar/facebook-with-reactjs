import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import AddPost from '../AddPost/AddPost';
import Post from '../Post/Post';
import db from '../../firebase';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc=> ({ id: doc.id, data: doc.data()})))
        })
    }, []);
    return (
        <div className="feed">
            <StoryReel />
            <AddPost />

            {
                posts.map(post => (
                    <Post 
                    id ={post.data.id}
                    profilePic = {post.data.profilePic}
                    message = {post.data.message}
                    username = {post.data.username}
                    timestamp = {post.data.timestamp}
                    image = {post.data.image} />
                ))
            }

        </div>
    )
}

export default Feed;
