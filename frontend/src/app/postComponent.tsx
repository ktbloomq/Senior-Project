import Post from "../../../types/post.model";

export default function PostComponent({post}: {post:Post}) {
    // const dummyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    return (
        <div className="card mb-2">
            <div className="border-bottom bg-secondary">
                <img src={post.image_url} style={{ objectFit: "contain", width: "100%", maxHeight: "70vh" }} alt="..." />
            </div>
            <div className="card-body">
                <h5 className="card-title d-flex align-items-end">
                    <div className="text-secondary fs-6 fst-italic">by {post.username}</div>
                    <div className="ms-auto text-secondary fs-6">📍{post.location}
                    </div>
                </h5>
                <p className="card-text">{post.body}</p>
                <div className="text-end">
                    <a className="btn btn-outline-primary">
                        {post.likes} 👍
                    </a>
                </div>
            </div>
        </div>
    );
}