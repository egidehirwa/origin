const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: "http://127.0.0.1:3000", //client-side port
    })
);

//database connection will be here

app.get("/test", (req, res) => {
    res.json("test ok");
});

app.post("/tree", (req, res) => {
    const { name, lastName } = req.body;
    res.json({ name, lastName });
});

//port
app.listen(4000);
