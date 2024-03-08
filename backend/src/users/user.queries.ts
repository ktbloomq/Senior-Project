export const userQueries = {
    getAllUsers: 'SELECT * FROM users',
    getUserById: 'SELECT * FROM users where userid = ?',
    createUser: 'INSERT INTO `senior-project`.users (username, password) VALUES(?, ?)',
    updateUser: 'UPDATE `senior-project`.users SET username=?, password=? WHERE userid=?'
}