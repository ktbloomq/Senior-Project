import PostComponent from "./postComponent";
import Post from "../../../types/post.model";

async function getPosts() {
  const response = await fetch(`http://${process.env.API_HOST}:5000/api/posts/all`, {cache: "no-cache"});
  const data = await response.json();
  return data as Post[];
}

export default async function Home() {
  const posts:Post[] = await getPosts();
  return (
    <div className="container">
      <h1 className="text-center">Travel Journal Feed</h1>
      <hr />
      {posts.map((p: Post,index) => {
        return <PostComponent key={index} post={p} />
      })}
    </div>
  );
}
