

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { userLogin } from "../../services/userServices";
import { saveUser } from "../../redux/features/userSlice";

const LoginPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const res = await userLogin(values);
      toast.success("Login successful ✅");
      dispatch(saveUser(res.data.userExist));
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed");
    }
  };

  // ✅ Admin login redirect
  const handleAdminLogin = () => {
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl shadow-2xl p-8 border border-orange-600/40 relative">
        {/* Logo */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-xl shadow-lg">
          my<span className="text-black">G</span>
        </div>

        <h1 className="text-3xl font-extrabold text-center mb-6">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Login to continue your shopping journey!
        </p>

        <fieldset className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm text-gray-300 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="text-right">
            <a className="text-sm text-orange-400 hover:underline cursor-pointer">
              Forgot password?
            </a>
          </div>

          {/* ✅ User login button */}
          <button
            onClick={onSubmit}
            className="w-full btn bg-orange-500 border-none hover:bg-orange-600 text-white font-semibold rounded-full mt-2 transition-all"
          >
            Log In
          </button>

          {/* ✅ Admin login button */}
          <button
            onClick={handleAdminLogin}
            className="w-full btn bg-gray-700 border-none hover:bg-gray-600 text-white font-semibold rounded-full mt-3 transition-all"
          >
            Admin Login
          </button>
        </fieldset>

        <div className="text-center text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-orange-400 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
