"use client"

import Post from "@/types/post.model"
import likePost from "./likePost"

export default function LikeButton({post, isAuthenticated}: {post:Post, isAuthenticated:boolean}) {
    return (
        isAuthenticated ? 
            <button onClick={() => likePost(post.postid)} className="btn btn-outline-primary">{post.likes} 👍</button>:
            <button className="btn btn-outline-primary" disabled>{post.likes} 👍</button> 
    )
}