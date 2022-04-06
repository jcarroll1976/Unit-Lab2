import { useState,FormEvent } from "react";
import Post from "../models/Post";
import './PostForm.css';

interface Props {
    onClose: () => void;
    onSubmit: (post:Post) => void;
}
function PostForm({onClose,onSubmit}:Props) {
    const [title,setTitle] = useState("");
    const [thought,setThought] = useState("");
    

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        //do something with data from state
        onSubmit({title:title,thought:thought})
    
    }
    return (
        <div className="modal-background">
            <div className = "PostForm">
                <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <button onClick={()=>onClose()}>X</button>
                    <p>
                        <label htmlFor="PostForm_title">Title</label>
                        <input id = "PostForm_title" required value={title}
                            onChange = {e => setTitle(e.target.value)} />
                    </p>
                    <p>
                        <label htmlFor="PostForm_thought">Thought</label>
                        <input id = "PostForm_thought" required value={thought}
                            onChange = {e => setThought(e.target.value)} />
                    </p>
                    <input type="submit" value="Add Post" />
                </form>
                </div>
            </div>
        </div>
    )  
    
}

export default PostForm