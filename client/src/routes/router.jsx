
// // import { createBrowserRouter, Navigate } from "react-router-dom";

// // import Userlayout from "../layout/Userlayout";
// // import AboutPage from "../pages/user/AboutPage";
// // import Products from "../pages/user/Products";
// // import Homepage from "../pages/user/Homepage";
// // import LoginPage from "../pages/shared/LoginPage";
// // import SignupPage from "../pages/user/SignupPage";
// // import CartPage from "../pages/CartPage";
// // import AdminLoginPage from "../pages/admin/AdminLoginPage.jsx";
// // import AdminDashboardPage from "../pages/admin/Dashboard.jsx";
// // import AdminProductsPage from "../pages/admin/Products.jsx";
// // import AddProductPage from "../pages/admin/AddProductPage.jsx";
// // import AdminLayout from "../layout/AdminLayout.jsx";


// // export const router = createBrowserRouter([
// //     {
// //         path: "/",
// //         element: <Userlayout />,
// //         errorElement: <h1>Error page</h1>,
// //         children: [
// //             {
// //                 path: "",
// //                 element: <Homepage />,
// //             },
// //             {
// //                 path: "about",
// //                 element: <AboutPage />,
// //             },
// //             {
// //                 path: "products",
// //                 element: <Products />,
// //             },
// //             {
// //                 path: "cart",
// //                 element: <CartPage />,
// //             },
// //             {
// //                 path: "login",
// //                 element: <LoginPage />,
// //             },
// //             {
// //                 path: "signup",
// //                 element: <SignupPage />,
// //             }
// //         ]
// //     },


// //       //  Admin routes
// //   {
// //   path: "/admin",
// //   element: <AdminLayout />,
// //   children: [
// //     { index: true, element: <Navigate to="/admin/dashboard" replace /> },
// //     { path: "login", element: <AdminLoginPage /> },
// //     { path: "dashboard", element: <AdminDashboardPage /> },
// //     { path: "products", element: <AdminProductsPage /> },
// //     { path: "addproduct", element: <AddProductPage /> },
// //   ],
// // },


// // ]);

// import { createBrowserRouter, Navigate } from "react-router-dom";
// import Userlayout from "../layout/Userlayout";
// import AboutPage from "../pages/user/AboutPage";
// import Products from "../pages/user/Products";
// import Homepage from "../pages/user/Homepage";
// import LoginPage from "../pages/shared/LoginPage";
// import SignupPage from "../pages/user/SignupPage";
// import CartPage from "../pages/CartPage";
// import AdminLoginPage from "../pages/admin/AdminLoginPage.jsx";
// import AdminDashboardPage from "../pages/admin/Dashboard.jsx";
// import AdminProductsPage from "../pages/admin/Products.jsx";
// import AddProductPage from "../pages/admin/AddProductPage.jsx";
// import AdminLayout from "../layout/AdminLayout.jsx";

// import ProtectedRoute from "./ProtectedRoute.jsx";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Userlayout />,
//     errorElement: <h1>Error page</h1>,
//     children: [
//       { path: "", element: <Homepage /> },
//       { path: "about", element: <AboutPage /> },
//       { path: "products", element: <Products /> },
//       { path: "cart", element: <CartPage /> },
//       { path: "login", element: <LoginPage /> },
//       { path: "signup", element: <SignupPage /> },
//     ],
//   },

//   //  Admin routes (protected)
//   {
//     path: "/admin",
//     element: (
//       <ProtectedRoute role="admin">
//         <AdminLayout />
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <Navigate to="/admin/dashboard" replace /> },
//       { path: "login", element: <AdminLoginPage /> },
//       { path: "dashboard", element: <AdminDashboardPage /> },
//       { path: "products", element: <AdminProductsPage /> },
//       { path: "addproduct", element: <AddProductPage /> },
//     ],
//   },
// ]);


import { createBrowserRouter, Navigate } from "react-router-dom";
import Userlayout from "../layout/Userlayout";
import AboutPage from "../pages/user/AboutPage";
import Products from "../pages/user/Products";
import Homepage from "../pages/user/Homepage";
import LoginPage from "../pages/shared/LoginPage";
import SignupPage from "../pages/user/SignupPage";
import CartPage from "../pages/CartPage";
import AdminLoginPage from "../pages/admin/AdminLoginPage.jsx";
import AdminDashboardPage from "../pages/admin/Dashboard.jsx";
import AdminProductsPage from "../pages/admin/Products.jsx";
import AddProductPage from "../pages/admin/AddProductPage.jsx";
import AdminLayout from "../layout/AdminLayout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

export const router = createBrowserRouter([
  // 🧍‍♂️ User routes
  {
    path: "/",
    element: <Userlayout />,
    errorElement: <h1>Error page</h1>,
    children: [
      { path: "", element: <Homepage /> },
      { path: "about", element: <AboutPage /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
    ],
  },

  // 🧑‍💼 Admin Login (no protection)
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },

  // 🔒 Protected admin routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: "dashboard", element: <AdminDashboardPage /> },
      { path: "products", element: <AdminProductsPage /> },
      { path: "addproduct", element: <AddProductPage /> },
    ],
  },
]);

