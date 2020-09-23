import { Avatar } from '@material-ui/core';
import React from 'react';
import './AddPost.css';

function AddPost() {
    return (
        <div className="addPost">
            <div className="addPost__top">
                <Avatar />
                <form>
                    <input className="addPost__input" placeholder="What's on your mind" />
                    <input placeholder="Image URL(Optional)" />
                </form>
            </div>
            <div className="addPost__bottom">

            </div>
        </div>
    )
}

export default AddPost;
