const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.get("/chat", (req, res) => {
    res.send("chat fetched successfully")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running on port ${PORT}`));