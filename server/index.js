const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const connectDB = require("./app/config/db")
const userrouter=require('./app/routes/userRoutes')
const adminrouter=require('./app/routes/adminRoutes')
const cartrouter=require('./app/routes/cartRoutes')
const productrouter=require('./app/routes/productRoutes')
const authRoutes = require("./app/routes/authRoutes")

require("dotenv").config()
const cookieparser=require("cookie-parser")

const app=express()

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
connectDB()




app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cookieparser())

app.get("/", (req, res) => {
  res.send("This is the backend l");
})


// 🟢 multer form-data routes FIRST
app.use("/api/product",productrouter)

app.get("/",(req,res)=>{
res.send("hello world from backend")
})


app.use("/api/user",userrouter)
app.use("/api/admin",adminrouter)
app.use("/api/cart",cartrouter)
app.use("/api/auth", authRoutes)






app.listen(process.env.PORT,()=>{
    console.log(`server runnung on port ${process.env.PORT}`);
    
})