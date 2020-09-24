import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import AddPost from '../AddPost/AddPost';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <AddPost />
        </div>
    )
}

export default Feed;
