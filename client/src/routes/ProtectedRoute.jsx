// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const ProtectedRoute = ({ children, role }) => {
//   const { user, loading } = useAuth();

//   if (loading) return <div className="text-center mt-10">Loading...</div>;

//   // not logged in redirect to login
//   if (!user) return <Navigate to="/login" replace />;

//   // role check (if route requires admin)
//   if (role && user.role !== role) return <Navigate to="/" replace />;

//   return children;
// };

// export default ProtectedRoute;
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { axiosInstance } from "../axios/axiosinstance";
import toast from "react-hot-toast";

const ProtectedRoute = ({ children, role }) => {
  const [authorized, setAuthorized] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const res = await axiosInstance.get("/auth/check");
        if (res.data?.user?.role === role) {
          setAuthorized(true);
        } else {
          toast.error("no entry ❌");
          setAuthorized(false);
        }
      } catch (error) {
        setAuthorized(false);
      }
    };
    verifyUser();
  }, [role]);

  if (authorized === null)
    return <p className="text-center text-white mt-10">Loading...</p>;
  if (!authorized) return <Navigate to={`/${role}/login`} replace />;

  return children;
};

export default ProtectedRoute;

