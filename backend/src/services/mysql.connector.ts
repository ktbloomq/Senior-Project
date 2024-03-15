import { createPool, Pool } from "mysql";
export let pool: Pool | null = null;

export function initializeMySqlConnector() {
    try {
        pool = createPool({
            connectionLimit:
                parseInt(process.env.MY_SQL_DB_CONNECTION_LIMIT !== undefined ? process.env.MY_SQL_DB_CONNECTION_LIMIT : ""),
            port:
                parseInt(process.env.MY_SQL_DB_PORT !== undefined ? process.env.MY_SQL_DB_PORT : ""),
            host: process.env.MY_SQL_DB_HOST,
            user: process.env.MY_SQL_DB_USER,
            password: process.env.MY_SQL_DB_PASSWORD,
            database: process.env.MY_SQL_DB_DATABASE
        });

        console.debug('MySql Adapter Pool generated successfully');

        pool.getConnection((err, connection) => {
            if(err) {
                console.error('error: mysql failed to connect');
                throw new Error('not able to connect to database');
            } else {
                console.log('connection made');
                connection.release();
            }
        });
    } catch (error) {
        console.error('[mysql.connector][initializeNySqlConnector][Error]: ', error);
        throw new Error('failed to initialize pool');
    }
}

export function execute <T>(query: string, params: string[] | Object): Promise<T> {
    try {
        return new Promise<T>((resolve, reject) => {
            pool!.query(query, params, (error, results) => {
                if(error) reject(error);
                else resolve(results);
            });
        });
    } catch(error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
}