const {Client} = require('pg')
//process.env.DB_URL);
const client = new Client({
    host:"localhost",
    user:"postgres",
    port: 5432,
    password: "",
    database: "origin"
})

client.connect();

client.query(`select * from user`,(req,res)=>{
    if(!err){
        console.log(res.rows)
    }
    else{
        console.log(err.message)
    }
    client.end
})

module.exports = client;