// require ('dotenv').config({path: './env'})


import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config({
    path:'./env'
});

connectDB()
.then( () => {
    app.on("error", (error) =>{
        console.log("Error: ", error);
        throw Error
    })

    app.listen(process.env.PORT||8000, () => {
        console.log(`server is running at port: ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MongoDB connection failed!!", error);
})






/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express();
( async () => {
    try {
        await mongoose.connect(`${prcess.env.MONGODB_URI}/${DB_NAME}`);

        app.on("error", (error) =>{
            console.log("Error: ", error);
            throw Error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listning on port ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Error: ", error);
        throw Error
    }
} )()
*/