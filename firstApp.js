const express = require("express");
const app = express();
const port = 3000


app.use(express.json());
app.listen(port,() => {
    console.log("app started");
})

app.get("/"  , (req,res) => {
  res.send("start successfully")
})

app.post("/car",(req,res) =>{
    res.send("received a post request");
})
