
import React, { useState, useEffect, useContext } from "react";
import StudentSidebar from "../Sidebar/StudentSidebar";
import Footer from "../Footer/Footer";
import UpperLabel from "../Upperlabel/UpperLabel";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { systemTitle } from "../Constants/Const";
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
import { UserContext, useUser } from "../UserProvider/UserContext"
import Grades from "../Course Menu/Grades";
import axios from "axios";
import { use } from "react";

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
    return <p>No Subjects fetched...</p>;
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
const StudentCourse = () => {
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  const menu = () => setIsOpen(!isOpen);

  // Fetch subjects from API
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${user.userId}/courses`);
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
    navigate(`/studentcourse/${subject.courseId}/home`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : "closed"} transition-all duration-300 ease-in-out`}>
        <StudentSidebar />
      </div>
  
      {/* Main Content */}
      <div className={`main ${isOpen ? "open" : "closed"} flex-1 flex flex-col transition-all duration-300 ease-in-out`}>
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
  
        {/* Subject List Page */}
        {!selectedSubject && (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-6 text-center animate__animated animate__fadeIn">
              Select a Subject
            </h2>
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
                      <span className="text-4xl font-bold text-white opacity-75 group-hover:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-12 h-12"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5h18M3 12h18M3 19h18"
                          />
                        </svg>
                      </span>
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
            <UpperLabel />
            <section
              className="flex bg-gray-50"
              style={{ height: "calc(100vh - 4rem - 2rem)" }}
            >
              <div className="bg-white">
                <nav className="text-left p-2 text-md">
                  <ul className="pl-3 pr-3">
                    {[
                      { name: "Home", path: "home" },
                      { name: "Announcements", path: "announcements" },
                      { name: "Assignments", path: "assignments" },
                      { name: "Quizzes", path: "quizzes" },
                      { name: "People", path: "people" },
                      { name: "Syllabus", path: "syllabus" },
                      { name: "Modules", path: "modules" },
                    ].map((item) => (
                      <NavLink
                        to={`/course/${selectedSubject.courseDescription}/${item.path}`}
                        key={item.path}
                        className={({ isActive }) =>
                          `p-2 block ${
                            isActive
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
  
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
  
};

export default StudentCourse;
