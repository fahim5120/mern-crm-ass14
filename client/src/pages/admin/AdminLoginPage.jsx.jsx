import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance } from "../../axios/axiosinstance";


const AdminLoginPage = () => {
  const [values, setValues] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axiosInstance.post("/admin/login", values);
      toast.success("Admin login successful ✅");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.error || "Login failed ");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl shadow-2xl p-8 border border-orange-600/40 relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-xl shadow-lg">
          Admin <span className="text-black">Panel</span>
        </div>

        <h1 className="text-3xl font-extrabold text-center mb-6">
          Admin Login 🔐
        </h1>

        <fieldset className="space-y-5">
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
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
              placeholder="Enter password"
              className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full btn bg-orange-500 hover:bg-orange-600 border-none text-white font-semibold rounded-full mt-3 transition-all"
          >
            Login
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default AdminLoginPage;
