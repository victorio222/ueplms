import React, { useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import '../Dashboard/dashboard.css';
import { useUser } from "../UserProvider/UserContext";

const AdminSidebar = () => {
    const {user} = useUser();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <aside className={`sidebar flex flex-col w-60 h-screen py-4 bg-gray-800 overflow-y-auto border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700`}>
            <a href="#" className="mx-auto">
                <h1 className="text-gray-200 text-3xl">iLearn</h1>
            </a>

            <div className="flex flex-col items-center mt-4 mx-2">
                <img className="object-cover w-16 h-16 mx-2 rounded-full ring ring-gray-700" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Avatar" />
                <h4 className="antialiased text-sm mx-2 mt-2 font-medium text-gray-300 dark:text-gray-200">ADMIN</h4>
                <p className="mx-2 mt-1 text-xs font-medium text-gray-400 dark:text-gray-400">{user.firstName} {user.middleName} {user.lastName} {user.suffix}</p>
            </div>

            <div className="relative flex flex-col justify-between flex-1 mt-6 text-xs">
                <nav>
                    <NavLink
                        to="/manageadmin"
                        className={({ isActive }) =>
                            `flex items-center duration-100 px-6 py-3 text-gray-300 ${isActive ? 'bg-gray-900' : 'hover:bg-gray-900'} dark:bg-gray-800 dark:text-gray-200`}>
                        <svg
                            className="w-4 h-4"
                            fill="#9ca3af"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-9 16a6 6 0 0 1 11.966-.687c-.338.17-.677.37-1.03.592A4.001 4.001 0 0 0 3.875 19H3Zm16.105-5.47a6.95 6.95 0 0 0-4.708-1.53 8.99 8.99 0 0 0-3.982.907 8.96 8.96 0 0 1 6.76 5.093 4.001 4.001 0 0 1 4.021-1.365 7 7 0 0 0-2.091-3.105ZM15 12c0-2.761 1.79-5 4-5s4 2.239 4 5c0 2.762-1.79 5-4 5s-4-2.238-4-5Zm2 0c0 1.656 1.121 3 2 3s2-1.344 2-3c0-1.656-1.121-3-2-3s-2 1.344-2 3Z" />
                        </svg>
                        <span className="mx-6 font-medium">Manage Admin</span>
                    </NavLink>


                    <NavLink
                        to= "/adminabout"
                        className={({ isActive }) =>
                            `flex items-center px-6 py-3 text-gray-400 transition-colors duration-100 transform ${isActive ? 'bg-gray-900' : 'hover:bg-gray-900'} dark:text-gray-400 dark:hover:bg-gray-800`}>
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="6" cy="6" r="3" stroke="currentColor" stroke-width="2" fill="none" />
                            <circle cx="18" cy="6" r="3" stroke="currentColor" stroke-width="2" fill="none" />
                            <circle cx="12" cy="16" r="4" stroke="currentColor" stroke-width="2" fill="none" />
                            <path
                                d="M4 20c0-2 1-3 3-3h10c2 0 3 1 3 3"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                            />
                        </svg>
                        <span className="mx-6 font-medium">About us</span>
                    </NavLink>
                </nav>
            </div>
        </aside>
    );
}

export default AdminSidebar;
