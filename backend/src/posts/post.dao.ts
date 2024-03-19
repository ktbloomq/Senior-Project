import { execute } from "../services/mysql.connector";
import { postQueries } from "./post.queries";
import Post from "../../../types/post.model";
import { OkPacket } from "mysql";

export async function getAllPosts() {
    return execute<Post[]>(postQueries.getAllposts,[]);
}

export async function getPostById(postid: number) {
    return execute<Post[]>(postQueries.getPostById,[postid, postid]);
}

export async function getPostByUserId(postid: number) {
    return execute<Post[]>(postQueries.getPostByUserId,[postid]);
}

export async function createPost(post: Post) {
    return execute<OkPacket>(postQueries.createPost, [post.userid, post.parent, post.body, post.location, post.image_url, 0]);
}

export async function likePost(postid: number) {
    return execute<OkPacket>(postQueries.likePost, [postid]);
}