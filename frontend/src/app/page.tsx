import Post from "./post";

export default function Home() {
  return (
    <div className="container">
      <h1 className="text-center">Travel Journal Feed</h1>
      <hr />
      <Post />
      <Post />
    </div>
  );
}
