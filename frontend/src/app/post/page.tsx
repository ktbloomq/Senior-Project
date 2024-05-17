"use client";
import { redirect } from "next/navigation";
// import Post from "../../../../types/post.model";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
import createPost from "./createPost";
import { Session } from "inspector";



export default function Post() {
    const dummyImage = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
    const [previewImg, setPreviewImg] = useState("data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=");
    const [session,setSession] = useState<any>(null);
    useEffect(() => {
        getSession().then(result => {
            setSession(result);
        });
    },[]);
    
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
                            <input id="imageLink" type="text" name="image_url" className="form-control" 
                            onChange={ (e) => {setPreviewImg((e.target as HTMLInputElement).value)}} required/>
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