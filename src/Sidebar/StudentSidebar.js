import React, { useEffect } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import '../Dashboard/dashboard.css';
import { useUser } from "../UserProvider/UserContext";

const StudentSidebar = () => {
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
                <h4 className="antialiased text-sm mx-2 mt-2 font-medium text-gray-300 dark:text-gray-200">STUDENT</h4>
                <p className="mx-2 mt-1 text-xs font-medium text-gray-400 dark:text-gray-400">{user.firstName} {user.middleName} {user.lastName} {user.suffix}</p>
            </div>

            <div className="relative flex flex-col justify-between flex-1 mt-6 text-xs">
                <nav>
                    <NavLink
                        to="/student"
                        className={({ isActive }) =>
                            `flex items-center duration-100 px-6 py-3 text-gray-300 ${isActive ? 'bg-gray-900' : 'hover:bg-gray-900'} dark:bg-gray-800 dark:text-gray-200`}>
                        <svg className="w-4 h-4" fill="#9ca3af" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M960 282c529.355 0 960 430.758 960 960 0 77.139-8.922 153.148-26.541 225.882l-10.504 43.144h-560.188c-27.106 74.88-79.85 140.838-155.52 181.045-47.887 25.185-101.647 38.625-155.633 38.625-123.445 0-236.047-67.651-293.76-176.64-5.873-11.18-11.859-25.75-17.845-43.03H37.045l-10.504-43.144C8.922 1395.148 0 1319.14 0 1242c0-529.242 430.645-960 960-960Zm168.17 1229.026c47.66-49.355 61.214-125.139 27.331-189.064-42.24-79.51-403.765-413.59-403.765-413.59s73.638 486.776 115.765 566.287c7.341 13.892 16.941 25.525 27.219 36.367h-.904c2.033 2.146 4.518 3.614 6.551 5.534 4.63 4.405 9.374 8.47 14.344 12.198 3.727 2.823 7.68 5.308 11.52 7.68 5.195 3.162 10.39 6.098 15.924 8.81 4.292 1.92 8.584 3.726 13.101 5.42 5.422 1.92 10.956 3.727 16.716 5.083a159.91 159.91 0 0 0 14.23 3.049c5.76.904 11.407 1.468 17.167 1.694 2.824.113 5.535.79 8.245.79 1.92 0 3.84-.677 5.76-.677 8.245-.226 16.377-1.355 24.508-2.936 3.727-.791 7.567-1.13 11.294-2.146 11.746-3.163 23.266-7.229 34.335-13.214h.338v-.113c15.7-8.245 28.687-19.2 40.32-31.172Zm361.524-625.807 112.715-112.715-119.717-119.831-112.828 112.715 119.83 119.83Zm-614.4-254.457h169.412V471.29H875.294v159.473ZM430.306 885.22l119.83-119.83-112.715-112.716-119.83 119.83L430.306 885.22Z" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span className="mx-6 font-medium">Dashboard</span>
                    </NavLink>

                    <NavLink
                        to="/studentCourse"
                        className={({ isActive }) =>
                            `flex items-center px-6 py-3 text-gray-400 transition-colors duration-100 transform ${isActive ? 'bg-gray-900' : 'hover:bg-gray-900'} dark:text-gray-400 dark:hover:bg-gray-800`}>
                        <svg className="w-4 h-4" fill="#9ca3af" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M1750.176 0v1468.235h-225.882v338.824h169.412V1920H451.353c-82.447 0-161.506-36.141-215.718-99.388-42.917-50.824-66.635-116.33-66.635-182.965V282.353C169 126.494 295.494 0 451.353 0h1298.823Zm-338.823 1468.235H463.776c-89.223 0-166.023 60.989-179.576 140.047-1.13 9.036-2.259 18.07-2.259 25.977v3.388c0 40.659 13.553 79.059 40.659 109.553 31.624 38.4 79.059 59.859 128.753 59.859h960v-112.941H408.435v-112.942h1002.918v-112.94Zm-56.47-564.706h-790.59v112.942h790.588V903.529Zm56.47-564.705h-903.53v451.764h903.53V338.824ZM620.765 677.647h677.647V451.765H620.765v225.882Z" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span className="mx-6 font-medium">Courses</span>
                    </NavLink>

                    <NavLink
                        to="/studentCalendar"
                        className={({ isActive }) =>
                            `flex items-center px-6 py-3 text-gray-400 transition-colors duration-100 transform ${isActive ? 'bg-gray-900' : 'hover:bg-gray-900'} dark:text-gray-400 dark:hover:bg-gray-800`}>
                        <svg
                            className="w-4 h-4"
                            fill="#9ca3af" viewBox="-32 0 512 512"
                            xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M436 160H12c-6.6 0-12-5.4-12-12v-36c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48v36c0 6.6-5.4 12-12 12zM12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm304 192c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H132c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h184z"></path>
                            </g>
                        </svg>
                        <span className="mx-6 font-medium">Calendar</span>
                    </NavLink>

                    <NavLink
                        to= "/studentabout"
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

export default StudentSidebar;
