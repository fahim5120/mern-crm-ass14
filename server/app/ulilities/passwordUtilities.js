const bcrypt=require("bcrypt")

const hashpassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    const hashedpassword= await bcrypt.hash(password,salt)
    return hashedpassword
}


const comparePassword=async(password,hashedpassword)=>{
    const passwordMatch= await bcrypt.compare(password,hashedpassword)
    return passwordMatch
}


module.exports={hashpassword,comparePassword}