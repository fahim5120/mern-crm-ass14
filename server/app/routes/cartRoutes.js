
const express = require("express")
const { addToCart, getCart ,removeFromCart} = require("../controllers/cartControllers")
const authUser = require("../Middlewares/authUser")

const router = express.Router()

// ✅ Get user's cart
router.get("/getcart", authUser, getCart)

// ✅ Add product to cart
router.post("/addtocart/:productId", authUser, addToCart)
router.delete("/removefromcart/:productId", authUser, removeFromCart)

module.exports = router
