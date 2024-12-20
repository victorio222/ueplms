// // import React, { useState } from 'react';
// // import Sidebar from '../Sidebar/Sidebar';
// // import Footer from '../Footer/Footer';
// // import '@fortawesome/fontawesome-free/css/all.min.css';
// // import { breadcrumbCalendar, systemTitle } from '../Constants/Const';
// // import { ChevronLeft, ChevronRight } from 'lucide-react';

// // const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// // const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// // // Sample events data
// // const EVENTS = [
// //     { id: 1, date: new Date(2024, 2, 15), title: 'Mid-term Exam', type: 'exam' },
// //     { id: 2, date: new Date(2024, 2, 20), title: 'Project Submission', type: 'assignment' },
// //     { id: 3, date: new Date(2024, 2, 25), title: 'Guest Lecture', type: 'lecture' },
// //     { id: 4, date: new Date(2024, 3, 5), title: 'Spring Break Starts', type: 'holiday' },
// // ];

// // const Calendar = () => {
// //     const [isOpen, setIsOpen] = useState(false);
// //     const [currentDate, setCurrentDate] = useState(new Date());
// //     const [selectedDate, setSelectedDate] = useState(null);
// //     const [selectedEvents, setSelectedEvents] = useState([]);

// //     const menu = () => {
// //         setIsOpen(!isOpen);
// //     }

// //     const getDaysInMonth = (date) => {
// //         return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
// //     };

// //     const getFirstDayOfMonth = (date) => {
// //         return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
// //     };

// //     const handlePrevMonth = () => {
// //         setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
// //     };

// //     const handleNextMonth = () => {
// //         setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
// //     };

// //     const handleDateClick = (day) => {
// //         const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
// //         setSelectedDate(clickedDate);
// //         const eventsOnDate = EVENTS.filter(event =>
// //             event.date.toDateString() === clickedDate.toDateString()
// //         );
// //         setSelectedEvents(eventsOnDate);
// //     };

// //     const renderCalendarDays = () => {
// //         const daysInMonth = getDaysInMonth(currentDate);
// //         const firstDayOfMonth = getFirstDayOfMonth(currentDate);
// //         const days = [];

// //         for (let i = 0; i < firstDayOfMonth; i++) {
// //             days.push(<div key={`empty-${i}`} className="p-2"></div>);
// //         }

// //         for (let day = 1; day <= daysInMonth; day++) {
// //             const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
// //             const isToday = date.toDateString() === new Date().toDateString();
// //             const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
// //             const hasEvent = EVENTS.some(event => event.date.toDateString() === date.toDateString());

// //             days.push(
// //                 <button
// //                     key={day}
// //                     onClick={() => handleDateClick(day)}
// //                     className={`p-2 m-1 text-center rounded-full transition-colors ${isToday ? 'bg-blue-100 text-blue-800' : ''
// //                         } ${isSelected ? 'bg-blue-500 text-white' : ''} ${hasEvent ? 'font-bold' : ''
// //                         } hover:bg-gray-200`}
// //                 >
// //                     {day}
// //                     {hasEvent && <span className="block w-1 h-1 mx-auto mt-1 bg-red-500 rounded-full"></span>}
// //                 </button>
// //             );
// //         }

// //         return days;
// //     };

// //     const getUpcomingEvents = () => {
// //         const today = new Date();
// //         return EVENTS.filter(event => event.date >= today)
// //             .sort((a, b) => a.date - b.date)
// //             .slice(0, 3);
// //     };

// //     return (
// //         <div className="flex h-screen bg-gray-100">
// //             <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
// //                 <Sidebar />
// //             </div>

// //             <div className={`main ${isOpen ? 'open' : 'closed'} flex-1 flex flex-col`}>
// //                 {/* Header */}
// //                 <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
// //                     {systemTitle.map((title) => (
// //                         <div key={title.title} className='flex items-center justify-center'>
// //                             <svg
// //                                 className="size-6 w-5 cursor-pointer"
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                                 fill="none" viewBox="0 0 24 24"
// //                                 strokeWidth={1.5}
// //                                 stroke="currentColor"
// //                                 onClick={menu}
// //                             >
// //                                 <path
// //                                     strokeLinecap="round"
// //                                     strokeLinejoin="round"
// //                                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
// //                                 />
// //                             </svg>

