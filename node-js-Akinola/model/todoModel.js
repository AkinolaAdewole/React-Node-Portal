const mongoose=require("mongoose")
const bcrypt=require('bcrypt')


const TodoSchema = new mongoose.Schema({
  firstName:String,
  lastName:String,
  time:String,
  date:String,
  password:String,
  }) 

  TodoSchema.pre("save", async function (next){
    let {password}=this;
    const salt = await bcrypt.genSalt(10);
    const hashed= await bcrypt.hash(password, salt);
    this.password=hashed;
    next()
})


const TodoModel=mongoose.model('myPortal', TodoSchema)
 
  module.exports=TodoModel