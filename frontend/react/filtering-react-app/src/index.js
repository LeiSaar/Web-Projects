import express from "express";
const app = express();
import cors from "cors";
import { Users } from "./users.js";

app.use(cors());

app.get("/", (req, res)=> {

    const {q} = req.query;

    if (q){
    const keys = ["first_name", "last_name", "email"];

    const search = (data) => {
       return data.filter((item) => 
        keys.some((key)=> item[key].toUpperCase().includes(q.toUpperCase())));
    }

    res.json(search(Users).slice(0,10));
    }  else{
        res.json(Users.slice(0,10));
    }

});

const server = app.listen(5000, ()=> {
    const address = server.address();
    console.log(`APPI is working at http://localhost:${address.port}`);
});