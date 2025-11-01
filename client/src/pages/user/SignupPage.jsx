import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userSignUp } from "../../services/userServices";
import toast from "react-hot-toast";

const SignupPage = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const res = await userSignUp(values);
      toast.success("Signup successful ✅");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.error || "Signup failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md bg-neutral-900 rounded-2xl shadow-2xl p-8 border border-orange-600/40 relative">
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-5 py-2 rounded-full font-bold text-xl shadow-lg">
          my<span className="text-black">G</span>
        </div>

        <h1 className="text-3xl font-extrabold text-center mb-6">
          Create Your Account ✨
        </h1>
        <p className="text-center text-gray-400 mb-8">
          Join myG and enjoy exclusive offers and gadgets!
        </p>

        <fieldset className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            className="w-full input bg-black border border-gray-700 text-white focus:border-orange-500 focus:outline-none"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />

          <button
            className="w-full btn bg-orange-500 border-none hover:bg-orange-600 text-white font-semibold rounded-full mt-4 transition-all"
            onClick={onSubmit}
          >
            Sign Up
          </button>
        </fieldset>

        <div className="text-center text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-400 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
