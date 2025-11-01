import React from "react";
import Darkmode from "./shared/Darkmode";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../services/userServices";
import { persistor } from "../../redux/store";
import { clearUser } from "../../redux/features/userSlice";
import { IoCart } from "react-icons/io5";

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user);

    const handleLogout = async () => {
        try {
            await userLogout();
            persistor.purge();
            dispatch(clearUser());
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className="navbar bg-black text-white px-6 shadow-md sticky top-0 z-50">
            {/* Left Side - Logo & Mobile Menu */}
            <div className="navbar-start">
                <div className="dropdown">
                    {/* Mobile menu icon */}
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden text-orange-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>

                    {/* Dropdown menu for mobile */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-black rounded-box w-52 text-white"
                    >
                        <li onClick={() => navigate("/")}>
                            <a className="hover:text-orange-500 transition">Home</a>
                        </li>
                        <li onClick={() => navigate("/about")}>
                            <a className="hover:text-orange-500 transition">About</a>
                        </li>
                        <li onClick={() => navigate("/products")}>
                            <a className="hover:text-orange-500 transition">Products</a>
                        </li>
                    </ul>
                </div>

                {/* myG Logo */}
                <a
                    onClick={() => navigate("/")}
                    className="btn btn-ghost normal-case text-2xl font-extrabold cursor-pointer"
                >
                    <span className="text-orange-500">my</span>
                    <span className="text-white">G</span>
                </a>
            </div>

            {/* Center - Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    <li onClick={() => navigate("/")}>
                        <a className="hover:text-orange-500 transition">Home</a>
                    </li>
                    <li onClick={() => navigate("/about")}>
                        <a className="hover:text-orange-500 transition">About</a>
                    </li>
                    <li onClick={() => navigate("/products")}>
                        <a className="hover:text-orange-500 transition">Products</a>
                    </li>
                </ul>
            </div>

            {/* Right Side - Darkmode + Auth */}
            <div className="navbar-end gap-5">
                <Darkmode />

                {userData.user && Object.keys(userData.user).length > 0 ? (
                    <div className="flex items-center gap-3">
                        <span className="text-orange-400 font-semibold">
                            {userData.user.name}
                        </span>
                        <button onClick={()=>navigate("cart")}> 
                            <IoCart className="text-xl" />
                            </button>



                        <button
                            className="btn bg-orange-500 border-none hover:bg-orange-600 text-white rounded-full px-5 transition-all"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <button
                        className="btn bg-orange-500 border-none hover:bg-orange-600 text-white rounded-full px-6 transition-all"
                        onClick={() => navigate("/login")}
                    >
                        Log In
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
