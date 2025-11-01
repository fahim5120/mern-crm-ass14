const jwt = require("jsonwebtoken")

const authUser = (req,res,next) => {
    try {
        //evide aann cookiesile token valid aano enn nokkunnath
        const  { token } = req.cookies
        
        
        if(!token){
            return res.status(401).json({error:"jwt token not found"})
        }

        const verifiedToken=jwt.verify(token,process.env.secretkey)
        if(!verifiedToken){
            return res.status(401).json({error:"User not autherized"})
        }

        if(verifiedToken.role !=="user"){
            return res.status(401).json({error:"Access denied"})
        }

        req.user=verifiedToken.id

        next()
    } catch (error) {
        res.status(error.status || 401).json({ error: error.message || "user autherization failed" })
    }
}


module.exports=authUser