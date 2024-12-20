import React from "react";

export default function Breadcrumb() {
    return (
        <div class="bg-gray-200 border-b-2 dark:bg-gray-800">
            {breadcrumbDashboard.map((label) => (
                <div class="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
                    <p className='pr-10 text-sm'>{label.label}</p>
                    <a href="#" class="text-gray-600 dark:text-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4" viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                    </a>

                    <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-4 h-4" viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </span>

                    <a href="dashboard.js" class="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                        {label.sublabel}
                    </a>
                </div>
            ))}
        </div>
    );
};