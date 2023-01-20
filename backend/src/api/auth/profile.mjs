import client from "../../db/connect.mjs"
import {Client} from 'pg'


const client = new Client({
    connectionString: "postgresql://username:password@host:port/database"
})

client.connect()

const user = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    age: 30
  };
  
  const query = `
    INSERT INTO users (name, email, age)
    VALUES ('${user.name}', '${user.email}', ${user.age})
    RETURNING *
  `;
  
  client.query(query, (err, res) => {
    if (err) throw err;
    console.log(res.rows[0]);
    client.end();
  });
  