const express = require("express")
const { register, login, logout,getDashboardStats } = require("../controllers/admincontroller")
const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)

router.get("/dashboard-stats", getDashboardStats)


module.exports=router