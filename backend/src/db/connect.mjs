import * as dotenv from 'dotenv'
import pkg from 'pg';

dotenv.config()
const {Client} = pkg;


const client = new Client({
    user: 'origin_admin',
    host: 'localhost',
    database: 'origin_db',
    password: 'Becode-1234',
    port: 5432,
});

client.connect((err) => {
    if (err) {
        console.error('connection error', err.stack)
    } else {
        console.log('connected')
    }
});

export default client;