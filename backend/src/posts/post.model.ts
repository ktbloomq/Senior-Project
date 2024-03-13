export default interface Post {
    postid: number,
    userid: number,
    parent: number | null,
    body: string,
    location: string | null,
    image_url: string,
    likes: number
}