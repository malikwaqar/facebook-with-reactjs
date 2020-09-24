import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React from 'react';
import './AddPost.css';

function AddPost() {

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="addPost">
            <div className="addPost__top">
                <Avatar />
                <form>
                    <input className="addPost__input" placeholder="What's on your mind" />
                    <input placeholder="Image URL(Optional)" />
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </form>
            </div>
            <div className="addPost__bottom">
                <div className="addPost__option">
                    <Videocam style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>

                <div className="addPost__option">
                    <PhotoLibrary style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="addPost__option">
                    <InsertEmoticon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default AddPost;