// //                             <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
// //                         </div>
// //                     ))}

// //                     <div className='flex'>
// //                         <svg
// //                             className="size-6 w-7 cursor-pointer pr-2"
// //                             xmlns="http://www.w3.org/2000/svg"
// //                             fill="none" viewBox="0 0 24 24"
// //                             strokeWidth={1.5} stroke="currentColor"
// //                         >
// //                             <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
// //                             />
// //                         </svg>
// //                         <div className='flex items-center pl-1 pr-3 cursor-pointer'>
// //                             <p className='text-sm pr-2'>Cabatingan, Victorio Jr F.</p>
// //                             <div className='w-10 h-10 rounded-full'>
// //                                 <img className="object-cover w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Avatar" />
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </header>

// //                 {/* Breadcrumb part */}
// //                 <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
// //                     {breadcrumbCalendar.map((label) => (
// //                         <div key={label.label} className="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
// //                             <p className='pr-10 text-sm'>{label.label}</p>
// //                             <a href="#" className="text-gray-600 dark:text-gray-200">
// //                                 <svg
// //                                     xmlns="http://www.w3.org/2000/svg"
// //                                     className="w-4 h-4" viewBox="0 0 20 20"
// //                                     fill="currentColor"
// //                                 >
// //                                     <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
// //                                 </svg>
// //                             </a>

// //                             <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
// //                                 <svg
// //                                     xmlns="http://www.w3.org/2000/svg"
// //                                     className="w-4 h-4" viewBox="0 0 20 20"
// //                                     fill="currentColor"
// //                                 >
// //                                     <path
// //                                         fillRule="evenodd"
// //                                         d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
// //                                         clipRule="evenodd"
// //                                     />
// //                                 </svg>
// //                             </span>

// //                             <a href="dashboard.js" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
// //                                 {label.sublabel}
// //                             </a>
// //                         </div>
// //                     ))}
// //                 </div>

// //                 {/* Main Content */}
// //                 <main className="flex-1 p-7 overflow-hidden">
// //                 <div className='flex items-center justify-between border-b-1 bg-white shadow-sm p-1 pl-6 pr-6 mb-2'>
// //                     <h1 className='text-sm'>Calendar</h1>
// //                     <div>
// //                         <input type='text' name='search' className='border-2 w-96 mr-2' />
// //                         <input type='button' value="Search" className='p-1 pl-3 pr-3 border-none'/>
// //                     </div>
// //                 </div>
// //                 <div className='text-xs p-2 shadow-sm bg-white mb-2 w-36 cursor-pointer hover:bg-gray-400 hover:text-white'>Add New Event</div>

// //                     {/* Calendar Component */}
// //                     <div className='flex justify-start items-start overflow-auto'>
// //                         <div className='flex flex-col w-2/4'>
// //                            {/* Upcoming Events */}
// //                         <div className="bg-white shadow-md p-4">
// //                             <h3 className="text-lg font-semibold mb-8 border-b pb-2">Upcoming Events</h3>
// //                             {getUpcomingEvents().length > 0 ? (
// //                                 <ul className="space-y-2">
// //                                     {getUpcomingEvents().map(event => (
// //                                         <li key={event.id} className="flex items-center p-2 bg-gray-50 rounded">
// //                                             <div className={`w-2 h-2 rounded-full mr-3 ${
// //                                                 event.type === 'exam' ? 'bg-red-500' :
// //                                                 event.type === 'assignment' ? 'bg-yellow-500' :
// //                                                 event.type === 'lecture' ? 'bg-green-500' : 'bg-blue-500'
// //                                             }`}></div>
// //                                             <span className="flex-1">{event.title}</span>
// //                                             <span className="text-sm text-gray-600">
// //                                                 {event.date.toLocaleDateString()}
// //                                             </span>
// //                                         </li>
// //                                     ))}
// //                                 </ul>
// //                             ) : (
// //                                 <p className="text-gray-500 italic mb-4">No upcoming events available.</p>
// //                             )}
                            
