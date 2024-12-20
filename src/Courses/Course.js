// import React, { useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
// import UpperLabel from "../Upperlabel/UpperLabel";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { breadcrumbDashboard, systemTitle } from "../Constants/Const";
// import { Routes, Route, Navigate, NavLink, useLocation } from "react-router-dom"; // No need to import Router here
// import Home from "../Course Menu/Home";
// import Announcements from "../Course Menu/Announcements";
// import Assignments from "../Course Menu/Assignments";
// import Quizzes from "../Course Menu/Quizzes";
// import Discussions from "../Course Menu/Discussions";

// const Course = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { name: "Home", path: "home" },
//     { name: "Announcements", path: "announcements" },
//     { name: "Assignments", path: "assignments" },
//     { name: "Quizzes", path: "quizzes" },
//     { name: "Discussions", path: "discussions" },
//     { name: "Grades", path: "grades" },
//     { name: "People", path: "people"},
//     { name: "Syllabus", path:"syllabus"},
//     { name: "Modules", path: "modules"},
//     { name: "Settings", path: "settings"},
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className={`main ${isOpen ? "open" : "closed"} flex-1 flex flex-col`}>
//         {/* Header */}
//         <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
//           {systemTitle.map((title) => (
//             <div key={title.title} className="flex items-center justify-center">
//               <svg
//                 className="size-6 w-5 cursor-pointer"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 onClick={menu}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//               <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
//             </div>
//           ))}

//           <div className="flex items-center">
//             <svg
//               className="size-6 w-7 cursor-pointer pr-2"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
//               />
//             </svg>
//             <div className="flex items-center pl-1 pr-3 cursor-pointer">
//               <p className="text-sm pr-2">Cabatingan, Victorio Jr F.</p>
//               <div className="w-10 h-10 rounded-full">
//                 <img
//                   className="object-cover w-10 h-10 rounded-full"
//                   src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
//                   alt="Avatar"
//                 />
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Breadcrumb */}
//         <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
//           {breadcrumbDashboard.map((label) => (
//             <div
//               key={label.label}
//               className="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap"
//             >
//               <p className="pr-10 text-sm">{label.label}</p>
//               <a href="#" className="text-gray-600 dark:text-gray-200">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
//                 </svg>
//               </a>

//               <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>

//               <a
//                 href="dashboard.js"
//                 className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
//               >
//                 {label.sublabel}
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Content Section */}
//         <section
//           className="flex bg-gray-50"
//           style={{ height: "calc(100vh - 4rem - 2rem)" }} // Adjust 4rem (header) and 2rem (footer) as necessary
//         >
//           <div className="bg-white">
//             <nav className="text-left p-2 text-md">
//               <ul className="pl-3 pr-3">
//                 {menuItems.map((item) => (
//                   <NavLink to={item.path} className="cursor-default">
//                     <li key={item} className="p-2 hover:text-blue-500 hover:duration-200 hover:underline">
//                       {item.name}
//                     </li>
//                   </NavLink>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//           <main className="flex-1 p-7">
//             <Routes>
//               <Route path="/" element={<Navigate to="home" />} />
//               <Route path="home" element={<Home />} />
//               <Route path="announcements" element={<Announcements />} />
//               <Route path="assignments" element={<Assignments />} />
//               <Route path="quizzes" element={<Quizzes />} />
//               <Route path="discussions" element={<Discussions />} />
//             </Routes>
//           </main>
//         </section>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Course;







// import React, { useState } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
// import UpperLabel from "../Upperlabel/UpperLabel";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { breadcrumbCourses, breadcrumbDashboard, breadcrumbMessages, systemTitle } from "../Constants/Const";
// import { Routes, Route, Navigate, NavLink, useLocation } from "react-router-dom";
// import Home from "../Course Menu/Home";
// import Announcements from "../Course Menu/Announcements";
// import Assignments from "../Course Menu/Assignments";
// import Quizzes from "../Course Menu/Quizzes";
// import Discussions from "../Course Menu/Discussions";
// import People from "../Course Menu/People";
// import Settings from "../Course Menu/Settings";
// import Modules from "../Course Menu/Modules";
// import Syllabus from "../Course Menu/Syllabus";
// import Grades from "../Course Menu/Grades";

