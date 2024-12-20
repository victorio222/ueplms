// import React, { useState } from "react";

// // Modal component for adding a person
// function AddPeopleModal({ isOpen, onClose, onAdd }) {
//   const [name, setName] = useState("");
//   const [studentId, setStudentId] = useState("");
//   const [role, setRole] = useState("Student");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && studentId) {
//       onAdd({ name, studentId, role });
//       setName("");
//       setStudentId("");
//       setRole("Student");
//       onClose(); // Close the modal after adding
//     }
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded-lg w-96">
//           <h2 className="text-xl font-bold mb-4">Add New Person</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
//                 Student ID
//               </label>
//               <input
//                 type="text"
//                 id="studentId"
//                 value={studentId}
//                 onChange={(e) => setStudentId(e.target.value)}
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                 Role
//               </label>
//               <select
//                 id="role"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="Student">Student</option>
//                 <option value="Instructor">Instructor</option>
//               </select>
//             </div>
//             <div className="flex justify-end space-x-4">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 bg-gray-300 rounded-lg text-sm"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
//               >
//                 Add Person
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// }

// export default function People({ subjectName }) {
//   const [users, setUsers] = useState([
//     { id: 1, name: "John Doe", studentId: "S12345", role: "Student", avatar: "https://via.placeholder.com/40" },
//     { id: 2, name: "Jane Smith", studentId: "S12346", role: "Instructor", avatar: "https://via.placeholder.com/40" },
//     { id: 3, name: "Sarah Johnson", studentId: "S12347", role: "Student", avatar: "https://via.placeholder.com/40" },
//     { id: 4, name: "Michael Brown", studentId: "S12348", role: "Instructor", avatar: "https://via.placeholder.com/40" }
//   ]);

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddPerson = (newUser) => {
//     const user = {
//       id: users.length + 1,
//       ...newUser,
//       avatar: "https://via.placeholder.com/40", // Default avatar for new users
//     };
//     setUsers([...users, user]);
//   };

//   return (
//     <div className="ml-5 mr-5">
//       <h1 className="text-left text-3xl">{subjectName} - People</h1>

//       <div className="mt-6 mb-6">
//         <button 
//           onClick={() => setIsModalOpen(true)} 
//           className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
//           Add People
//         </button>
//       </div>

//       {/* Main content area with scrollable container */}
//       <div className="flex flex-col mt-10 overflow-auto max-h-[calc(100vh-200px)]">
//         {users.map(user => (
//           <div key={user.id} className="flex items-center bg-gray-100 p-4 rounded-lg mb-4">
//             <img
//               src={user.avatar}
//               alt={user.name}
//               className="w-12 h-12 rounded-full mr-4"
//             />
//             <div className="flex-1 flex justify-between">
//               <div>
//                 <h2 className="text-xl">{user.name}</h2>
//                 <p className="text-sm text-gray-600">Student ID: {user.studentId}</p>
//               </div>
//               <div className="text-right">
//                 <p className="text-sm text-gray-600">{user.role}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* No users message */}
//       {users.length === 0 && (
//         <div className="text-center p-6">
//           <p className="text-xl font-semibold text-gray-600">No users available in this course.</p>
//         </div>
//       )}

//       {/* Modal for adding a new person */}
//       <AddPeopleModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         onAdd={handleAddPerson} 
//       />
//     </div>
//   );
// }










// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // Modal component for adding a person
// function AddPeopleModal({ isOpen, onClose, onAdd }) {
//   const [name, setName] = useState("");
//   const [studentId, setStudentId] = useState("");
//   const [role, setRole] = useState("Student");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && studentId) {
//       onAdd({ name, studentId, role });
//       setName("");
//       setStudentId("");
//       setRole("Student");
//       onClose(); // Close the modal after adding
//     }
//   };

//   return (
//     isOpen && (
//       <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
//         <div className="bg-white p-6 rounded-lg w-96">
//           <h2 className="text-xl font-bold mb-4">Add New Person</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
//                 Student ID
//               </label>
//               <input
//                 type="text"
//                 id="studentId"
//                 value={studentId}
//                 onChange={(e) => setStudentId(e.target.value)}
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                 Role
//               </label>
//               <select
//                 id="role"
//                 value={role}
//                 onChange={(e) => setRole(e.target.value)}
//                 className="w-full mt-2 p-2 border border-gray-300 rounded-md"
//               >
//                 <option value="Student">Student</option>
//                 <option value="Instructor">Instructor</option>
//               </select>
//             </div>
//             <div className="flex justify-end space-x-4">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-4 py-2 bg-gray-300 rounded-lg text-sm"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
//               >
//                 Add Person
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// }

// export default function People({ courseId }) {
//   const [users, setUsers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch the people (students and instructors) for this course
//   useEffect(() => {
//     const fetchPeople = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/courses/${courseId}/people`);
//         setUsers(response.data); // Assuming response is an array of users
//       } catch (error) {
//         console.error("Error fetching people:", error);
//       }
//     };
//     fetchPeople();
//   }, [courseId]);

//   const handleAddPerson = (newUser) => {
//     const user = {
//       id: users.length + 1,
//       ...newUser,
//       avatar: "https://via.placeholder.com/40", // Default avatar for new users
//     };
//     setUsers([...users, user]);
//   };

//   return (
//     <div className="ml-5 mr-5">
//       <h1 className="text-left text-3xl">People in Course {courseId}</h1>

//       <div className="mt-6 mb-6">
//         <button 
//           onClick={() => setIsModalOpen(true)} 
//           className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
//           Add People
//         </button>
//       </div>

//       {/* Main content area with scrollable container */}
//       <div className="flex flex-col mt-10 overflow-auto max-h-[calc(100vh-200px)]">
//         {users.length > 0 ? (
//           users.map(user => (
//             <div key={user.id} className="flex items-center bg-gray-100 p-4 rounded-lg mb-4">
//               <img
//                 src={user.avatar}
//                 alt={user.name}
//                 className="w-12 h-12 rounded-full mr-4"
//               />
//               <div className="flex-1 flex justify-between">
//                 <div>
//                   <h2 className="text-xl">{user.name}</h2>
//                   <p className="text-sm text-gray-600">Student ID: {user.studentId}</p>
//                 </div>
//                 <div className="text-right">
//                   <p className="text-sm text-gray-600">{user.role}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center p-6">
//             <p className="text-xl font-semibold text-gray-600">No users available in this course.</p>
//           </div>
//         )}
//       </div>

//       {/* Modal for adding a new person */}
//       <AddPeopleModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         onAdd={handleAddPerson} 
//       />
//     </div>
//   );
// }










// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AddPeopleModal from "../components/AddPeopleModal";

// export default function People({ courseId }) {
//   const [users, setUsers] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // Fetch the people (students and instructors) for this course
//   useEffect(() => {
//     const fetchPeople = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/courses/${courseId}/people`);
//         setUsers(response.data); // Assuming response is an array of users
//       } catch (error) {
//         console.error("Error fetching people:", error);
//       }
//     };
//     fetchPeople();
//   }, [courseId]);

//   const handleAddPerson = (newUser) => {
//     const user = {
//       id: users.length + 1,
//       ...newUser,
//       avatar: "https://via.placeholder.com/40", // Default avatar for new users
//     };
//     setUsers([...users, user]);
//   };

//   return (
//     <div className="ml-5 mr-5">
//       <h1 className="text-left text-3xl">People in Course {courseId}</h1>

//       <div className="mt-6 mb-6">
//         <button 
//           onClick={() => setIsModalOpen(true)} 
//           className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
//           Add People
//         </button>
//       </div>

//       {/* Table for displaying the users */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full table-auto">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Avatar</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Student ID</th>
//               <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.length > 0 ? (
//               users.map(user => (
//                 <tr key={user.id} className="border-b">
//                   <td className="px-6 py-4">
//                     <img
//                       src={user.avatar}
//                       alt={user.name}
//                       className="w-10 h-10 rounded-full"
//                     />
//                   </td>
//                   <td className="px-6 py-4 text-sm">{user.name}</td>
//                   <td className="px-6 py-4 text-sm">{user.studentId}</td>
//                   <td className="px-6 py-4 text-sm">{user.role}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="px-6 py-4 text-center text-sm text-gray-600">No users available in this course.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal for adding a new person */}
//       <AddPeopleModal 
//         isOpen={isModalOpen} 
//         onClose={() => setIsModalOpen(false)} 
//         onAdd={handleAddPerson} 
//       />
//     </div>
//   );
// }






// src/components/CoursePeople.js
import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the CoursePeople component
const CoursePeople = ({ courseId }) => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEnrolledStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/courses/${courseId}/people`);
        setEnrolledStudents(response.data); // Set the data received from the backend
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledStudents();
  }, [courseId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold">Enrolled Students</h2>

      <table className="table-auto w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
          <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Student ID</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Name</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">Role</th>
          </tr>
        </thead>
        <tbody>
          {enrolledStudents.length > 0 ? (
            enrolledStudents.map((enrollment) => (
              <tr key={enrollment.enrollmentId} className="border-b">
                <td className="px-6 py-4 text-sm">{enrollment.user.studentNumber}</td>
                <td className="px-6 py-4 text-sm">
                  {`${enrollment.user.firstName} ${enrollment.user.lastName}`}
                </td>
                <td className="px-6 py-4 text-sm capitalize">{enrollment.user.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center px-6 py-4 text-sm italic">
                No students enrolled
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CoursePeople;
