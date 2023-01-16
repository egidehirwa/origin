import client from "../../db/connect.mjs"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import express from "express";
const loginRouter = express.Router()
// Define a function for logging in a user

const login = async (request, response) => {

    const {
        email,
        password
    } = request.body;
    // Write a SQL query to retrieve the user with the given email address

    // Execute the SQL query
    const result = await client.query("SELECT * FROM users WHERE email = $1", [
        email,
    ]);

    // If the user does not exist, return an error
    if (result.rows.length === 0) {
        return response.json({
            error: "User not found"
        });
    }
    // If the user exists, get the user data

    const user = result.rows[0];

    // Verify that the password provided by the user matches the password stored in the database
    // This example uses bcrypt to hash and compare the passwords
    const passwordIsValid = await bcrypt.compare(password, user.password);


    //If the password is invalid, return an error
    if (!passwordIsValid) {
        return response.json({
            error: "Invalid password"
        });
    }

    /* TEST 
    if (password != user.password) {
        return response.json({
            error: "Invalid password"
        });
    }
    */

    // If the password is valid, generate a JWT that encodes the user's information
    const token = jwt.sign({
        user
    }, process.env.JWT_SECRET, {
        algorithm: "HS512",
        expiresIn: "1h",
    });

    console.log(token)
    // Store the token in a cookie you can split it and store in multiple for more security
    return response
        .cookie("access_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
        })
        .status(200)
        .send(`Logged in successfully with email ${email}`);
};

loginRouter.post('/login', login)

export default loginRouter