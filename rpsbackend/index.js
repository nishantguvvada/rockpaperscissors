const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    return res.status(200).json({message: "success"});
});

app.listen(3000);