// const Course = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { name: "Home", path: "home" },
//     { name: "Announcements", path: "announcements" },
//     { name: "Assignments", path: "assignments" },
//     { name: "Quizzes", path: "quizzes" },
//     { name: "Discussions", path: "discussions" },
//     { name: "Grades", path: "grades" },
//     { name: "People", path: "people" },
//     { name: "Syllabus", path: "syllabus" },
//     { name: "Modules", path: "modules" },
//     { name: "Settings", path: "settings" },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className={`main ${isOpen ? "open" : "closed"} flex-1 flex flex-col`}>
//         {/* Header */}
//         <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
//           {systemTitle.map((title) => (
//             <div key={title.title} className="flex items-center justify-center">
//               <svg
//                 className="size-6 w-5 cursor-pointer"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 onClick={menu}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//               <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
//             </div>
//           ))}

//           <div className="flex items-center">
//             <svg
//               className="size-6 w-7 cursor-pointer pr-2"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth={1.5}
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
//               />
//             </svg>
//             <div className="flex items-center pl-1 pr-3 cursor-pointer">
//               <p className="text-sm pr-2">Cabatingan, Victorio Jr F.</p>
//               <div className="w-10 h-10 rounded-full">
//                 <img
//                   className="object-cover w-10 h-10 rounded-full"
//                   src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
//                   alt="Avatar"
//                 />
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Breadcrumb */}
//         <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
//           {breadcrumbCourses.map((label) => (
//             <div key={label.label} className="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap">
//               <p className='pr-10 text-sm'>{label.label}</p>
//               <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="w-4 h-4" viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//               <a href="dashboard.js" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
//                 {label.sublabel}
//               </a>
//             </div>
//           ))}
//         </div>

//         {/* Content Section */}
//         <section
//           className="flex bg-gray-50"
//           style={{ height: "calc(100vh - 4rem - 2rem)" }}
//         >
//           <div className="bg-white">
//             <nav className="text-left p-2 text-md">
//               <ul className="pl-3 pr-3">
//                 {menuItems.map((item) => (
//                   <NavLink
//                     to={item.path}
//                     key={item.path}
//                     className={({ isActive }) =>
//                       `p-2 block ${isActive
//                         ? "text-blue-500 underline font-semibold"
//                         : "hover:text-blue-500 hover:underline"
//                       }`
//                     }
//                   >
//                     <li>{item.name}</li>
//                   </NavLink>
//                 ))}
//               </ul>
//             </nav>
//           </div>
//           <main className="flex-1 p-7">
//             <Routes>
//               <Route path="/" element={<Navigate to="home" />} />
//               <Route path="home" element={<Home />} />
//               <Route path="announcements" element={<Announcements />} />
//               <Route path="assignments" element={<Assignments />} />
//               <Route path="quizzes" element={<Quizzes />} />
//               <Route path="discussions" element={<Discussions />} />
//               <Route path="grades" element={<Grades />} />
//               <Route path="people" element={<People />} />
//               <Route path="syllabus" element={<Syllabus />} />
//               <Route path="modules" element={<Modules />} />
//               <Route path="settings" element={<Settings />} />
//             </Routes>
//           </main>
//         </section>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Course;




// import React, { useState, useEffect } from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Footer from "../Footer/Footer";
// import UpperLabel from "../Upperlabel/UpperLabel";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { systemTitle } from "../Constants/Const";
// import { Routes, Route, Navigate, NavLink, useNavigate } from "react-router-dom";
// import Home from "../Course Menu/Home";
// import Announcements from "../Course Menu/Announcements";
// import Assignments from "../Course Menu/Assignments";
// import Quizzes from "../Course Menu/Quizzes";
// import Discussions from "../Course Menu/Discussions";
// import People from "../Course Menu/People";
// import Settings from "../Course Menu/Settings";
// import Modules from "../Course Menu/Modules";
// import Syllabus from "../Course Menu/Syllabus";
// import Grades from "../Course Menu/Grades";
// import axios from "axios";

// const Course = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedSubject, setSelectedSubject] = useState(null);
//   const [subjects, setSubjects] = useState([]); // State for storing subjects
//   const navigate = useNavigate();

//   const menu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Fetch subjects from API when the component mounts
//   useEffect(() => {
//     const fetchSubjects = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/courses"); // Replace with your API endpoint
//         setSubjects(response.data); // Store subjects in state
//       } catch (error) {
//         console.error("Error fetching subjects:", error);
//       }
//     };

//     fetchSubjects();
//   }, []);

