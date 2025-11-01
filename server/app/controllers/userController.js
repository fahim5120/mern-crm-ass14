// const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")
require("dotenv").config()

const User = require("../models/userModel")
const { hashpassword, comparePassword } = require("../ulilities/passwordUtilities")
const { createToken } = require("../ulilities/generateToken")



//register
exports.register = async (req, res) => {
    try {
        const { name, email, username, phone, password, confirmpassword } = req.body
        if (!name || !email || !username || !phone || !password || !confirmpassword) {
            return res.status(400).json({ erroe: "All fields are required" })
        }
        if (password !== confirmpassword) {
            res.status(400).json({ error: "Password does not match" })
        }
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ error: "Email already exist" })
        }
        const hashedpassword = await hashpassword(password)

        const newUser = new User({ name, email, username, phone, password: hashedpassword })


        const saved = await newUser.save()
        if (saved) {
            const token = createToken(saved._id)

            res.cookie("token", token)
            return res.status(200).json({ message: "User created successfully" })
        }

    } catch (error) {
        console.log(error);

        return res.status(error.status || 500).json({ error: error.message } || "internal server error")
    }
}

// login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ error: "User not found" });
    }

    const passwordMatch = await comparePassword(password, userExist.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: "Password does not match" });
    }

    const token = createToken(userExist._id);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
    });

    return res.status(200).json({
      message: "Login successful",
      userExist
    });
  } catch (error) {
    console.log(error);
    return res
      .status(error.status || 500)
      .json({ error: error.message || "Internal Server Error" });
  }
};


//logout
exports.logout = (req, res) => {
    try {
        res.clearCookie("token")
        res.status(200).json({ message: "Logged out" })
    } catch (error) {
        console.log(error);

        return res.status(error.status || 500).json({ error: error.message } || "internal server error")
    }
}



