import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import AddPost from '../AddPost/AddPost';
import Post from '../Post/Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <AddPost />
            <Post
            profilePic="https://avatars1.githubusercontent.com/u/49842187?s=460&u=f40259e1e37e9346d757848196904a23dbd664da&v=4"
            message="Let's Dance..."
            timestamp="12:40AM"
            username="Malik Waqar"
            image="https://media0.giphy.com/media/1BfQlyaAp4eavGzaYE/giphy.gif"
            />
        </div>
    )
}

export default Feed;
