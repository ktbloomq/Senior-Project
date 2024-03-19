'use server'
import { redirect } from "next/navigation";
import User from "../../../../types/user.model";

export default async function createUser(formData: FormData) {
    let newUser = {
        username: formData.get("username") as string,
        password: formData.get("password") as string,
    } as User;

    console.log("creating user", newUser);
    const response = await fetch(`http://${process.env.API_HOST}:5000/api/users`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
    });
    const data = await response.json();
    console.log("post response", data);
    if(response.ok) {
        redirect("/");
    }
}