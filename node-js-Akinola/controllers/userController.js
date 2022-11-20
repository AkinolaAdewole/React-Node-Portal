const {res}=require('express')
const express = require('express')
const app =express()
const {req}=require('http')
const bcrypt=require('bcrypt')
const jwt = require("jsonwebtoken");
require('dotenv').config()


const userModel=require("../model/userModel")

const Register=(req,res)=>{
    const{firstName,LastName,email,password}=req.body;
    userModel.create({firstName,LastName,email,password},(err,result)=>{
      if(err){
        console.log("Error")
      } else{
        console.log('It is saved');
      }
    })
  }
  
  const Login=(req,res)=>{
    const {email,password}=req.body;
    userModel.findOne({email}, async (err,message)=>{
      if (err) {
        response.send(err);
      } else if (message) {
        const validPassword = await bcrypt.compare(password, message.password);

        if (validPassword) {
          const token = jwt.sign({_id: message._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
          response.json({token, message: "Token generated"});
        } else {
          response.send({status: false, message: "Invalid password"});
        }
      } else {
        response.send({status: false, message: "Email does not exist"});
      }
    })
  }

  const fetchProfile = (req, res) => {
    userModel.findById(req.user._id, (err, data) => {
      res.json({status: true, message: "User Profile fetched", data})
    })
  }
  module.exports={Register,Login,fetchProfile}