//   // Navigate to the course when a subject is selected
//   const handleSubjectSelect = (subjectRoute) => {
//     setSelectedSubject(subjectRoute);
//     navigate(`/${subjectRoute}/home`); // Navigate to the selected subject's "home" page
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className={`main ${isOpen ? "open" : "closed"} flex-1 flex flex-col`}>
//         {/* Header */}
//         <header className="sticky top-0 z-10 bg-gray-800 text-white shadow p-2 pl-5 flex items-center justify-between">
//           {systemTitle.map((title) => (
//             <div key={title.title} className="flex items-center justify-center">
//               <svg
//                 className="size-6 w-5 cursor-pointer"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth={1.5}
//                 stroke="currentColor"
//                 onClick={menu}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//               <h2 className="text-medium font-semibold pl-4">{title.title}</h2>
//             </div>
//           ))}
//         </header>

//         {/* Subject List Page */}
//         {!selectedSubject && (
//           <div className="flex-1 flex flex-col items-center justify-center bg-white p-4">
//             <h2 className="text-2xl font-semibold mb-4">Select a Subject</h2>
//             <ul className="space-y-2">
//               {subjects.length > 0 ? (
//                 subjects.map((subject) => (
//                   <li
//                     key={subject.id}
//                     className="p-2 text-center border-b cursor-pointer hover:bg-gray-200"
//                     onClick={() => handleSubjectSelect(subject.route)} // Navigate to selected subject
//                   >
//                     {subject.courseDescription}
//                   </li>
//                 ))
//               ) : (
//                 <p>Loading subjects...</p>
//               )}
//             </ul>
//           </div>
//         )}

//         {/* Main Page Content for the selected subject */}
//         {selectedSubject && (
//           <>
//             <UpperLabel />
//             <section
//               className="flex bg-gray-50"
//               style={{ height: "calc(100vh - 4rem - 2rem)" }}
//             >
//               <div className="bg-white">
//                 <nav className="text-left p-2 text-md">
//                   <ul className="pl-3 pr-3">
//                     {[{ name: "Home", path: "home" },
//                     { name: "Announcements", path: "announcements" },
//                     { name: "Assignments", path: "assignments" },
//                     { name: "Quizzes", path: "quizzes" },
//                     { name: "Discussions", path: "discussions" },
//                     { name: "Grades", path: "grades" },
//                     { name: "People", path: "people" },
//                     { name: "Syllabus", path: "syllabus" },
//                     { name: "Modules", path: "modules" },
//                     { name: "Settings", path: "settings" }].map((item) => (
//                       <NavLink
//                         to={`/${selectedSubject}/${item.path}`}
//                         key={item.path}
//                         className={({ isActive }) =>
//                           `p-2 block ${isActive ? "text-blue-500 underline font-semibold" : "hover:text-blue-500 hover:underline"}`
//                         }
//                       >
//                         <li>{item.name}</li>
//                       </NavLink>
//                     ))}
//                   </ul>
//                 </nav>
//               </div>
//               <main className="flex-1 p-7">
//                 <Routes>
//                   <Route path="/" element={<Navigate to="home" />} />
//                   <Route path="home" element={<Home />} />
//                   <Route path="announcements" element={<Announcements />} />
//                   <Route path="assignments" element={<Assignments />} />
//                   <Route path="quizzes" element={<Quizzes />} />
//                   <Route path="discussions" element={<Discussions />} />
//                   <Route path="grades" element={<Grades />} />
//                   <Route path="people" element={<People />} />
//                   <Route path="syllabus" element={<Syllabus />} />
//                   <Route path="modules" element={<Modules />} />
//                   <Route path="settings" element={<Settings />} />
//                 </Routes>
//               </main>
//             </section>
//           </>
//         )}

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Course;



