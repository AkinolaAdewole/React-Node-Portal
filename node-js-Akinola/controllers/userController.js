const {res}=require('express')
const express = require('express')
const app =express()
const {req}=require('http')
const bcrypt=require('bcrypt')
const bodyParser=require('body-parser')

const {userModel}=require("../model/userModel")

const addStudent=(req,res)=>{
    const{firstName,LastName,email,password}=req.body;
    userModel.create({firstName,LastName,email,password},(err,result)=>{
      if(err){
        console.log("Error")
      } else{
        console.log('It is saved');
      }
    })
  }
  
  const getStudent=(req,res)=>{
    const {email,password}=req.body;
    userModel.findOne({email}, async (err,message)=>{
      if(err){
        console.log('error dey ooo');
      }else{
            const validPassword= await bcrypt.compare(password, message.password);
  
            if(validPassword){
              const token=jwt.sign({_id:message._id})
            }
      }
    })
  }

  module.exports={addStudent,getStudent}