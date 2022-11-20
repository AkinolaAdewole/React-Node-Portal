const mongoose=require("mongoose")
const bcrypt=require('bcrypt')

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    profileImagePath: String,
		password:String
    }) 
  
    userSchema.pre("save", async function (next){
      let {password}=this;
      const salt = await bcrypt.genSalt(10);
      const hashed= await bcrypt.hash(password, salt);
      this.password=hashed;
      next()
  })
  const userModel=mongoose.model('newPortal',userSchema)

  module.exports= userModel