import { Avatar } from '@material-ui/core';
import { InsertEmoticon, PhotoLibrary, Videocam } from '@material-ui/icons';
import React, { useState } from 'react';
import { useStateValue } from '../../StateProvider';
import './AddPost.css';

function AddPost() {

    const[input, setInput] = useState('');
    const[imageUrl, setImageUrl] = useState('');
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();

        setInput('');
        setImageUrl('');
    }

    return (
        <div className="addPost">
            <div className="addPost__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input className="addPost__input" placeholder={`What's on your mind, ${user.displayName}`}
                    value={input} 
                    onChange={e => setInput(e.target.value)} />
                    <input placeholder="Image URL(Optional)"
                    value={imageUrl}
                    onChange={ e => setImageUrl(e.target.value)} />
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