// //                             {/* Event Display */}
// //                             {selectedEvents.length > 0 && (
// //                                 <div className="bg-slate-300 w-full border shadow-md p-4 mb-1 mt-8">
// //                                     <h3 className="text-md text-left border-b font-semibold mb-4">Events on {selectedDate.toDateString()}</h3>
// //                                     <ul className="space-y-2">
// //                                         {selectedEvents.map(event => (
// //                                             <li key={event.id} className="flex items-center p-2 bg-gray-50 rounded">
// //                                                 <div className={`w-2 h-2 rounded-full mr-3 ${event.type === 'exam' ? 'bg-red-500' :
// //                                                         event.type === 'assignment' ? 'bg-yellow-500' :
// //                                                             event.type === 'lecture' ? 'bg-green-500' : 'bg-blue-500'
// //                                                     }`}></div>
// //                                                 <span className="flex-1">{event.title}</span>
// //                                                 <span className="text-sm text-gray-600">
// //                                                     {event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
// //                                                 </span>
// //                                             </li>
// //                                         ))}
// //                                     </ul>
// //                                 </div>
// //                             )}
// //                             </div>
// //                         </div>
// //                         <div className="w-full mx-auto ml-2">
// //                             <div className="mb-8 bg-white shadow-md">
// //                                 <div className="flex items-center justify-between p-4 border-b">
// //                                     <h2 className="text-xl font-semibold">{MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
// //                                     <div className="flex items-center space-x-2">
// //                                         <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200" aria-label="Previous month">
// //                                             <ChevronLeft className="w-5 h-5" />
// //                                         </button>
// //                                         <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-200" aria-label="Next month">
// //                                             <ChevronRight className="w-5 h-5" />
// //                                         </button>
// //                                     </div>
// //                                 </div>
// //                                 <div className="grid grid-cols-7 gap-1 p-4">
// //                                     {DAYS.map(day => (
// //                                         <div key={day} className="text-center font-semibold text-gray-600">
// //                                             {day}
// //                                         </div>
// //                                     ))}
// //                                     {renderCalendarDays()}
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </main>
// //                 <Footer />
// //             </div>
// //         </div>
// //     );
// // };

// // export default Calendar;




// import React, { useState, useEffect } from 'react';
// import Sidebar from '../Sidebar/Sidebar';
// import Footer from '../Footer/Footer';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { breadcrumbCalendar, systemTitle } from '../Constants/Const';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// // API Base URL
// const API_URL = 'http://localhost:8080/api/events';

// // Calendar Component
// const Calendar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [selectedEvents, setSelectedEvents] = useState([]);
//     const [events, setEvents] = useState([]);
//     const [eventTitle, setEventTitle] = useState('');
//     const [eventDate, setEventDate] = useState('');
//     const [eventType, setEventType] = useState('exam');

//     const menu = () => {
//         setIsOpen(!isOpen);
//     }

//     // Get days in the current month
//     const getDaysInMonth = (date) => {
//         return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
//     };

//     // Get the first day of the month
//     const getFirstDayOfMonth = (date) => {
//         return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
//     };

//     // Fetch all events from the backend
//     const fetchEvents = async () => {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         setEvents(data);
//     };

//     // Handle prev month
//     const handlePrevMonth = () => {
//         setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
//     };

//     // Handle next month
//     const handleNextMonth = () => {
//         setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
//     };

//     // Handle date click to display events
//     const handleDateClick = (day) => {
//         const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
//         setSelectedDate(clickedDate);
//         const eventsOnDate = events.filter(event =>
//             new Date(event.date).toDateString() === clickedDate.toDateString()
//         );
//         setSelectedEvents(eventsOnDate);
//     };

//     // Handle form submission for new event
//     const handleAddEvent = async () => {
//         const newEvent = {
//             eventName: eventTitle,  // Match to backend's eventName
//             eventDescription: eventType,  // Adjust to use description if needed
//             eventDate: new Date(eventDate).toISOString(),  // Event date as LocalDateTime in ISO format
//         };
    
//         await fetch(API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(newEvent),
//         });
    
//         // Reset form and fetch updated events
//         setEventTitle('');
//         setEventDate('');
//         fetchEvents();
//     };
    

