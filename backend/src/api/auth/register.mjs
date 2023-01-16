import client from "../../db/connect.mjs";
import bcrypt from "bcrypt";
import express  from "express";
const registerRouter = express.Router()

// Define a function for creating a new user
const register = async (request, response) => {
    const {
        id,
        email,
        password
    } = request.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Write a SQL query to insert the new user into the database

    client.query(
        "INSERT INTO users (id, email, password) VALUES ($1, $2, $3) RETURNING *",
        [id, email, hashedPassword],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(201).send(`User added with ID: ${results.rows[0].id}`);
        }
    );
};

registerRouter.post('/register', register)

export default registerRouter