export const postQueries = {
    getAllposts: 
        `SELECT p.postid, p.body, p.parent, p.location, p.image_url, p.likes, p.userid, u.name AS username
        FROM posts AS p LEFT JOIN users AS u ON p.userid = u.userid 
        WHERE parent IS NULL;`,
    getPostById: 'SELECT * FROM posts p WHERE p.postid = ? OR p.parent = ?;',
    getPostByUserId: 'SELECT * FROM posts p WHERE p.userid = ?;',
    createPost: 'INSERT INTO posts (userid, parent, body, location, image_url, likes) VALUES(?, ?, ?, ?, ?, ?);',
    likePost: 'UPDATE posts SET likes = likes + 1 WHERE postid = ?;'
}