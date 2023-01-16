import bcrypt from"bcrypt";
import client from "../../../configs/database.mjs";
import jwt from "jsonwebtoken";




//Login Function

exports.login = async (req, res) =>{
    const { email, password} = req.body

    try{
        const data = await client.query(`SELECT * FROM user WHERE email= $1;`,[email])//Check if the user exist in the database
        const user = data.rows;

        if(user.length === 0){
            res.status(400).json({
                error: "User is not registered, Sign Up first",
            })
        }

        else{
            bcrypt.compare(password, user[0].password, (err, result) =>{//Comparing the hashed password
            
                if(err){
                    res.status(500).json({
                        error: "server error",
                    })
                }
            else if (result ===true) {/*checking if credentials match*/
        const token = jwt.sign(
            {
                email: email,
            },
            process.env.SECRET_KEY
        )
    res.status(200).json({
        message: "User signed in!",
        token: token,
    });    
    }
            else{
                if(result != true)
                res.status(400).json({
                    error: "Enter correct password!",
                })
            }   
        })
        }

    
    }
    catch (err){
        console.log(err);
        res.status(500).json({
            error: "Database error occured while signing in !", //Database Connection error
        })
    }
}