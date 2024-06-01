'use server'
import { redirect } from "next/navigation";
import Post from "@/types/post.model";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import type { CustomSession } from "@/app/api/auth/[...nextauth]/CustomAuthOptions";

export default async function createPost(formData: FormData) {
    const session:CustomSession|null = await getServerSession(authOptions);
    let postForm:FormData = formData;
    postForm.append("userid",session!.user!.id);
    
    const response = await fetch(`http://${process.env.API_HOST}:5000/api/posts`,{
        method: "POST",
        headers: {
            enctype:"multipart/form-data"
        },
        body: postForm
    });
    const data = await response.json();
    console.log("post response", data);
    if(response.ok) {
        redirect("/");
    }
}