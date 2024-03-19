export const postQueries = {
    getAllposts: 
        `SELECT * FROM post_info 
        WHERE parent IS NULL;`,
    getPostById: 'SELECT * FROM post_info p WHERE p.postid = ? OR p.parent = ?;',
    getPostByUserId: 'SELECT * FROM post_info p WHERE p.userid = ?;',
    createPost: 'INSERT INTO posts (userid, parent, body, location, image_url, likes) VALUES(?, ?, ?, ?, ?, ?);',
    likePost: 'UPDATE posts SET likes = likes + 1 WHERE postid = ?;'
}