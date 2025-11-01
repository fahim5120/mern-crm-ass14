import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FaBoxOpen, FaPlusCircle, FaSignOutAlt, FaTachometerAlt, FaHome } from "react-icons/fa";
import toast from "react-hot-toast";
import { axiosInstance } from "../axios/axiosinstance";

const AdminLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axiosInstance.post("/admin/logout");
      toast.success("Logged out successfully");
      navigate("/admin/login");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 p-6 border-r border-orange-600/30 flex flex-col justify-between">
        <div>
          <h1
            className="text-3xl font-extrabold mb-10 text-center cursor-pointer"
            onClick={() => navigate("/admin/dashboard")}
          >
            <span className="text-orange-500">my</span>
            <span className="text-white">G</span> Admin
          </h1>

          <ul className="space-y-4">
            <li
              className="flex items-center gap-3 cursor-pointer hover:text-orange-500"
              onClick={() => navigate("/admin/dashboard")}
            >
              <FaTachometerAlt /> Dashboard
            </li>

            <li
              className="flex items-center gap-3 cursor-pointer hover:text-orange-500"
              onClick={() => navigate("/admin/products")}
            >
              <FaBoxOpen /> Products
            </li>

            <li
              className="flex items-center gap-3 cursor-pointer hover:text-orange-500"
              onClick={() => navigate("/admin/addproduct")}
            >
              <FaPlusCircle /> Add Product
            </li>

            {/* 🏠 Go to Home option */}
            <li
              className="flex items-center gap-3 cursor-pointer hover:text-orange-500"
              onClick={() => navigate("/")}
            >
              <FaHome /> Go to Home
            </li>
          </ul>
        </div>

        <div
          className="flex items-center gap-3 cursor-pointer hover:text-red-500 transition-colors"
          onClick={handleLogout}
        >
          <FaSignOutAlt /> Logout
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-900 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
