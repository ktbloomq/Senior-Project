'use server'
import { redirect } from "next/navigation";
import Post from "@/types/post.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import type { CustomSession } from "@/app/api/auth/[...nextauth]/CustomAuthOptions";

export default async function createPost(formData: FormData) {
    const session:CustomSession|null = await getServerSession(authOptions);
    let newPost = {
        userid: session!.user!.id,
        location: formData.get("location"),
        image_url: formData.get("image_url"),
        body: formData.get("body"),
        parent: formData.get("parent"),
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