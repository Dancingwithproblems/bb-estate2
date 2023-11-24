import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/user.route.js";
dotenv.config();

mongoose.connect(process.env.MONGO).then(() =>  {
    console.log("Connected to MongoDB!");
}).catch((err) => {
    console.log(err);
});
const app = express();

app.listen(3000, () => { 
    console.log('test');
    console.log("Server is running on port 3000!");
}
);
app.use("/api/user", userRouter);