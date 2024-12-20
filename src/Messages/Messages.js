// import React, { useState } from 'react';
// import Sidebar from '../Sidebar/Sidebar';
// import Footer from '../Footer/Footer';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { breadcrumbMessages, systemTitle } from '../Constants/Const';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// import MessageList from "../components/MessageList";
// import MessageView from "../components/MessageView";
// import './style.css';

// const Messages = () => {
//     const [isOpen, setIsOpen] = useState(false);


//     const menu = () => {
//         setIsOpen(!isOpen);
//     }

//     const messagesData = [
//         {
//             id: 1,
//             sender: "John Lee P. Indino",
//             subject: "Love Letter",
//             date: "December 18, 2024",
//             content: "Hello, Rechelle Aldea. I just want to say thank you for being part of my life and i hope that you won't leave us, or should i say - me? hahaha just kidding. I hope we get along soon! ",
//             unread: true,
//         },
//         {
//             id: 2,
//             sender: "Admin",
//             subject: "Welcome to the LMS!",
//             date: "Nov 1, 2024",
//             content: "Welcome to the Learning Management System. We hope you have a great experience!",
//             unread: false,
//         },
//     ];

//     // State management
//     const [messages] = useState(messagesData);
//     const [selectedMessage, setSelectedMessage] = useState(null);

//     return (
//         <div className="flex h-screen bg-gray-100">
//             <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//                 <Sidebar />
//             </div>

//             <div className={`main ${isOpen ? 'open' : 'closed'} flex-1 flex flex-col`}>
//                 {/* Header */}
//                 <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
//                     {systemTitle.map((title) => (
//                         <div key={title.title} className='flex items-center justify-center'>
//                             <svg
//                                 className="size-6 w-5 cursor-pointer"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none" viewBox="0 0 24 24"
//                                 strokeWidth={1.5}
//                                 stroke="currentColor"
//                                 onClick={menu}
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                                 />
//                             </svg>

//                             <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
//                         </div>
//                     ))}

//                     <div className='flex'>
//                         <svg
//                             className="size-6 w-7 cursor-pointer pr-2"
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none" viewBox="0 0 24 24"
//                             strokeWidth={1.5} stroke="currentColor"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
//                             />
//                         </svg>
//                         <div className='flex items-center pl-1 pr-3 cursor-pointer'>
//                             <p className='text-sm pr-2'>Cabatingan, Victorio Jr F.</p>
//                             <div className='w-10 h-10 rounded-full'>
//                                 <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Avatar" />
//                             </div>
//                         </div>
//                     </div>
//                 </header>

//                 {/* Breadcrumb part */}
//                 <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
//                     {breadcrumbMessages.map((label) => (
//                         <div key={label.label} className="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
//                             <p className='pr-10 text-sm'>{label.label}</p>
//                             <a href="#" className="text-gray-600 dark:text-gray-200">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4" viewBox="0 0 20 20"
//                                     fill="currentColor"
//                                 >
//                                     <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                                 </svg>
//                             </a>

//                             <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4" viewBox="0 0 20 20"
//                                     fill="currentColor"
//                                 >
//                                     <path
//                                         fillRule="evenodd"
//                                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                                         clipRule="evenodd"
//                                     />
//                                 </svg>
//                             </span>

//                             <a href="dashboard.js" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
//                                 {label.sublabel}
//                             </a>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Main Content */}
//                 <main className="flex-1 p-7 overflow-hidden">
//                     <div className='flex items-center justify-between border-b-1 bg-white shadow-sm p-1 pl-6 pr-6 mb-2'>
//                         <h1 className='text-sm'>Inbox</h1>
//                         <div>
//                             <input type='text' name='search' className='border-2 w-96 mr-2' />
//                             <input type='button' value="Search" className='p-1 pl-3 pr-3 border-none' />
//                         </div>
//                     </div>
//                     <div className='text-xs p-2 shadow-sm bg-white mb-2 w-36 cursor-pointer hover:bg-gray-400 hover:text-white'>Add New Event</div>

//                     {/* <MessageList messages={messages} onMessageClick={setSelectedMessage} />
//                     <MessageView message={selectedMessage} /> */}

//                     {/* Main Content */}
//                 <div className="flex flex-grow overflow-hidden">
//                     {/* Message List */}
//                     <div className="w-1/3 border-r bg-white overflow-y-auto">
//                         <MessageList messages={messagesData} onMessageClick={setSelectedMessage} />
//                     </div>

