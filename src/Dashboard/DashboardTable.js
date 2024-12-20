import React from "react";

const DashboardTable = () => {
    return (
        <section class="mx-auto">
            <div class="flex flex-col mt-6">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden border border-gray-200 dark:border-gray-700">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-gray-200 dark:bg-gray-800">
                                    <tr className="divide-x divide-gray-300">
                                        <th scope="col" class="py-2 px-4 text-xs font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400">
                                            <div class="flex items-center gap-x-3">
                                                <span>No.</span>
                                            </div>
                                        </th>
                                        <th scope="col" class="py-2 px-4 text-xs font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400">
                                            <div class="flex items-center gap-x-3">
                                                <span>Name</span>
                                            </div>
                                        </th>
                                        <th scope="col" class="py-2 px-4 text-xs font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400">
                                            <div class="flex items-center gap-x-3">
                                                <span>Employee ID</span>
                                            </div>
                                        </th>
                                        <th scope="col" class="py-2 px-4 text-xs font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400">
                                            <div class="flex items-center gap-x-3">
                                                <span>Leave Type</span>
                                            </div>
                                        </th>
                                        <th scope="col" class="py-2 px-4 text-xs font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400">
                                            <div class="flex items-center gap-x-3">
                                                <span>Applied On</span>
                                            </div>
                                        </th>
                                        <th scope="col" class="py-2 px-4 text-xs font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400">
                                            <div class="flex items-center gap-x-3">
                                                <span>Current Status</span>
                                            </div>
                                        </th>
                                        <th scope="col" class="py-2 px-4 text-xs font-normal text-left rtl:text-right text-gray-600 dark:text-gray-400">
                                            <div class="flex items-center gap-x-3">
                                                <span>Action</span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    <tr className="divide-x divide-gray-200 px-4 py-2">
                                        <td class="text-xs font-medium text-gray-700 whitespace-wrap">
                                            <div class="gap-x-3">
                                                <div class="flex items-center gap-x-2">
                                                    <h2 class="font-medium text-gray-600 dark:text-white ">1</h2>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="text-xs font-medium text-gray-600 whitespace-wrap">
                                            <div class="px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                                                <h2 class="text-xs font-normal text-emerald-500">Arthur Melo</h2>
                                            </div>
                                        </td>
                                        <td class="text-xs text-gray-500 dark:text-gray-300 whitespace-wrap">EMP101-204521</td>
                                        <td class="text-xs text-gray-500 dark:text-gray-300 whitespace-wrap">Casual Leave</td>
                                        <td class="text-xs whitespace-wrap">
                                            <div class="flex items-center gap-x-2">
                                                <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">03-20-2024</p>
                                            </div>
                                        </td>
                                        <td class="text-xs whitespace-nowrap">
                                            <div class="flex items-center gap-x-6">
                                                <p class="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Approved</p>
                                            </div>
                                        </td>
                                        <td class="text-xs whitespace-nowrap">
                                            <div class="flex items-center gap-x-6">
                                                <button class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">View Details</button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-between mt-6">
                <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>

                    <span>
                        previous
                    </span>
                </a>

                <div class="items-center hidden lg:flex gap-x-3">
                    <a href="#" class="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60">1</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">2</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">3</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">...</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">12</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">13</a>
                    <a href="#" class="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">14</a>
                </div>

                <a href="#" class="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800">
                    <span>
                        Next
                    </span>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:-scale-x-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
        </section>
    )
}

export default DashboardTable;