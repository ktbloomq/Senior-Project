export const postQueries = {
    getAllposts: 
        `SELECT p.userid, u.username, p.parent, p.body, p.location, p.image_url, p.likes 
        FROM posts p LEFT JOIN users u on p.userid = u.userid 
        WHERE parent IS NULL;`,
    getPostById: 'SELECT * FROM posts p WHERE p.postid = ? OR p.parent = ?;',
    getPostByUserId: 'SELECT * FROM posts p WHERE p.userid = ?',
    createPost: 'INSERT INTO posts (userid, parent, body, location, image_url, likes) VALUES(?, ?, ?, ?, ?, ?);',
}