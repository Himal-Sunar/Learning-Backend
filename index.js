const express = require('express');
const connectTODatabase = require('./db/db');
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());
connectTODatabase();

app.use('/api/auth', require("./routes/userRoutes"))
const PORT = process.env.PORT;
      
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Himal Sunar");
})