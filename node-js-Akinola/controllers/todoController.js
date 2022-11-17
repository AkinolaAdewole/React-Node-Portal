const {res}=require('express')
const express = require('express')
const app =express()
const {req}=require('http')
const bcrypt=require('bcrypt')
const bodyParser=require('body-parser')

// app.use(bodyParser.urlencoded({ extended: true })) 
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const TodoModel=require("../model/todoModel")
const { log } = require('console')



  const addTodo=(req,res)=>{
    const {firstName,lastName,time,date,password,email}=req.body;
    TodoModel.create({firstName,lastName,email,time,date,password},(err,result)=>{
      if(err){
        console.log("Error dey ooo")
      }else{
        console.log("saved")
      }
    })
    res.render('/inputTodo')
  }


  


const getTodo=(req, res)=>{
  // TodoModel.find((err,res)=>{
  //     res.send(json.stringify(res))
  // })
  TodoModel.find((err,result)=>{
    if(err){
        console.log(err);
        console.log("There is error");
    }else{ 
        res.send({allUser:result});  
    }  
})   
}

      
module.exports={getTodo, addTodo}

