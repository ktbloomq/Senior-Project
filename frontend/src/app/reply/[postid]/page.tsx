import type Post from "@/types/post.model";
import PostComponent from "../../postComponent";
import Reply from "./reply"
import createPost from "@/app/post/createPost";

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
        <form action={createPost} className="card card-body mb-2">
          <input type="hidden" name="parent" value={posts[0].postid} />
            <div>
                <label htmlFor="description" className="form-label">Reply</label>
                <textarea id="description" name="body" className="form-control" required></textarea>
            </div>
            <div className="d-flex pt-3">
                <a href="/" className="btn btn-outline-secondary">Cancel</a>
                <button type="submit" className="btn btn-outline-primary ms-auto">reply ➦</button>
            </div>
        </form>
        {posts.slice(1).map((p: Post,index) => {
          return <Reply key={index} post={p} />
        })}
      </main>
  );
}
