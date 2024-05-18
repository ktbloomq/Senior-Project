export const userQueries = {
    getAllUsers: 'SELECT * FROM users',
    getUserById: 'SELECT * FROM users where userid = ?',
    createUser: 'INSERT INTO `senior-project`.users (userid, name) VALUES(?, ?)',
    updateUser: 'UPDATE `senior-project`.users SET name=? WHERE userid=?'
}