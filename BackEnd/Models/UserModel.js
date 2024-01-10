const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        required: true,
        
      },
      password: {
        type: String,
        required: true,
        Select : false
      },
})

userSchema.pre('save', async function(next){
  this.password = await bcrypt.hash(this.password,10);  
})

userSchema.methods.generatejwtToken = function(){
  return jwt.sign({id:this.id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_SECRET_EXPIRES
  })
}

userSchema.methods.isValidPassword = async function(Enteredpassword){
 return await bcrypt.compare(Enteredpassword,this.password);
}

const users = mongoose.model('user', userSchema);
module.exports = users;