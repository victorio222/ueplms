import React from "react";
import { systemTitle } from './Constants/Const';

const Header = ({isOpen, menu}) => {
    
    return (
        <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-4 pl-5 flex items-center justify-between">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-6 w-7 cursor-pointer" 
            onClick={menu}
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
            />
        </svg>


        {systemTitle.map((title) => (
            <h2 className="text-xl font-semibold">{title.title}</h2>
        ))}

        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-6 w-7 cursor-pointer"
        >
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" 
            />
        </svg>
    </header>
    )
}

export default Header;