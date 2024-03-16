'use server'
import { redirect } from "next/navigation";
import Post from "../../../../types/post.model";

export default async function createPost(formData: FormData) {
    let newPost = {
        userid: 1, // TODO get userid
        location: formData.get("location") as string,
        image_url: formData.get("image_url") as string,
        body: formData.get("body") as string,
    } as Post;

    console.log("to post", newPost);
    const response = await fetch(`http://${process.env.API_HOST}:5000/api/posts`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost)
    });
    const data = await response.json();
    console.log("post response", data);
    if(response.ok) {
        redirect("/");
    }
}