//                     {/* Message View */}
//                     <div className="w-2/3 bg-gray-50 p-6 overflow-y-auto">
//                         {selectedMessage ? (
//                             <MessageView message={selectedMessage} />
//                         ) : (
//                             <div className="flex items-center justify-center h-full text-gray-400">
//                                 Select a message to view its content.
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 </main>
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default Messages;




import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { breadcrumbMessages, systemTitle } from '../Constants/Const';

import MessageList from "../components/MessageList";
import MessageView from "../components/MessageView";
import './style.css';

const Messages = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "John Lee P. Indino",
            subject: "Love Letter",
            date: "December 18, 2024",
            content: "Hello, Rechelle Aldea. I just want to say thank you for being part of my life and I hope that you won't leave us, or should I say - me? hahaha just kidding. I hope we get along soon!",
            unread: true,
            replies: [] // Array to store replies
        },
        {
            id: 2,
            sender: "Admin",
            subject: "Welcome to the LMS!",
            date: "Nov 1, 2024",
            content: "Welcome to the Learning Management System. We hope you have a great experience!",
            unread: false,
            replies: []
        },
    ]);

    const [selectedMessage, setSelectedMessage] = useState(null);
    const [replyContent, setReplyContent] = useState(''); // Input for new reply

    const toggleSidebar = () => setIsOpen(!isOpen);

    const handleReplyChange = (e) => {
        setReplyContent(e.target.value);
    };

    const handleSendReply = () => {
        if (selectedMessage && replyContent.trim()) {
            const newReply = {
                id: Date.now(), // Unique ID for the reply
                sender: "You",
                date: new Date().toLocaleString(),
                content: replyContent,
            };

            // Update selected message's replies
            setMessages((prevMessages) =>
                prevMessages.map((msg) =>
                    msg.id === selectedMessage.id
                        ? { ...msg, replies: [...msg.replies, newReply] }
                        : msg
                )
            );

            // Update the selected message with the new reply
            setSelectedMessage((prev) => ({
                ...prev,
                replies: [...prev.replies, newReply],
            }));

            // Reset reply input
            setReplyContent('');
        } else {
            alert("Please write a reply before sending.");
        }
    };

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className={`main ${isOpen ? 'open' : 'closed'} flex-1 flex flex-col`}>
                {/* Header */}
                <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
                    {systemTitle.map((title) => (
                        <div key={title.title} className='flex items-center'>
                            <button onClick={toggleSidebar}>
                                <svg className="size-6 w-5 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.5">
                                    <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
                        </div>
                    ))}
                </header>

                {/* Breadcrumb part */}
                <div class="bg-gray-200 border-b-2 dark:bg-gray-800">
                    {breadcrumbMessages.map((label) => (
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

                {/* Main Section */}
                <main className="flex-1 p-4 flex h-4/6">
                    {/* Message List */}
                    <div className="w-1/3 bg-white border-r shadow overflow-y-auto">
                        <MessageList messages={messages} onMessageClick={setSelectedMessage} />
                    </div>

                    {/* Message View */}
                    <div className="w-2/3 bg-gray-50 p-4 overflow-y-auto flex flex-col">
                        {selectedMessage ? (
                            <>
                            <div>
                                
                                {/* Display Message Content */}
                                <MessageView message={selectedMessage} />

                                {/* Display Replies */}
                                <div className="mt-4 border-t pt-2">
                                    <h3 className="text-sm font-semibold mb-2">Conversation</h3>
                                    <div className="space-y-2">
                                        <div className="p-2 bg-gray-100 rounded">
                                            <strong>{selectedMessage.sender}</strong>: {selectedMessage.content}
                                        </div>
                                        {selectedMessage.replies.map((reply) => (
                                            <div key={reply.id} className="p-2 text-right bg-blue-500 rounded text-white">
                                                <strong>{reply.sender}</strong> <span className="text-xs text-gray-200">({reply.date})</span>: {reply.content}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Reply Form */}
                                <div className="mt-6 border-t pt-4">
                                    <h3 className="text-sm font-semibold mb-2">Reply to {selectedMessage.sender}:</h3>
                                    <textarea
                                        value={replyContent}
                                        onChange={handleReplyChange}
                                        rows="4"
                                        placeholder="Write your reply here..."
                                        className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    ></textarea>
                                    <button
                                        onClick={handleSendReply}
                                        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition"
                                    >
                                        Send Reply
                                    </button>
                                </div>
                            </div>
                            </>
                        ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                                Select a message to view its content.
                            </div>
                        )}
                    </div>
                </main>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    );
};

export default Messages;
