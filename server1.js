//creating server using express 


// server instantiate
const express = require("express");
const app = express();


app.use(express.json());

//activate on 3000
app.listen(3000, () =>{
    console.log("server started at port no 3000")
});

//creating get req
app.get('/',(req,res) =>{
    res.send("hello je server start hogya hai don't worry....❤🚀");
})

//post req
app.post('/api/cars',(req,res) =>{
  const {name,brand} = req.body;
  console.log("name :",name );
  console.log("brand : ",brand);
  res.send("car deliver succesfull");
})    

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase')



.then(() => {console.log("connection successful")})
.catch( (error) => { console.log("❌ MongoDB Error:", error);
});
