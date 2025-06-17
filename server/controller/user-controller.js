import User from '../model/user.js'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import Token from '../model/token.js'


dotenv.config();
export const signupUser=async (request,response)=>{
 try{
   const hashpassword= await bcrypt.hash(request.body.password,10)
    const user={username:request.body.username , name:request.body.name, password:hashpassword}
    const newUser= new User(user);
    await newUser.save();
  return response.status(200).json ({msg:`Signup successful`})
 }
 catch(error){
    console.error('Signup error:', error);
    if (error.code === 11000) {
        return response.status(400).json({ msg: 'Username already exists' })
    }
    return response.status(500).json({ msg: `Error while signing up user` }) 
 }
}
export const loginUser=async(request,response)=>{
  try {
    console.log('Login attempt for username:', request.body.username);
    
    let user=await User.findOne({username: request.body.username})
    if(!user){
      console.log('User not found:', request.body.username);
      return response.status(400).json({msg:"Username doesnot match"})
    }
    let match= await bcrypt.compare(request.body.password,user.password);
    if(match){
      const accessToken=jwt.sign(user.toJSON(),process.env.ACCESS_SECRET_KEY,{expiresIn:'15m'})
      const refreshToken= jwt.sign(user.toJSON(),process.env.REFRESH_SECRET_KEY)
      
      const newToken = new Token({token:refreshToken})
      await newToken.save();
      console.log('Login successful for user:', request.body.username);
      return response.status(200).json({accessToken:accessToken,refreshToken:refreshToken, name:user.name,username:user.username })
    }
    else{
      console.log('Password mismatch for user:', request.body.username);
      return response.status(400).json({msg:"Password doesnot match "})
    }
  }
  catch (error){
    console.error('Login error:', error);
    return response.status(500).json({msg:'Error while logging in user'})
  }
}