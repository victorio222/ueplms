// import React from "react";

// export default function Home() {
//     return(
//         <div className="ml-5 mr-5">
//         <h1 className="text-left text-3xl">Recent Activity in WS101</h1>
//         <div className="flex bg-blue-900 mt-10">
//             <svg className="w-8 ml-4 mr-3"
//                 fill="#ffffff" 
//                 viewBox="0 0 1920 1920" 
//                 xmlns="http://www.w3.org/2000/svg" 
//                 stroke="#ffffff">
//                 <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                 <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
//                 <g id="SVGRepo_iconCarrier"> 
//                     <path d="M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm0 101.053c-474.384 0-858.947 384.563-858.947 858.947S485.616 1818.947 960 1818.947 1818.947 1434.384 1818.947 960 1434.384 101.053 960 101.053Zm-42.074 626.795c-85.075 39.632-157.432 107.975-229.844 207.898-10.327 14.249-10.744 22.907-.135 30.565 7.458 5.384 11.792 3.662 22.656-7.928 1.453-1.562 1.453-1.562 2.94-3.174 9.391-10.17 16.956-18.8 33.115-37.565 53.392-62.005 79.472-87.526 120.003-110.867 35.075-20.198 65.9 9.485 60.03 47.471-1.647 10.664-4.483 18.534-11.791 35.432-2.907 6.722-4.133 9.646-5.496 13.23-13.173 34.63-24.269 63.518-47.519 123.85l-1.112 2.886c-7.03 18.242-7.03 18.242-14.053 36.48-30.45 79.138-48.927 127.666-67.991 178.988l-1.118 3.008a10180.575 10180.575 0 0 0-10.189 27.469c-21.844 59.238-34.337 97.729-43.838 138.668-1.484 6.37-1.484 6.37-2.988 12.845-5.353 23.158-8.218 38.081-9.82 53.42-2.77 26.522-.543 48.24 7.792 66.493 9.432 20.655 29.697 35.43 52.819 38.786 38.518 5.592 75.683 5.194 107.515-2.048 17.914-4.073 35.638-9.405 53.03-15.942 50.352-18.932 98.861-48.472 145.846-87.52 41.11-34.26 80.008-76 120.788-127.872 3.555-4.492 3.555-4.492 7.098-8.976 12.318-15.707 18.352-25.908 20.605-36.683 2.45-11.698-7.439-23.554-15.343-19.587-3.907 1.96-7.993 6.018-14.22 13.872-4.454 5.715-6.875 8.77-9.298 11.514-9.671 10.95-19.883 22.157-30.947 33.998-18.241 19.513-36.775 38.608-63.656 65.789-13.69 13.844-30.908 25.947-49.42 35.046-29.63 14.559-56.358-3.792-53.148-36.635 2.118-21.681 7.37-44.096 15.224-65.767 17.156-47.367 31.183-85.659 62.216-170.048 13.459-36.6 19.27-52.41 26.528-72.201 21.518-58.652 38.696-105.868 55.04-151.425 20.19-56.275 31.596-98.224 36.877-141.543 3.987-32.673-5.103-63.922-25.834-85.405-22.986-23.816-55.68-34.787-96.399-34.305-45.053.535-97.607 15.256-145.963 37.783Zm308.381-388.422c-80.963-31.5-178.114 22.616-194.382 108.33-11.795 62.124 11.412 115.76 58.78 138.225 93.898 44.531 206.587-26.823 206.592-130.826.005-57.855-24.705-97.718-70.99-115.729Z" fill-rule="evenodd"></path> </g>
//                 </svg>
//             <p className="text-left text-sm bg-white m-0.5 p-4">
//                 <strong>No Recent Messages.</strong>
//                 There’s nothing here yet. As you participate in your courses, 
//                 this stream will update with messages from discussions, grades, 
//                 private chats, and other notifications.
//             </p>
//         </div>
//     </div>
//     );
// };



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Home = ({ courseId }) => {
//   const [subjectDetails, setSubjectDetails] = useState(null);

//   useEffect(() => {
//     const fetchSubjectDetails = async () => {
//       try {
//         // Replace with the actual API endpoint to fetch subject details
//         const response = await axios.get(`http://localhost:8080/courses/${courseId}/subject`);
//         setSubjectDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching subject details:", error);
//       }
//     };

//     if (courseId) {
//       fetchSubjectDetails();
//     }
//   }, [courseId]);

//   if (!subjectDetails) {
//     return <p>Loading subject details...</p>;
//   }

//   return (
//     <div className="ml-5 mr-5">
//       <h1 className="text-left text-3xl">Recent Activity in {subjectDetails.name}</h1>
//       <div className="flex bg-blue-900 mt-10">
//         <svg
//           className="w-8 ml-4 mr-3"
//           fill="#ffffff"
//           viewBox="0 0 1920 1920"
//           xmlns="http://www.w3.org/2000/svg"
//           stroke="#ffffff"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//           <g id="SVGRepo_iconCarrier">
//             <path
//               d="M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm0 101.053c-474.384 0-858.947 384.563-858.947 858.947S485.616 1818.947 960 1818.947 1818.947 1434.384 1818.947 960 1434.384 101.053 960 101.053Zm-42.074 626.795c-85.075 39.632-157.432 107.975-229.844 207.898-10.327 14.249-10.744 22.907-.135 30.565 7.458 5.384 11.792 3.662 22.656-7.928 1.453-1.562 1.453-1.562 2.94-3.174 9.391-10.17 16.956-18.8 33.115-37.565 53.392-62.005 79.472-87.526 120.003-110.867 35.075-20.198 65.9 9.485 60.03 47.471-1.647 10.664-4.483 18.534-11.791 35.432-2.907 6.722-4.133 9.646-5.496 13.23-13.173 34.63-24.269 63.518-47.519 123.85l-1.112 2.886c-7.03 18.242-7.03 18.242-14.053 36.48-30.45 79.138-48.927 127.666-67.991 178.988l-1.118 3.008a10180.575 10180.575 0 0 0-10.189 27.469c-21.844 59.238-34.337 97.729-43.838 138.668-1.484 6.37-1.484 6.37-2.988 12.845-5.353 23.158-8.218 38.081-9.82 53.42-2.77 26.522-.543 48.24 7.792 66.493 9.432 20.655 29.697 35.43 52.819 38.786 38.518 5.592 75.683 5.194 107.515-2.048 17.914-4.073 35.638-9.405 53.03-15.942 50.352-18.932 98.861-48.472 145.846-87.52 41.11-34.26 80.008-76 120.788-127.872 3.555-4.492 3.555-4.492 7.098-8.976 12.318-15.707 18.352-25.908 20.605-36.683 2.45-11.698-7.439-23.554-15.343-19.587-3.907 1.96-7.993 6.018-14.22 13.872-4.454 5.715-6.875 8.77-9.298 11.514-9.671 10.95-19.883 22.157-30.947 33.998-18.241 19.513-36.775 38.608-63.656 65.789-13.69 13.844-30.908 25.947-49.42 35.046-29.63 14.559-56.358-3.792-53.148-36.635 2.118-21.681 7.37-44.096 15.224-65.767 17.156-47.367 31.183-85.659 62.216-170.048 13.459-36.6 19.27-52.41 26.528-72.201 21.518-58.652 38.696-105.868 55.04-151.425 20.19-56.275 31.596-98.224 36.877-141.543 3.987-32.673-5.103-63.922-25.834-85.405-22.986-23.816-55.68-34.787-96.399-34.305-45.053.535-97.607 15.256-145.963 37.783Zm308.381-388.422c-80.963-31.5-178.114 22.616-194.382 108.33-11.795 62.124 11.412 115.76 58.78 138.225 93.898 44.531 206.587-26.823 206.592-130.826.005-57.855-24.705-97.718-70.99-115.729Z"
//               fillRule="evenodd"
//             ></path>
//           </g>
//         </svg>
//         <p className="text-left text-sm bg-white m-0.5 p-4">
//           <strong>No Recent Messages.</strong>
//           There’s nothing here yet. As you participate in your courses, this stream will update with messages from discussions, grades, private chats, and other notifications.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Home = ({ courseId }) => {
//   const [subjectDetails, setSubjectDetails] = useState(null);

//   useEffect(() => {
//     if (!courseId) {
//       console.error("No courseDescription provided!");
//       return;
//     }

//     const fetchSubjectDetails = async () => {
//       try {
//         console.log("Fetching data for courseDescription:", courseId);
//         const response = await axios.get(`http://localhost:8080/courses?description=${courseId}`);
//         console.log("API Response:", response.data);

//         if (response.data && response.data.length > 0) {
//           setSubjectDetails(response.data[0]); // Assuming first item is the relevant subject
//         } else {
//           console.error("No subject found with this description.");
//           setSubjectDetails(null);  // Ensure null is set if no subject is found
//         }
//       } catch (error) {
//         console.error("Error fetching subject details:", error);
//         setSubjectDetails(null);  // Ensure null is set in case of an error
//       }
//     };

//     fetchSubjectDetails();
//   }, [courseId]);

//   if (!subjectDetails) {
//     return <p>Loading subject details...</p>;
//   }

//   return (
//     <div className="ml-5 mr-5">
//       <h1 className="text-left text-3xl">Recent Activity in {subjectDetails.name}</h1>
//       <div className="flex bg-blue-900 mt-10">
//         <svg
//           className="w-8 ml-4 mr-3"
//           fill="#ffffff"
//           viewBox="0 0 1920 1920"
//           xmlns="http://www.w3.org/2000/svg"
//           stroke="#ffffff"
//         >
//           <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//           <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//           <g id="SVGRepo_iconCarrier">
//             <path
//               d="M960 0c530.193 0 960 429.807 960 960s-429.807 960-960 960S0 1490.193 0 960 429.807 0 960 0Zm0 101.053c-474.384 0-858.947 384.563-858.947 858.947S485.616 1818.947 960 1818.947 1818.947 1434.384 1818.947 960 1434.384 101.053 960 101.053Zm-42.074 626.795c-85.075 39.632-157.432 107.975-229.844 207.898-10.327 14.249-10.744 22.907-.135 30.565 7.458 5.384 11.792 3.662 22.656-7.928 1.453-1.562 1.453-1.562 2.94-3.174 9.391-10.17 16.956-18.8 33.115-37.565 53.392-62.005 79.472-87.526 120.003-110.867 35.075-20.198 65.9 9.485 60.03 47.471-1.647 10.664-4.483 18.534-11.791 35.432-2.907 6.722-4.133 9.646-5.496 13.23-13.173 34.63-24.269 63.518-47.519 123.85l-1.112 2.886c-7.03 18.242-7.03 18.242-14.053 36.48-30.45 79.138-48.927 127.666-67.991 178.988l-1.118 3.008a10180.575 10180.575 0 0 0-10.189 27.469c-21.844 59.238-34.337 97.729-43.838 138.668-1.484 6.37-1.484 6.37-2.988 12.845-5.353 23.158-8.218 38.081-9.82 53.42-2.77 26.522-.543 48.24 7.792 66.493 9.432 20.655 29.697 35.43 52.819 38.786 38.518 5.592 75.683 5.194 107.515-2.048 17.914-4.073 35.638-9.405 53.03-15.942 50.352-18.932 98.861-48.472 145.846-87.52 41.11-34.26 80.008-76 120.788-127.872 3.555-4.492 3.555-4.492 7.098-8.976 12.318-15.707 18.352-25.908 20.605-36.683 2.45-11.698-7.439-23.554-15.343-19.587-3.907 1.96-7.993 6.018-14.22 13.872-4.454 5.715-6.875 8.77-9.298 11.514-9.671 10.95-19.883 22.157-30.947 33.998-18.241 19.513-36.775 38.608-63.656 65.789-13.69 13.844-30.908 25.947-49.42 35.046-29.63 14.559-56.358-3.792-53.148-36.635 2.118-21.681 7.37-44.096 15.224-65.767 17.156-47.367 31.183-85.659 62.216-170.048 13.459-36.6 19.27-52.41 26.528-72.201 21.518-58.652 38.696-105.868 55.04-151.425 20.19-56.275 31.596-98.224 36.877-141.543 3.987-32.673-5.103-63.922-25.834-85.405-22.986-23.816-55.68-34.787-96.399-34.305-45.053.535-97.607 15.256-145.963 37.783Zm308.381-388.422c-80.963-31.5-178.114 22.616-194.382 108.33-11.795 62.124 11.412 115.76 58.78 138.225 93.898 44.531 206.587-26.823 206.592-130.826.005-57.855-24.705-97.718-70.99-115.729Z"
//               fillRule="evenodd"
//             ></path>
//           </g>
//         </svg>
//         <p className="text-left text-sm bg-white m-0.5 p-4">
//           <strong>No Recent Messages.</strong>
//           There’s nothing here yet. As you participate in your courses, this stream will update with messages from discussions, grades, private chats, and other notifications.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useState, useEffect } from "react";
// import { useParams, NavLink, Routes, Route, Navigate } from "react-router-dom";
// import axios from "axios";
// import { breadcrumbCourses, systemTitle } from "../Constants/Const";
// import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
// import Announcements from "./Announcements";
// import Assignments from "./Assignments";
// import Quizzes from "./Quizzes";
// import Discussions from "./Discussions";
// import People from "./People";
// import Settings from "./Settings";
// import Modules from "./Modules";
// import Syllabus from "./Syllabus";
// import Grades from "./Grades";

// const Home = () => {
//     const { courseId } = useParams(); // Get courseId from the URL
//     const [courseDetails, setCourseDetails] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     useEffect(() => {
//         const fetchCourseDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/courses/${courseId}`);
//                 setCourseDetails(response.data);
//             } catch (error) {
//                 console.error("Error fetching course details:", error);
//             }
//         };

//         if (courseId) {
//             fetchCourseDetails();
//         }
//     }, [courseId]);

//     if (!courseDetails) {
//         return <p>Loading course details...</p>;
//     }

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//                 <Sidebar />
//             </div>

//             {/* Main Content */}
//             <div className={`main ${isOpen ? "open" : "closed"} flex-1 flex flex-col`}>
//                 {/* Header */}
//                 <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
//                     {systemTitle.map((title) => (
//                         <div key={title.title} className="flex items-center">
//                             <svg
//                                 className="size-6 w-5 cursor-pointer"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={1.5}
//                                 stroke="currentColor"
//                                 onClick={toggleMenu}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                             </svg>
//                             <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
//                         </div>
//                     ))}
//                 </header>

//                 {/* Breadcrumb part */}
//                 <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
//                     {breadcrumbCourses.map((label) => (
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

//                 {/* Navigation Menu */}
//                 <div className="flex bg-gray-50" style={{ height: "calc(100vh - 4rem - 2rem)" }}>
//                     <div className="bg-white">
//                         <nav className="text-left p-2 text-md">
//                             <ul className="pl-3 pr-3">
//                                 {[
//                                     { name: "Home", path: "home" },
//                                     { name: "Announcements", path: "announcements" },
//                                     { name: "Assignments", path: "assignments" },
//                                     { name: "Quizzes", path: "quizzes" },
//                                     { name: "Discussions", path: "discussions" },
//                                     { name: "Grades", path: "grades" },
//                                     { name: "People", path: "people" },
//                                     { name: "Syllabus", path: "syllabus" },
//                                     { name: "Modules", path: "modules" },
//                                     { name: "Settings", path: "settings" },
//                                 ].map((item) => (
//                                     <NavLink
//                                         to={`/course/${courseId}/${item.path}`}
//                                         key={item.path}
//                                         className={({ isActive }) =>
//                                             `p-2 block ${isActive ? "text-blue-500 underline font-semibold" : "hover:text-blue-500 hover:underline"}`
//                                         }
//                                     >
//                                         <li>{item.name}</li>
//                                     </NavLink>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </div>

//                     {/* Main Content */}
//                     <main className="flex-1 p-7">
//                         {/* <Routes>
//                             <Route path="/" element={<Navigate to="home" />} />
//                             <Route path="home" element={ <h1 className="text-left text-3xl">Recent Activity in {courseDetails.courseDescription}</h1>} />
//                             <Route path="announcements" element={<Announcements />} />
//                             <Route path="assignments" element={<Assignments />} />
//                             <Route path="quizzes" element={<Quizzes />} />
//                             <Route path="discussions" element={<Discussions />} />
//                             <Route path="grades" element={<Grades />} />
//                             <Route path="people" element={<People />} />
//                             <Route path="syllabus" element={<Syllabus />} />
//                             <Route path="modules" element={<Modules />} />
//                             <Route path="settings" element={<Settings />} />
//                         </Routes> */}


//                         {/* <Routes>
//                             <Route path="/" element={<Navigate to="home" />} />
//                             <Route
//                                 path="home"
//                                 element={<Home courseId={courseId} />}
//                             />
//                             <Route path="announcements" element={<Announcements courseId={courseId} />} />
//                             <Route path="assignments" element={<Assignments courseId={courseId} />} />
//                             <Route path="quizzes" element={<Quizzes courseId={courseId} />} />
//                             <Route path="discussions" element={<Discussions courseId={courseId} />} />
//                             <Route path="grades" element={<Grades courseId={courseId} />} />
//                             <Route path="people" element={<People courseId={courseId} />} />
//                             <Route path="syllabus" element={<Syllabus courseId={courseId} />} />
//                             <Route path="modules" element={<Modules courseId={courseId} />} />
//                             <Route path="settings" element={<Settings courseId={courseId} />} />
//                         </Routes> */}


// <Routes>
//     <Route path="/" element={<Navigate to="home" />} />
//     <Route
//         path="home"
//         element={
//             <div className="ml-5 mr-5">
//                 <h1 className="text-left text-3xl">Recent Activity in {courseDetails.courseDescription}</h1>
//                 <div className="flex bg-blue-900 mt-10">
//                     <svg
//                         className="w-8 ml-4 mr-3"
//                         fill="#ffffff"
//                         viewBox="0 0 1920 1920"
//                         xmlns="http://www.w3.org/2000/svg"
//                         stroke="#ffffff"
//                     >
//                         {/* SVG content */}
//                     </svg>
//                     <p className="text-left text-sm bg-white m-0.5 p-4">
//                         <strong>No Recent Messages.</strong>
//                         There’s nothing here yet. As you participate in your courses, this stream will update with messages from discussions, grades, private chats, and other notifications.
//                     </p>
//                 </div>
//             </div>
//         }
//     />
//     <Route path="announcements" element={<Announcements courseId={courseId} />} />
//     <Route path="assignments" element={<Assignments courseId={courseId} />} />
//     <Route path="quizzes" element={<Quizzes courseId={courseId} />} />
//     <Route path="discussions" element={<Discussions courseId={courseId} />} />
//     <Route path="grades" element={<Grades courseId={courseId} />} />
//     <Route path="people" element={<People courseId={courseId} />} />
//     <Route path="syllabus" element={<Syllabus courseId={courseId} />} />
//     <Route path="modules" element={<Modules courseId={courseId} />} />
//     <Route path="settings" element={<Settings courseId={courseId} />} />
// </Routes>


//                     </main>
//                 </div>

//                 {/* Footer */}
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default Home;




// import React, { useState, useEffect } from "react";
// import { useParams, NavLink, Routes, Route, Navigate } from "react-router-dom";
// import axios from "axios";
// import { breadcrumbCourses, systemTitle } from "../Constants/Const";
// import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
// import Announcements from "../Course Menu/Announcements";
// import Assignments from "../Course Menu/Assignments";
// import Quizzes from "../Course Menu/Quizzes";
// import Discussions from "../Course Menu/Discussions";
// import People from "../Course Menu/People";
// import Settings from "../Course Menu/Settings";
// import Modules from "../Course Menu/Modules";
// import Syllabus from "../Course Menu/Syllabus";
// import Grades from "../Course Menu/Grades";

// const Home = () => {
//     const { courseId } = useParams();
//     const [courseDetails, setCourseDetails] = useState(null);
//     const [activities, setActivities] = useState(null);
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => setIsOpen(!isOpen);

//     // Fetch course details
//     useEffect(() => {
//         const fetchCourseDetails = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/courses/${courseId}`);
//                 setCourseDetails(response.data);
//             } catch (error) {
//                 console.error("Error fetching course details:", error);
//             }
//         };

//         const fetchActivities = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/courses/${courseId}/activities`);
//                 setActivities(response.data);
//             } catch (error) {
//                 console.error("Error fetching activities:", error);
//             }
//         };

//         if (courseId) {
//             fetchCourseDetails();
//             fetchActivities();
//         }
//     }, [courseId]);

//     if (!courseDetails) {
//         return <p>Loading course details...</p>;
//     }

//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//                 <Sidebar />
//             </div>

//             {/* Main Content */}
//             <div className={`main ${isOpen ? "open" : "closed"} flex-1 flex flex-col`}>
//                 {/* Header */}
//                 <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
//                     {systemTitle.map((title) => (
//                         <div key={title.title} className="flex items-center">
//                             <svg
//                                 className="size-6 w-5 cursor-pointer"
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth={1.5}
//                                 stroke="currentColor"
//                                 onClick={toggleMenu}
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//                             </svg>
//                             <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
//                         </div>
//                     ))}
//                 </header>

//                 {/* Breadcrumb */}
//                 <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
//                     {breadcrumbCourses.map((label) => (
//                         <div key={label.label} className="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
//                             <p className="pr-10 text-sm">{label.label}</p>
//                             <a href="#" className="text-gray-600 dark:text-gray-200">
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-4 h-4"
//                                     viewBox="0 0 20 20"
//                                     fill="currentColor"
//                                 >
//                                     <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v-2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                                 </svg>
//                             </a>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Navigation Menu */}
//                 <div className="flex bg-gray-50" style={{ height: "calc(100vh - 4rem - 2rem)" }}>
//                     <div className="bg-white">
//                         <nav className="text-left p-2 text-md">
//                             <ul className="pl-3 pr-3">
//                                 {[
//                                     { name: "Home", path: "home" },
//                                     { name: "Announcements", path: "announcements" },
//                                     { name: "Assignments", path: "assignments" },
//                                     { name: "Quizzes", path: "quizzes" },
//                                     { name: "Discussions", path: "discussions" },
//                                     { name: "Grades", path: "grades" },
//                                     { name: "People", path: "people" },
//                                     { name: "Syllabus", path: "syllabus" },
//                                     { name: "Modules", path: "modules" },
//                                     { name: "Settings", path: "settings" },
//                                 ].map((item) => (
//                                     <NavLink
//                                         to={`/course/${courseId}/${item.path}`}
//                                         key={item.path}
//                                         className={({ isActive }) =>
//                                             `p-2 block ${isActive ? "text-blue-500 underline font-semibold" : "hover:text-blue-500 hover:underline"}`
//                                         }
//                                     >
//                                         <li>{item.name}</li>
//                                     </NavLink>
//                                 ))}
//                             </ul>
//                         </nav>
//                     </div>
//                 </div>

//                 {/* Main Content */}
//                 <main className="flex-1 p-7">
//                     <Routes>
//                         <Route path="/" element={<Navigate to="home" />} />
//                         <Route
//                             path="home"
//                             element={
//                                 <div className="ml-5 mr-5">
//                                     <h1 className="text-left text-3xl">Recent Activity in {courseDetails.courseDescription}</h1>
//                                     <div className="flex bg-blue-900 mt-10">
//                                         <svg
//                                             className="w-8 ml-4 mr-3"
//                                             fill="#ffffff"
//                                             viewBox="0 0 1920 1920"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             stroke="#ffffff"
//                                         >
//                                             {/* SVG content */}
//                                         </svg>
//                                         <p className="text-left text-sm bg-white m-0.5 p-4">
//                                             <strong>No Recent Messages.</strong>
//                                             There’s nothing here yet. As you participate in your courses, this stream will update with messages from discussions, grades, private chats, and other notifications.
//                                         </p>
//                                     </div>
//                                 </div>
//                             }
//                         />
//                         <Route path="announcements" element={<Announcements courseId={courseId} />} />
//                         <Route path="assignments" element={<Assignments courseId={courseId} />} />
//                         <Route path="quizzes" element={<Quizzes courseId={courseId} />} />
//                         <Route path="discussions" element={<Discussions courseId={courseId} />} />
//                         <Route path="grades" element={<Grades courseId={courseId} />} />
//                         <Route path="people" element={<People courseId={courseId} />} />
//                         <Route path="syllabus" element={<Syllabus courseId={courseId} />} />
//                         <Route path="modules" element={<Modules courseId={courseId} />} />
//                         <Route path="settings" element={<Settings courseId={courseId} />} />
//                     </Routes>


//                     {!activities ? (
//                         <p>Loading activities...</p>
//                     ) : (
//                         <div>
//                             <h2 className="text-xl font-bold mt-4">Announcements</h2>
//                             {activities.announcements.length > 0 ? (
//                                 activities.announcements.map((announcement) => (
//                                     <div key={announcement.id} className="p-4 bg-white shadow mb-2">
//                                         <h3 className="font-semibold">{announcement.announcementTitle}</h3>
//                                         <p>{announcement.content}</p>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>No announcements available.</p>
//                             )}

//                             <h2 className="text-xl font-bold mt-4">Assignments</h2>
//                             {activities.assignments.length > 0 ? (
//                                 activities.assignments.map((assignment) => (
//                                     <div key={assignment.id} className="p-4 bg-white shadow mb-2">
//                                         <h3 className="font-semibold">{assignment.activityDescription}</h3>
//                                         <p>{assignment.description}</p>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>No assignments available.</p>
//                             )}

//                             <h2 className="text-xl font-bold mt-4">Learning Materials</h2>
//                             {activities.learningMaterials.length > 0 ? (
//                                 activities.learningMaterials.map((material) => (
//                                     <div key={material.id} className="p-4 bg-white shadow mb-2">
//                                         <h3 className="font-semibold">{material.moduleTitle}</h3>
//                                         <a href={material.link} target="_blank" rel="noopener noreferrer">
//                                             Access Material
//                                         </a>
//                                     </div>
//                                 ))
//                             ) : (
//                                 <p>No learning materials available.</p>
//                             )}
//                         </div>
//                     )}

//                 </main>

//                 {/* Footer */}
//                 <Footer />
//             </div>
//         </div>
//     );
// };

// export default Home;






import React, { useState, useEffect } from "react";
import { useParams, NavLink, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { breadcrumbCourses, systemTitle } from "../Constants/Const";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Announcements from "../Course Menu/Announcements";
import Assignments from "../Course Menu/Assignments";
import Quizzes from "../Course Menu/Quizzes";
import Discussions from "../Course Menu/Discussions";
import People from "../Course Menu/People";
import Settings from "../Course Menu/Settings";
import Modules from "../Course Menu/Modules";
import Syllabus from "../Course Menu/Syllabus";
import Grades from "../Course Menu/Grades";

const Home = () => {
    const { courseId } = useParams();
    const [courseDetails, setCourseDetails] = useState(null);
    const [activities, setActivities] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Fetch course details
    useEffect(() => {
        const fetchCourseDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/courses/${courseId}`);
                setCourseDetails(response.data);
            } catch (error) {
                console.error("Error fetching course details:", error);
            }
        };

        const fetchActivities = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/courses/${courseId}/activities`);
                setActivities(response.data);
            } catch (error) {
                console.error("Error fetching activities:", error);
            }
        };

        if (courseId) {
            fetchCourseDetails();
            fetchActivities();
        }
    }, [courseId]);

    if (!courseDetails) {
        return <p>Loading course details...</p>;
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className={`main ${isOpen ? "open" : "closed"} flex-1 flex flex-col`}>
                {/* Header */}
                <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
                    {systemTitle.map((title) => (
                        <div key={title.title} className="flex items-center">
                            <svg
                                className="size-6 w-5 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                onClick={toggleMenu}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
                        </div>
                    ))}
                </header>

                {/* Breadcrumb */}
                <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
                    {breadcrumbCourses.map((label) => (
                        <div key={label.label} className="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
                            <p className="pr-10 text-sm">{label.label}</p>
                            <a href="#" className="text-gray-600 dark:text-gray-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v-2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                {/* Navigation Menu */}
                <div className="flex bg-gray-50" style={{ height: "calc(100vh - 4rem - 2rem)" }}>
                    <div className="bg-white w-64 flex-shrink-0">
                        <nav className="text-left p-2 text-md">
                            <ul className="pl-3 pr-3">
                                {[
                                    { name: "Home", path: "home" },
                                    { name: "Announcements", path: "announcements" },
                                    { name: "Assignments", path: "assignments" },
                                    { name: "Quizzes", path: "quizzes" },
                                    { name: "Discussions", path: "discussions" },
                                    { name: "Grades", path: "grades" },
                                    { name: "People", path: "people" },
                                    { name: "Syllabus", path: "syllabus" },
                                    { name: "Modules", path: "modules" },
                                    { name: "Settings", path: "settings" },
                                ].map((item) => (
                                    <NavLink
                                        to={`/course/${courseId}/${item.path}`}
                                        key={item.path}
                                        className={({ isActive }) =>
                                            `p-2 block ${isActive ? "text-blue-500 underline font-semibold" : "hover:text-blue-500 hover:underline"}`
                                        }
                                    >
                                        <li>{item.name}</li>
                                    </NavLink>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Main Content */}
                    <main className="flex-1 p-7 overflow-auto">
                        <Routes>
                            <Route path="/" element={<Navigate to="home" />} />
                            <Route
  path="home"
  element={
    <div className="ml-5 mr-5">
      <h1 className="text-left text-3xl border-b-2">Recent Activity in {courseDetails.courseDescription}</h1>

      {!activities || (!activities.announcements.length && !activities.assignments.length && !activities.learningMaterials.length) ? (
        <div className="flex bg-blue-900 mt-10">
          <svg
            className="w-8 ml-4 mr-3"
            fill="#ffffff"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            {/* SVG content */}
          </svg>
          <p className="text-left text-sm bg-white m-0.5 p-4">
            <strong>No Recent Messages.</strong>
            There’s nothing here yet. As you participate in your courses, this stream will update with messages from discussions, grades, private chats, and other notifications.
          </p>
        </div>
        
      ) : (
        <div className="px-3">
          <h2 className="text-xl font-bold mt-4 capitalize">Announcements</h2>
          {activities.announcements.length > 0 ? (
            activities.announcements.map((announcement) => (
              <div key={announcement.id} className="p-4 bg-white shadow mb-2">
                <h3 className="font-semibold capitalize">{announcement.announcementTitle}</h3>
                <p>{announcement.content}</p>
              </div>
            ))
          ) : (
            <p>No announcements available.</p>
          )}

          <h2 className="text-xl font-bold mt-4 capitalize">Assignments</h2>
          {activities.assignments.length > 0 ? (
            activities.assignments.map((assignment) => (
              <div key={assignment.id} className="p-4 bg-white shadow mb-2">
                <h3 className="font-semibold capitalize">{assignment.activityDescription}</h3>
                <p>{assignment.description}</p>
              </div>
            ))
          ) : (
            <p>No assignments available.</p>
          )}

          <h2 className="text-xl font-bold mt-4 capitalize">Learning Materials</h2>
          {activities.learningMaterials.length > 0 ? (
            activities.learningMaterials.map((material) => (
              <div key={material.id} className="p-4 bg-white shadow mb-2">
                <h3 className="font-semibold capitalize">{material.moduleTitle}</h3>
                <a href={material.link} target="_blank" rel="noopener noreferrer">
                  Access Material
                </a>
              </div>
            ))
          ) : (
            <p>No learning materials available.</p>
          )}
        </div>
      )}
    </div>
  }
/>

                            <Route path="announcements" element={<Announcements courseId={courseId} />} />
                            <Route path="assignments" element={<Assignments courseId={courseId} />} />
                            <Route path="quizzes" element={<Quizzes courseId={courseId} />} />
                            <Route path="discussions" element={<Discussions courseId={courseId} />} />
                            <Route path="grades" element={<Grades courseId={courseId} />} />
                            <Route path="people" element={<People courseId={courseId} />} />
                            <Route path="syllabus" element={<Syllabus courseId={courseId} />} />
                            <Route path="modules" element={<Modules courseId={courseId} />} />
                            <Route path="settings" element={<Settings courseId={courseId} />} />
                        </Routes>
                    </main>
                </div>
            </div>

            {/* Footer */}
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
