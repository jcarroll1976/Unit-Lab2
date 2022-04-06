import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import './SocialPosts.css'

function SocialPosts() {
    const [posts,setPosts] =useState<Post[]>([]);
    const [showPostForm,setShowPostForm] =useState(false);
    const [showPost,setShowPost] =useState(true);

    function addPost(post:Post) {
        setPosts(prevposts => [...prevposts,post]);
        setShowPost(false);
    }
    function deletePost(index:number) {
        setPosts(prev => [...prev.slice(0,index),...prev.slice(index+1)]);
    }

    return (
        <div className="SocialPosts">
            <h1>My Thoughts</h1>
            <button className="showPostForm" onClick={()=> setShowPostForm(true)}>New Thought</button>
            {showPostForm && <PostForm onClose={()=>setShowPostForm(false)}
                    onSubmit={addPost}/>}
        <div>
        <ul>
        {posts.map((post,i) =>
            <PostInList key={post.title}
                        post={post} onDelete={()=>deletePost(i)}/>)}

        </ul>

        </div>
        </div>
    )
}

export default SocialPosts