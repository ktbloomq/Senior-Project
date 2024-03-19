'use server'
import { redirect } from "next/navigation";
import Post from "../../../types/post.model";

export default async function likePost(postid: number) {
    const response = await fetch(`http://${process.env.API_HOST}:5000/api/posts/like/${postid}`,{
        method: "GET",
    });
    const data = await response.json();
    console.log("post response", data);
    if(response.ok) {
        redirect("/");
    }
}