import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import UpperLabel from "../Upperlabel/UpperLabel";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { breadcrumbCourses, systemTitle } from "../Constants/Const";
import { Routes, Route, Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import Home from "../Course Menu/Home";
import Announcements from "../Course Menu/Announcements";
import Assignments from "../Course Menu/Assignments";
import Quizzes from "../Course Menu/Quizzes";
import Discussions from "../Course Menu/Discussions";
import People from "../Course Menu/People";
import Settings from "../Course Menu/Settings";
import Modules from "../Course Menu/Modules";
import Syllabus from "../Course Menu/Syllabus";
import Grades from "../Course Menu/Grades";
import axios from "axios";
import { ChevronRight, Slash, SlashIcon, SlashSquareIcon } from "lucide-react";
import { useUser } from "../UserProvider/UserContext";

// Subject Details Component
const SubjectDetails = ({ subjectId }) => {
  const [subjectDetails, setSubjectDetails] = useState(null);

  useEffect(() => {
    const fetchSubjectDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/courses/${subjectId}`);
        setSubjectDetails(response.data);
      } catch (error) {
        console.error("Error fetching subject details:", error);
      }
    };

    if (subjectId) {
      fetchSubjectDetails();
    }
  }, [subjectId]);

  if (!subjectDetails) {
    return <p>Loading subject details...</p>;
  }

  return (
    <div className="ml-5 mr-5">
      <h1 className="text-left text-3xl">Recent Activity in {subjectDetails.courseDescription}</h1>
      <div className="flex bg-blue-900 mt-10">
        <svg className="w-8 ml-4 mr-3" fill="#ffffff" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
          {/* SVG code here */}
        </svg>
        <p className="text-left text-sm bg-white m-0.5 p-4">
          <strong>No Recent Messages.</strong>
          There’s nothing here yet. As you participate in your courses, this stream will update with messages from discussions, grades, private chats, and other notifications.
        </p>
      </div>
    </div>
  );
};

// Main Course Component
const Course = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();
  const {user} = useUser();

  const menu = () => setIsOpen(!isOpen);

  // Fetch subjects from API
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/teachers/${user.userId}/courses`);
        setSubjects(response.data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  // Navigate when a subject is selected
  const handleSubjectSelect = (subject) => {
    setSelectedSubject(subject);
    navigate(`/course/${subject.courseId}/home`);
  };

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
            <div key={title.title} className="flex items-center justify-center">
              <svg
                className="size-6 w-5 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
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

        {/* Breadcrumb */}
        <div className="bg-gray-200 border-b-2 dark:bg-gray-800">
          {breadcrumbCourses.map((label) => (
            <div
              key={label.label}
              className="bg-white border-t flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap"
            >
              <p className="pr-10 text-sm">{label.label}</p>
              <a href="#" className="text-gray-600 dark:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>

              <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <NavLink to="/course"
                className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
              >
                {label.sublabel}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-b-1 bg-white shadow-sm p-1 pl-6 pr-6 mb-2">
            <h1 className="text-sm p-2 flex items-center">All Courses <ChevronRight /> Select a subject</h1>
        </div>

        {/* Subject List Page */}
        {!selectedSubject && (
          <div className="flex-1 flex flex-col items-start justify-start p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {subjects.length > 0 ? (
                subjects.map((subject) => (
                  <div
                    key={subject.courseId}
                    className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition-all duration-500 ease-in-out cursor-pointer group"
                    onClick={() => handleSubjectSelect(subject)}
                  >
                    {/* Text Effects */}
                    <h3 className="relative text-2xl font-semibold text-gray-800 z-10 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-105 transform">
                      {subject.courseName}
                    </h3>

                    {/* Interactive Text Shadow & Hover Effects */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                    </div>

                    {/* Text Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 group-hover:opacity-40 rounded-lg transition-all duration-300"></div>
                  </div>
                ))
              ) : (
                <p className="text-gray-700">Loading subjects...</p>
              )}
            </div>
          </div>
        )}

        

        {/* Main Page Content for the selected subject */}
        {selectedSubject && (
          <>
            <section className="flex bg-gray-50" style={{ height: "calc(100vh - 4rem - 2rem)" }}>
              <div className="bg-white">
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
                        to={`/course/${selectedSubject.courseDescription}/${item.path}`}
                        key={item.path}
                        className={({ isActive }) =>
                          `p-2 block ${isActive
                            ? "text-blue-500 underline font-semibold"
                            : "hover:text-blue-500 hover:underline"
                          }`
                        }
                      >
                        <li>{item.name}</li>
                      </NavLink>
                    ))}
                  </ul>
                </nav>
              </div>
              <main className="flex-1 p-7">
                <Routes>
                  <Route path="/" element={<Navigate to="home" />} />
                  <Route path="home" element={<SubjectDetails subjectId={selectedSubject.courseId} />} />
                  <Route path="announcements" element={<Announcements />} />
                  <Route path="assignments" element={<Assignments />} />
                  <Route path="quizzes" element={<Quizzes />} />
                  <Route path="discussions" element={<Discussions />} />
                  <Route path="grades" element={<Grades />} />
                  <Route path="people" element={<People />} />
                  <Route path="syllabus" element={<Syllabus />} />
                  <Route path="modules" element={<Modules />} />
                  <Route path="settings" element={<Settings />} />
                </Routes>
              </main>
            </section>
          </>
        )}

        
      </div>
    </div>

  );
};
export default Course;
