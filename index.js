const express = require('express');
const path = require('path');
const multer = require('multer');

const upload = multer({dest: "uploads/"})


const app = express();
const port = 8000;


app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));



app.use(express.urlencoded({extended: false}));


app.get("/",(req,res) =>{
    return res.render("home");
})

app.post("/upload",(req,res) =>{

})


app.listen(port,()=> console.log('Server is running'));