//     // Render the calendar days
//     const renderCalendarDays = () => {
//         const daysInMonth = getDaysInMonth(currentDate);
//         const firstDayOfMonth = getFirstDayOfMonth(currentDate);
//         const days = [];

//         for (let i = 0; i < firstDayOfMonth; i++) {
//             days.push(<div key={`empty-${i}`} className="p-2"></div>);
//         }

//         for (let day = 1; day <= daysInMonth; day++) {
//             const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
//             const isToday = date.toDateString() === new Date().toDateString();
//             const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
//             const hasEvent = events.some(event => new Date(event.date).toDateString() === date.toDateString());

//             days.push(
//                 <button
//                     key={day}
//                     onClick={() => handleDateClick(day)}
//                     className={`p-2 m-1 text-center rounded-full transition-colors ${isToday ? 'bg-blue-100 text-blue-800' : ''
//                         } ${isSelected ? 'bg-blue-500 text-white' : ''} ${hasEvent ? 'font-bold' : ''
//                         } hover:bg-gray-200`}
//                 >
//                     {day}
//                     {hasEvent && <span className="block w-1 h-1 mx-auto mt-1 bg-red-500 rounded-full"></span>}
//                 </button>
//             );
//         }

//         return days;
//     };

//     // Fetch events after component mounts
//     useEffect(() => {
//         fetchEvents();
//     }, []);

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
//                 </header>

//                 {/* Breadcrumb part */}
//                 <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
//                     {breadcrumbCalendar.map((label) => (
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
//                         <h1 className='text-sm'>Calendar</h1>
//                         <div>
//                             <input type='text' name='search' className='border-2 w-96 mr-2' />
//                             <input type='button' value="Search" className='p-1 pl-3 pr-3 border-none'/>
//                         </div>
//                     </div>
//                     <div className='text-xs p-2 shadow-sm bg-white mb-2 w-36 cursor-pointer hover:bg-gray-400 hover:text-white' onClick={() => setIsOpen(true)}>Add New Event</div>

//                     {/* Modal for Event Form */}
// {isOpen && (
//     <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white pt-5 shadow-md rounded w-96 max-h-[80vh] overflow-auto">
//             <h3 className="text-lg font-semibold mx-7">Add New Event</h3>
//             <form onSubmit={(e) => { e.preventDefault(); handleAddEvent(); }}>
//                 <div className="mb-4">
//                     <h3 className="text-sm font-medium mb-2">Event Title</h3>
//                     <input 
//                         type="text" 
//                         value={eventTitle} 
//                         onChange={(e) => setEventTitle(e.target.value)} 
//                         className="border p-2 w-full" 
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <h3 className="text-sm font-medium mb-2">Event Description</h3>
//                     <textarea 
//                         className="w-full p-2 border-2"
//                         value={eventType} 
//                         onChange={(e) => setEventType(e.target.value)}>
//                     </textarea>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-sm font-medium">Event Date</label>
//                     <input 
//                         type="date" 
//                         value={eventDate} 
//                         onChange={(e) => setEventDate(e.target.value)} 
//                         className="border p-2 w-full"
//                     />
//                 </div>
//                 <div className="flex justify-end">
//                     <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full">Add Event</button>
//                 </div>
//             </form>
//             <button className="absolute top-2 right-2 p-2" onClick={() => setIsOpen(false)}>
//                 <span className="text-gray-500 text-lg">&times;</span>
//             </button>
//         </div>
//     </div>
// )}


