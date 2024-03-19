export default interface Post {
    postid: number,
    userid: number,
    username: string | null,
    parent: number | null,
    body: string,
    location: string | null,
    image_url: string | null,
    likes: number
}