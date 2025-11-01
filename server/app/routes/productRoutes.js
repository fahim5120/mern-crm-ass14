const express = require("express")
const upload = require("../Middlewares/multer")
const {create,listProducts,productDetails,updateProduct,deleteProduct} =require("../controllers/productControllers")
const authAdmin = require("../Middlewares/authAdmin")

const router=express.Router()

router.post("/create",authAdmin,upload.single("image"),create)
router.get("/listproducts",listProducts)
router.get("/productDetails/:productId",productDetails)
router.put("/update/:productId",authAdmin,upload.single("image"),updateProduct)
router.delete("/delete/:productId",authAdmin,deleteProduct)



module.exports=router