//                     {/* Calendar and Event Display */}
//                     <div className='flex justify-start items-start overflow-auto'>
//                         <div className='flex flex-col w-2/4'>
//                             {/* Upcoming Events */}
//                             <div className="bg-white shadow-md p-4">
//                                 <h3 className="text-lg font-semibold mb-8 border-b pb-2">Upcoming Events</h3>
//                                 {events.length > 0 ? (
//                                     <ul className="space-y-2">
//                                         {events.map(event => (
//                                             <li key={event.id} className="flex items-center p-2 bg-gray-50 rounded">
//                                                 <div className={`w-2 h-2 rounded-full mr-3 ${event.type === 'exam' ? 'bg-red-500' :
//                                                         event.type === 'assignment' ? 'bg-yellow-500' :
//                                                             event.type === 'lecture' ? 'bg-green-500' : 'bg-blue-500'
//                                                     }`}></div>
//                                                 <span className="flex-1">
//                                                     {event.eventName}
//                                                 <p className='text-xs'>Event Description: {event.eventDescription}</p>
//                                                 </span>
//                                                 <span className="text-sm text-gray-600">
//                                                     {new Date(event.eventDate).toLocaleDateString()}
//                                                 </span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 ) : (
//                                     <p className="text-gray-500 italic mb-4">No upcoming events available.</p>
//                                 )}
//                             </div>
//                         </div>
//                         <div className="w-full mx-auto ml-2">
//                             <div className="mb-8 bg-white shadow-md">
//                                 <div className="flex items-center justify-between p-4 border-b">
//                                     <h2 className="text-xl font-semibold">{MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
//                                     <div className="flex items-center space-x-2">
//                                         <button onClick={handlePrevMonth} className="p-2 rounded-full hover:bg-gray-200" aria-label="Previous month">
//                                             <ChevronLeft className="w-5 h-5" />
//                                         </button>
//                                         <button onClick={handleNextMonth} className="p-2 rounded-full hover:bg-gray-200" aria-label="Next month">
//                                             <ChevronRight className="w-5 h-5" />
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <div className="grid grid-cols-7 gap-1 p-4">
//                                     {DAYS.map(day => (
//                                         <div key={day} className="text-center font-semibold text-gray-600">
//                                             {day}
//                                         </div>
//                                     ))}
//                                     {renderCalendarDays()}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </main>

//                 {/* Footer */}
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default Calendar;





import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { breadcrumbCalendar, systemTitle } from '../Constants/Const';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// API Base URL
const API_URL = 'http://localhost:8080/api/events';

