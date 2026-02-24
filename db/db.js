const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();

const DB_URL = process.env.DB_URL;

const connectTODatabase = async () =>{
    try{
       await mongoose.connect(DB_URL);
        console.log("Connected to database successfully");

    } catch (error){
        console.log(`Error while connecting database is ${error}`);

    }

}

module.exports = connectTODatabase;