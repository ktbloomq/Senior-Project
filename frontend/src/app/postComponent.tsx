"use client"
import Post from "@/types/post.model";
import likePost from "./likePost";

export default function PostComponent({post, isAuthenticated}: {post:Post, isAuthenticated:boolean}) {
    // const dummyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    return (
        <div className="card mb-2">
            <div className="border-bottom bg-secondary">
                <img src={post.image_url!} style={{ objectFit: "contain", width: "100%", maxHeight: "70vh" }} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title d-flex align-items-end">
                    <div className="text-secondary fs-6 fst-italic">by {post.username}</div>
                    <div className="ms-auto text-secondary fs-6">{post.location}📍
                    </div>
                </h5>
                <p className="card-text">{post.body}</p>
                <div className="text-end">
                    <a href={`/reply/${post.postid}`} className="btn btn-outline-primary me-1">Reply</a>
                    {isAuthenticated ? 
                        <button onClick={() => likePost(post.postid)} className="btn btn-outline-primary">{post.likes} 👍</button>:
                        <button className="btn btn-outline-primary" disabled>{post.likes} 👍</button>
                    }
                </div>
            </div>
        </div>
    );
}