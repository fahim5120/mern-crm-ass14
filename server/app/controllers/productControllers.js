const uploadToCloudinary = require("../ulilities/imageUpload");
const Product = require("../models/productModel")

exports.create = async (req, res) => {
    try {
        console.log("hello")
        console.log(req.file, "image uploaded by multer");



        const { title, description, price } = req.body
        if (!title || !description || !price) {
            return res.status(400).json({ error: "All fields are required" })
        }
        if (!req.file) {
            return res.status(400).json({ error: "Image not found" })
        }
        const cloudinaryRes = await uploadToCloudinary(req.file.path)
        console.log(cloudinaryRes, "image Uploaded by cloudinary");
        const newProduct = new Product({
            title, description, price, image: cloudinaryRes
        })
        let savedProduct = await newProduct.save()
        if (savedProduct) {
            return res.status(200).json({ message: "product added", savedProduct })
        }

    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }
}


exports.listProducts = async (req, res) => {
    try {
        const productlist = await Product.find()
        return res.status(200).json(productlist)
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}

exports.productDetails = async (req, res) => {
    try {
        const { productId } = req.params
        const productDetails = await Product.findById({ _id: productId }) //databasile _id poyitt req.paramsumayi match  ullathine  kond verum
        if (!productDetails) {
            return res.status(400).json({ error: "Product not found" })
        }
        return res.status(200).json(productDetails);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { productId } = req.params
        const { title, description, price } = req.body
        let imageUrl;

        let isProductExist = await Product.findById(productId)
        if (!isProductExist) {
            return res.status(404).json({ error: "product not found" })
        }
        if (req.file) {
            const cloudinaryRes = await uploadToCloudinary(req.file.path)
            imageUrl = cloudinaryRes
        }
        const updatedProduct = await Product.findByIdAndUpdate(productId, { title, description, price, image: imageUrl }, { new: true })
        res.status(200).json({ message: "Product updated", updatedProduct })

    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })

    }
}

exports.deleteProduct=async(req,res)=>{
    try {
           const { productId } = req.params
           const deletedProduct=await Product.findByIdAndDelete(productId)
           if(!deletedProduct){
              return res.status(404).json({error:"product not found"})
           }
           return res.status(200).json({message:"Product deleted"})
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ error: error.message || "internal server error" })
    }
}








//  Update product (Admin only)
exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { title, description, price } = req.body;

    const isProductExist = await Product.findById(productId);
    if (!isProductExist) {
      return res.status(404).json({ error: "Product not found" });
    }

    let imageUrl = isProductExist.image;
    if (req.file) {
      const cloudinaryRes = await uploadToCloudinary(req.file.path);
      imageUrl = cloudinaryRes;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { title, description, price, image: imageUrl },
      { new: true }
    );

    res.status(200).json({ message: "Product updated successfully", updatedProduct });
  } catch (error) {
    console.log(error);
    res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};


