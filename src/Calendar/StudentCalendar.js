import React, { useState, useEffect } from 'react';
import StudentSidebar from "../Sidebar/StudentSidebar";
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
const StudentCalendar = () => {
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
            <StudentSidebar />
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

                            <NavLink to="/studentCalendar" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
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

export default StudentCalendar;
