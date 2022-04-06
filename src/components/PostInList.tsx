import {useState} from 'react';
import './PostInList.css';
import Post from '../models/Post';

interface Props {
    post:Post;
    onDelete: () => void;
}
function PostInList({post,onDelete}:Props) {
    return (
    <div className="PostInList">
        <div className='container'>
        <p>{post.title} <button onClick={() => onDelete()}>X</button></p>
        <p>{post.thought}</p>
        </div>
    </div>
    )
}

export default PostInList