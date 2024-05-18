export const postQueries = {
    getAllposts: 
        `SELECT * FROM posts 
        WHERE parent IS NULL;`,
    getPostById: 'SELECT * FROM posts p WHERE p.postid = ? OR p.parent = ?;',
    getPostByUserId: 'SELECT * FROM posts p WHERE p.userid = ?;',
    createPost: 'INSERT INTO posts (userid, parent, body, location, image_url, likes) VALUES(?, ?, ?, ?, ?, ?);',
    likePost: 'UPDATE posts SET likes = likes + 1 WHERE postid = ?;'
}