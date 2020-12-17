import { createPool, Pool } from 'mysql2/promise';

export async function connect():Promise<Pool> {
const connection = await createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'db_validar',
    /**limite de conexiones */
    connectionLimit:10
})

return connection;
}