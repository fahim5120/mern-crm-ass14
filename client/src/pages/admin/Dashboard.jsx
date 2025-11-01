import React, { useEffect, useState } from "react";
import { FaBoxOpen, FaUsers, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../axios/axiosinstance";

const AdminDashboardPage = () => {
  const [stats, setStats] = useState({ products: 0, users: 0 });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // ✅ Corrected URL — no double /api
        const res = await axiosInstance.get("/admin/dashboard-stats");
        setStats(res.data.stats);
        setError("");
      } catch (err) {
        console.error("Error fetching dashboard stats:", err);
        setError("Failed to load dashboard stats. Please try again later.");
      }
    };

    fetchStats();
  }, []);

  // ✅ Function to handle navigation to home
  const handleGoHome = () => {
    navigate("/"); // redirect to homepage
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500">
          Welcome, Admin 👋
        </h1>

        {/* ✅ Go Home Button */}
        <button
          onClick={handleGoHome}
          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition"
        >
          <FaHome />
          Home
        </button>
      </div>

      {/* Show error message if any */}
      {error && (
        <div className="bg-red-500 text-white p-3 rounded-lg">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Total Products */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex justify-between items-center">
          <div>
            <h2 className="text-gray-400">Total Products</h2>
            <p className="text-2xl font-bold text-white mt-1">
              {stats.products}
            </p>
          </div>
          <FaBoxOpen className="text-orange-500 text-3xl" />
        </div>

        {/* Users Registered */}
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 flex justify-between items-center">
          <div>
            <h2 className="text-gray-400">Users Registered</h2>
            <p className="text-2xl font-bold text-white mt-1">
              {stats.users}
            </p>
          </div>
          <FaUsers className="text-orange-500 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
