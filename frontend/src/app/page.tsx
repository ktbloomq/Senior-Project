import PostComponent from "./postComponent";
import Post from "@/types/post.model";

async function getPosts() {
  let data;
  // try {
  //   const response = await fetch(`http://${process.env.API_HOST}:5000/api/posts/all`, {cache: "no-cache"});
  //   data = await response.json();
  // } catch (error) {
  //   console.error(`could not fetch http://${process.env.API_HOST}:5000/api/posts/all`);
  // }
  const response = await fetch(`http://${process.env.API_HOST}:5000/api/posts/all`, {cache: "no-cache"});
  data = await response.json();
  return data as Post[];
}

export default async function Home() {
  const posts:Post[] = await getPosts();
  return (
    <>
      <h1 className="text-center">Travel Journal Feed</h1>
      <hr />
      <main>
        {posts.map((p: Post,index) => {
          return <PostComponent key={index} post={p} />
        })}
      </main>
    </>
  );
}
