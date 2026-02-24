const express = require('express');
const connectTODatabase = require('./db/db');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
connectTODatabase();

const PORT = process.env.PORT;
      
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Himal Sunar");
})