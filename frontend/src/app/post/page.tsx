"use client";
import { useState } from "react";
import createPost from "./createPost";


export default function Post() {
    const dummyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    const [previewImg, setPreviewImg] = useState("data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
    
    function updatePreview(file:File) {
        setPreviewImg(URL.createObjectURL(file));
    };

    return(
        <>
            <h1 className="text-center">Create Post</h1>
            <hr />
            <div className="card mb-2">
                <div className="border-bottom bg-secondary" style={{height:"70vh"}}>
                    <img src={previewImg} id="image" className="text-center" style={{objectFit:"contain", width:"100%", height:"70vh"}} />
                </div>
                <div className="card-body">
                    <form action={createPost}>
                        <div className="">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input id="location" type="text" name="location" className="form-control" required/>
                        </div>
                        <div className="">
                            <label htmlFor="imageLink" className="form-label">Image</label>
                            <input id="imageLink" type="file" name="image" accept="image/*" className="form-control" 
                            onChange={(e) => {updatePreview(e.target.files![0])}} required/>
                        </div>
                        <div className="">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea id="description" name="body" className="form-control" required></textarea>
                        </div>
                        <div className="d-flex pt-3">
                            <a href="/" className="btn btn-outline-secondary">Cancel</a>
                            <button type="submit" className="btn btn-outline-primary ms-auto">Post ➦</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}