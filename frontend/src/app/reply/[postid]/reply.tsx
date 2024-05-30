"use client"
import Post from "@/types/post.model";
import likePost from "../../likePost";

export default function Reply({post}: {post:Post}) {
    // const dummyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title d-flex align-items-end">
                    <div className="text-secondary fs-6 fst-italic">by {post.username}</div>
                </h5>
                <p className="card-text">{post.body}</p>
                <div className="text-end">
                    <button onClick={() => likePost(post.postid)} className="btn btn-outline-primary">
                        {post.likes} 👍
                    </button>
                </div>
            </div>
        </div>
    );
}