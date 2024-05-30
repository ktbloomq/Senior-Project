import Post from "@/types/post.model";
import PostComponent from "../../postComponent";
import Reply from "./reply"

async function getPosts(postid: number) {
  let data;
  const response = await fetch(`http://${process.env.API_HOST}:5000/api/posts/${postid}`, {cache: "no-cache"});
  data = await response.json();
  return data as Post[];
}

export default async function Replies({ params }: { params: { postid: string } }) {
  const posts:Post[] = await getPosts(Number.parseInt(params.postid as string));
  return (
      <main className="mt-2">
        <PostComponent post={posts[0]} />
        {posts.slice(1).map((p: Post,index) => {
          return <Reply key={index} post={p} />
        })}
      </main>
  );
}
