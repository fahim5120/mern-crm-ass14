const jwt = require("jsonwebtoken")

const authAdmin = (req,res,next) => {
    try {
        //evide aann cookiesile token valid aano enn nokkunnath
        const  { Admin_token } = req.cookies
        
        
        if(!Admin_token){
            return res.status(401).json({error:"jwt token not found"})
        }

        const verifiedToken=jwt.verify(Admin_token,process.env.secretkey)
        if(!verifiedToken){
            return res.status(401).json({error:"Admin not autherized"})
        }

        if(verifiedToken.role !=="admin"){
            return res.status(401).json({error:"Access denied"})
        }

        req.admin=verifiedToken.id

        next()
    } catch (error) {
        res.status(error.status || 401).json({ error: error.message || "admin autherization failed" })
    }
}


module.exports=authAdmin