import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./api/routes/auth.js"
import usersRoute from "./api/routes/users.js"
import hotelsRoute from "./api/routes/hotels.js"
import roomsRoute from "./api/routes/rooms.js"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()

function handleError(error) {
    console.log("Database connection failed:", error)
}

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to Mongodb")
    } catch (error) {
        handleError(error);
    }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected!");
});


//middlewares

app.use(cookieParser());

app.use((req, res, next)=>{
    console.log("Hi I'm a middleware!");
    next();
})


app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) =>{

    console.error("Global Error Handler:", err.message);
    res.status(err.status || 500).json({
        success: false,
        status: err.status || 500,
        message: err.message || "Something went wrong",
        stack: err.stack
    });
});

app.listen(8800, () => {
    connect();
    console.log("Connected to backend!");
});



