const express = require('express');
const app = express()

app.use(express.json());
app.listen(4000 , () => {
    console.log("server started succesfully..")
})

app.get('/',(req,res) => {
    res.send("our server is started jii......on 4000 server😘💖");
});

app.post('/api/foods',(req,res) => {
   const {name,color}= req.body;
   console.log("name : ",name);
   console.log("color : ",color);
   res.send("food is orderd succesfully");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydatabase2')

.then( () => {console.log("connection succesfull");})
.catch( (error) => {console.log("mongodb error",error)});

