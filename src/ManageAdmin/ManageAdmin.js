import React, { useState, useEffect } from 'react';
import AdminSidebar from '../Sidebar/AdminSidebar';
import Footer from '../Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { breadcrumbDashboard, breadcrumbManageAdmin, systemTitle } from '../Constants/Const';
import axios from 'axios';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const ManageAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [users, setUsers] = useState([]); 
    const [filteredUsers, setFilteredUsers] = useState([]); 
    const [selectedRole, setSelectedRole] = useState(''); 
    const [selectedStatus, setSelectedStatus] = useState(''); 
    const [currentPage, setCurrentPage] = useState(1); 
    const [isProfileOpen, setIsProfileOpen] = useState(false); // For profile panel
    const [loggedInUser, setLoggedInUser] = useState(null); // For logged-in user details
    const itemsPerPage = 10;
    const navigate = useNavigate(); // For navigation

    const menu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    useEffect(() => {
        handleFilterChange();
    }, [selectedRole, selectedStatus, users]);

    useEffect(() => {
        const loggedInUserId = 1; // Replace with actual logic to get the logged-in user ID
        const user = users.find((u) => u.userId === loggedInUserId);
        setLoggedInUser(user);
    }, [users]);

    const fetchAllUsers = async () => {
        try {
            const response = await axios.get("http://localhost:8080/users");
            setUsers(response.data);
            setFilteredUsers(response.data); 
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const toggleUserStatus = async (userId, currentStatus) => {
        try {
            const updatedStatus = !currentStatus; 
            const response = await axios.put(`http://localhost:8080/users/${userId}/status`, updatedStatus, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200) {
                const updatedUsers = users.map((user) => 
                    user.userId === userId ? { ...user, isActive: updatedStatus } : user
                );
                setUsers(updatedUsers);
            } else {
                console.error("Failed to update user status.");
            }
        } catch (error) {
            console.error("Error updating user status:", error);
        }
    };

    const handleFilterChange = () => {
        let updatedUsers = users;

        if (selectedRole) {
            updatedUsers = updatedUsers.filter((user) => user.role.toLowerCase() === selectedRole.toLowerCase());
        }

        if (selectedStatus) {
            const isActive = selectedStatus === 'active';
            updatedUsers = updatedUsers.filter((user) => user.isActive === isActive);
        }

        setFilteredUsers(updatedUsers);
        setCurrentPage(1); 
    };

    const formatDate = (dateString) => {
        return moment(dateString).format('YYYY-MM-DD');
    };

    const paginatedUsers = filteredUsers.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleLogout = () => {
        // Clear user data (if any) and navigate to login form
        setLoggedInUser(null);
        navigate('/login');
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <AdminSidebar />
            </div>

            <div className={`main ${isOpen ? 'open' : 'closed'} flex-1 flex flex-col`}>
                <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
                    {systemTitle.map((title) => (
                        <div className='flex items-center justify-center' key={title.title}>
                            <svg
                                className="size-6 w-5 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                onClick={menu}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>

                            <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
                        </div>
                    ))}

                    <div className='flex items-center pl-1 pr-3 cursor-pointer relative' onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <p className='text-sm pr-2'>{loggedInUser ? `${loggedInUser.firstName} ${loggedInUser.lastName}` : 'User'}</p>
                        <div className='w-10 h-10 rounded-full'>
                            <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Avatar" />
                        </div>

                        {isProfileOpen && (
                            <div className="absolute right-0 top-14 w-48 bg-white shadow-md rounded-md p-4">
                                <p className="text-gray-700 font-bold">{loggedInUser?.firstName} {loggedInUser?.lastName}</p>
                                <p className="text-gray-500 text-sm">Student ID: {loggedInUser?.studentNumber || 'N/A'}</p>
                                <button
                                    onClick={handleLogout}
                                    className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                </header>

                {/* Breadcrumb part */}
                                <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
                                    {breadcrumbManageAdmin.map((label) => (
                                        <div key={label.label} className="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
                                            <p className='pr-10 text-sm'>{label.label}</p>
                                            <a href="#" className="text-gray-600 dark:text-gray-200">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-4 h-4" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                                </svg>
                                            </a>
                
                                            <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-4 h-4" viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                
                                            <a href="dashboard.js" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                                                {label.sublabel}
                                            </a>
                                        </div>
                
                                        
                                    ))}
                                </div>

                <main className="flex-1 p-7">
                    <div className="mb-4">
                        <h1 className="text-xl font-semibold">Manage Users</h1>
                    </div>
                    <div className="mb-4 flex gap-4">
                        <select
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            className="border px-3 py-2 rounded"
                        >
                            <option value="">All Roles</option>
                            <option value="admin">Admin</option>
                            <option value="teacher">Teacher</option>
                            <option value="student">Student</option>
                        </select>

                        <select
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            className="border px-3 py-2 rounded"
                        >
                            <option value="">All Status</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>

                    <div className="bg-white rounded shadow">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Created</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {paginatedUsers.map((user) => (
                                    <tr key={user.userId}>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.userId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {user.firstName}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                                        <td className={`px-6 py-4 whitespace-nowrap ${user.isActive ? 'text-green-500' : 'text-red-500'}`}>
                                            {user.isActive ? 'Active' : 'Inactive'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{user.dateCreated ? formatDate(user.dateCreated) : 'N/A'}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end items-center">
                                                <div
                                                    className={`w-14 h-8 flex items-center cursor-pointer rounded-full p-1 ${
                                                        user.isActive ? 'bg-green-500' : 'bg-gray-300'
                                                    }`}
                                                    onClick={() => toggleUserStatus(user.userId, user.isActive)}
                                                >
                                                    <div
                                                        className={`w-6 h-6 rounded-full bg-white shadow transform transition-transform ${
                                                            user.isActive ? 'translate-x-6' : ''
                                                        }`}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <span>Page {currentPage} of {totalPages}</span>

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ManageAdmin;