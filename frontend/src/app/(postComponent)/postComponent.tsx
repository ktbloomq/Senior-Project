import Image from "next/image";
import Post from "@/types/post.model";
import LikeButton from "./LikeButton";

export default function PostComponent({post, isAuthenticated}: {post:Post, isAuthenticated:boolean}) {
    // const dummyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    return (
        <div className="card mb-2">
            <Image src={`http://${process.env.API_HOST}:5000/api/posts/image/${post.image_url!}`} height={756} width={1320} className="card-img-top" style={{ objectFit: "contain", width: "100%", maxHeight: "70vh"}} alt="..." />
            <div className="card-body">
                <h5 className="card-title d-flex align-items-end">
                    <div className="text-secondary fs-6 fst-italic">by {post.username}</div>
                    <div className="ms-auto text-secondary fs-6">{post.location}📍
                    </div>
                </h5>
                <p className="card-text">{post.body}</p>
                <div className="text-end">
                    <a href={`/reply/${post.postid}`} className="btn btn-outline-primary me-1">Reply</a>
                    <LikeButton post={post} isAuthenticated={isAuthenticated} />
                </div>
            </div>
        </div>
    );
}