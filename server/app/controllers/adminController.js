
const Admin = require("../models/adminModel");
const { createToken } = require("../ulilities/generateToken");
const { hashpassword, comparePassword } = require("../ulilities/passwordUtilities");
const Product = require("../models/productModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "All fields are required" })
        }

        const alreadyExist = await Admin.findOne({ email })
        if (alreadyExist) {
            return res.status(400).json({ error: "Email already exist" })
        }
        const hashedpassword = await hashpassword(password)
        const newAdmin = new Admin({ email, password: hashedpassword })
        const saved = await newAdmin.save()
        if (saved) {
            return res.status(200).json({ message: "Admin created", saved })
        }
    } catch (error) {
        console.log(error);

        return res.status(error.status || 500).json({ error: error.message } || "internal server error")
    }
}

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body
//         if (!email || !password) {
//             res.status(400).json({ error: "All fields are required" })
//         }
//         const adminExist = await Admin.findOne({ email })
//         if (!adminExist) {
//             return res.status(400).json({ error: "Admin not found" })
//         }

//         const passwordMatch = await comparePassword(password, adminExist.password)
//         console.log(passwordMatch);

//         if (!passwordMatch) {
//             return res.status(400).json({ error: "password does not match" })
//         }
//                                           //   const token= createToken(adminExist._id,"admin")

//                                            //      res.cookie("Admin_token",token)        
//                                            // return res.status(200).json({
//                                           //     message: " Admin login successfull",
//                                               //     adminExist,

//                                                 // })


//         const token = jwt.sign(
//             { id: adminExist._id, email: adminExist.email, role: "admin" },
//             process.env.secretkey,
//             { expiresIn: "3d" }
//         );

//         res.cookie("Admin_token", token, {
//             httpOnly: true,
//             sameSite: "lax",
//         })
//     } catch (error) {
//         console.log(error);

//         return res.status(error.status || 500).json({ error: error.message } || "internal server error")
//     }

// }

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const adminExist = await Admin.findOne({ email });
    if (!adminExist) {
      return res.status(400).json({ error: "Admin not found" });
    }

    const passwordMatch = await comparePassword(password, adminExist.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Password does not match" });
    }

    // ✅ Create token
    const token = jwt.sign(
      { id: adminExist._id, email: adminExist.email, role: "admin" },
      process.env.secretkey,
      { expiresIn: "3d" }
    );

    // ✅ Set cookie
    res.cookie("Admin_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false, // keep false for local dev
    });

    // ✅ Send response
    return res.status(200).json({
      message: "Admin login successful",
      admin: {
        id: adminExist._id,
        email: adminExist.email,
        role: "admin",
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ error: error.message || "Internal server error" });
  }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("Admin_token")
        return res.status(200).json({ message: "Logout successfull" })
    } catch (error) {
        console.log(error);

        return res.status(error.status || 500).json({ error: error.message } || "internal server error")
    }
}


// ✅ New: Dashboard Data
const getDashboardStats = async (req, res) => {
    try {
        // count total users from registered data
        const totalUsers = await User.countDocuments();

        // count total products
        const totalProducts = await Product.countDocuments();

        res.status(200).json({
            stats: {
                users: totalUsers,      // total registered users
                products: totalProducts // total uploaded products
            }
        });
    } catch (error) {
        console.error("Error fetching dashboard stats:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { register, login, logout, getDashboardStats }


