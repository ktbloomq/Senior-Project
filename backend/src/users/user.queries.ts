export const userQueries = {
    getAllUsers: 'SELECT * FROM users',
    getUserById: 'SELECT * FROM users where userid = ?',
    getIdFromGoogle: 'SELECT userid FROM users where googleid = ?',
    createUser: 'INSERT INTO `senior-project`.users (googleid, name) VALUES(?, ?)',
    updateUser: 'UPDATE `senior-project`.users SET name=? WHERE userid=?'
}