// Calendar Component
const Calendar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventType, setEventType] = useState('exam');

    const menu = () => {
        setIsOpen(!isOpen);
    };

    // Get days in the current month
    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    // Get the first day of the month
    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    // Fetch all events from the backend
    const fetchEvents = async () => {
        const response = await fetch(API_URL);
        const data = await response.json();
        setEvents(data);
    };

    // Handle prev month
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    // Handle next month
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    // Handle date click to display events
    const handleDateClick = (day) => {
        const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
        setSelectedDate(clickedDate);
        const eventsOnDate = events.filter(event =>
            new Date(event.date).toDateString() === clickedDate.toDateString()
        );
        setSelectedEvents(eventsOnDate);
    };

    // Handle form submission for new event
    const handleAddEvent = async () => {
        const newEvent = {
            eventName: eventTitle,  // Match to backend's eventName
            eventDescription: eventType,  // Adjust to use description if needed
            eventDate: new Date(eventDate).toISOString(),  // Event date as LocalDateTime in ISO format
        };
    
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newEvent),
        });
    
        // Reset form and fetch updated events
        setEventTitle('');
        setEventDate('');
        fetchEvents();
    };

    // Render the calendar days
    const renderCalendarDays = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDayOfMonth = getFirstDayOfMonth(currentDate);
        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="p-2"></div>);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isToday = date.toDateString() === new Date().toDateString();
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
            const hasEvent = events.some(event => new Date(event.date).toDateString() === date.toDateString());

            days.push(
                <button
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`p-2 m-1 text-center rounded-full transition-colors ${isToday ? 'bg-blue-100 text-blue-800' : ''
                        } ${isSelected ? 'bg-blue-500 text-white' : ''} ${hasEvent ? 'font-bold' : ''
                        } hover:bg-gray-200`}
                >
                    {day}
                    {hasEvent && <span className="block w-1 h-1 mx-auto mt-1 bg-red-500 rounded-full"></span>}
                </button>
            );
        }

        return days;
    };

    // Fetch events after component mounts
    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <Sidebar />
            </div>

            <div className={`main ${isOpen ? 'open' : 'closed'} flex-1 flex flex-col`}>
                {/* Header */}
                <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
                    {systemTitle.map((title) => (
                        <div key={title.title} className='flex items-center justify-center'>
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
                </header>

                {/* Breadcrumb part */}
                <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
                    {breadcrumbCalendar.map((label) => (
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

                            <NavLink to="/calendar" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                                {label.sublabel}
                            </NavLink>
                        </div>

                        
                    ))}
                </div>

                {/* Main Content */}
                <main className="flex-1 p-7 overflow-hidden">
                    <div className='flex items-center justify-between border-b-1 bg-white shadow-sm p-1 pl-6 pr-6 mb-2'>
                        <h1 className='text-sm h-10 flex items-center'>Calendar</h1>
                    </div>
                    <div className='flex justify-end items-center'><div className='text-xs text-center p-2 shadow-sm text-white bg-blue-500 mb-2 w-36 cursor-pointer hover:bg-gray-400 hover:text-white' onClick={() => setIsOpen(true)}>Add New Event</div>
                    </div>
                    
                    {/* Modal for Event Form */}
                    {isOpen && (
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-white pt-5 shadow-md rounded w-96 max-h-[60vh]">
                                <h3 className="text-lg font-semibold mx-7">Add New Event</h3>
                                <form onSubmit={(e) => { e.preventDefault(); handleAddEvent(); }}>
                                    <div className="mb-4">
                                        <h3 className="text-sm font-medium mb-2">Event Title</h3>
                                        <input 
                                            type="text" 
                                            value={eventTitle} 
                                            onChange={(e) => setEventTitle(e.target.value)} 
                                            className="border p-2 w-full text-sm" 
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <h3 className="text-sm font-medium mb-2">Event Description</h3>
                                        <textarea 
                                            className="w-full p-2 border-2 text-sm"
                                            value={eventType} 
                                            onChange={(e) => setEventType(e.target.value)}>
                                        </textarea>
                                    </div>
                                    <div className="mb-4">
                                    <h3 className="text-sm font-medium mb-2">Event Date</h3>
                                        <input 
                                            type="date" 
                                            value={eventDate} 
                                            onChange={(e) => setEventDate(e.target.value)} 
                                            className="border p-2 w-full text-xs"
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full">Add Event</button>
                                        <button type="submit" className="bg-gray-300 ml-3 text-gray-700 py-2 px-4 rounded-full" onClick={() => setIsOpen(false)}>Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Calendar and Event Display */}
                    <div className='flex justify-start items-start overflow-auto'>
                        <div className='flex flex-col w-2/4'>
                            {/* Upcoming Events */}
                            <div className="bg-white shadow-md p-4">
                                <h3 className="text-lg font-semibold mb-8 border-b pb-2">Upcoming Events</h3>
                                {events.length > 0 ? (
                                    <ul className="space-y-2">
                                        {events.map(event => (
                                            <li key={event.id} className="flex items-center p-2 bg-gray-50 rounded">
                                                <div className={`w-2 h-2 rounded-full mr-3 ${event.type === 'exam' ? 'bg-red-500' :
                                                        event.type === 'assignment' ? 'bg-yellow-500' :
                                                            event.type === 'lecture' ? 'bg-green-500' : 'bg-blue-500'
                                                    }`}></div>
                                                <span className="flex-1">
                                                    {event.eventName}
                                                <p className='text-xs'>Event Description: {event.eventDescription}</p>
                                                </span>
                                                <span className="text-sm text-gray-600">
                                                    {new Date(event.eventDate).toLocaleDateString()}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500 italic mb-4">No upcoming events available.</p>
                                )}
                            </div>
                        </div>
                        <div className="w-full mx-auto ml-2">
                            <div className="mb-8 bg-white shadow-md">
                                <div className="flex items-center justify-between p-4 border-b">
                                    <h2 className="text-xl font-semibold">{MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                                    <div className="flex items-center space-x-2">
                                        <button onClick={handlePrevMonth} className="p-2 text-lg text-gray-600">
                                            <ChevronLeft />
                                        </button>
                                        <button onClick={handleNextMonth} className="p-2 text-lg text-gray-600">
                                            <ChevronRight />
                                        </button>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 text-center">
                                    {DAYS.map((day) => (
                                        <div key={day} className="p-2 font-bold text-sm">{day}</div>
                                    ))}
                                    {renderCalendarDays()}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

              
            </div>
        </div>
    );
};

export default Calendar;
