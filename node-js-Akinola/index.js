const express = require('express')
const {res}=require ('express')
const {req}=require('http')
const http = require('http');
const app =express()

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{
    cors:{
        origin:"*",
        methods:["POST","PUT", "GET"]
    }
});



io.on('connection', (socket) => {
    console.log('a user connected');
    socket .on("send-user", (data)=>{
        socket.emit("user-sent", data)
    })
  });






const cors=require('cors')
app.use(express.json())
const bodyParser=require('body-parser')
const {getTodo,addTodo}= require ("./controllers/todoController")
const { addStudent, getStudent } = require('./controllers/userController')

// const urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.urlencoded({ extended: true })) 
const mongoose=require('mongoose')
const cloudinary=require('cloudinary')

const dotenv=require('dotenv')
const multer = require('multer')

dotenv.config()


app.use(cors())
app.use(express.json())
const upload=multer({})

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME,  
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET 
  });
console.log(process.env.CLOUD_NAME,process.env.API_KEY,process.env.API_SECRET)

// let filepath="C:/Users/Adewole/Desktop/REACT/FRONT-END/pwaclass/src/pics/kuda11.jpg"
// cloudinary.v2.uploader.upload(filepath,{folder:"sqiNodeClass"}, 
//   (err, result)=> {
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result)
//     }
// });


mongoose.connect(
    process.env.URI, 
    {useNewUrlParser:true,useUnifiedTopology:true}).then((res)=>{
    console.log("connected")
}).catch(err=>{
    console.log(err);
}) 


app.post('signup',addStudent)
app.post('signin',getStudent)


// To upload file
app.get('/inputTodo', (req,res)=>{
    res.render("pages/inputTodo")
})

app.post('/inputTodo',addTodo)


// app.post('/todo', upload.single("image"),(req,res)=>{
//     res.send('send')
// })

app.use('/todo',getTodo)
app.get('/todo',getTodo)



// set template engine
app.set('view engine',  'ejs')

// Static files(middlewares) 

server.listen(4500, ()=>{ 
    console.log('server is running')
}) 