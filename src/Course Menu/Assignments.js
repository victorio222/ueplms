// import React from "react";
// import { Delete, ListChecks, Plus, Trash, Check, EllipsisVertical } from "lucide-react";

// export default function Assignments() {
//     return (
//         <div className="mx-5">
//             <div className="flex items-start mt-3">
//                 <input className="w-full h-9 p-2 text-sm" type="text" name="searchAssignments" placeholder="Search"/>
//                 <button className=" ml-2 w-64 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white">
//                     <Plus className="w-5 mr-2" />
//                     <p>New Assignment</p>
//                 </button>
//                 <button className="ml-2 w-52 h-9 text-gray-700 bg-gray-300 rounded-sm p-2 text-sm cursor-pointer flex items-center justify-center hover:bg-gray-400 ">
//                     <ListChecks className="w-5 mr-2" />
//                     <p>Mark All as Read</p>
//                 </button>
//             </div>
//             <div className="flex items-center justify-center flex-col mt-2 border shadow-sm">
//             <h1 className="text-left text-sm w-full p-3 bg-gray-200 font-semibold text-gray-700">Assignments</h1>
//                 <div className="bg-white w-full">
//                     <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
//                         <div className="text-left">
//                             <h2 className="text-lg font-semibold">Assignment 1</h2>
//                             <p className="text-xs text-gray-500">Due: 2022-01-01 <span className="px-2">|</span> 100 pts.</p>
//                         </div>
//                         <div className="flex items-center">
//                             <Check className="w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center bg-blue-500 text-white" />
//                             <EllipsisVertical className="ml-2 w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center bg-gray-400 text-white" />
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center px-4 py-3 border-b border-gray-200">
//                         <p className="my-5 font-semibold text-md text-gray-500">No assignments available.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Plus, Trash } from "lucide-react";

// export default function Activities() {
//     const [activities, setActivities] = useState([]); // State for activities
//     const [newActivity, setNewActivity] = useState({ name: "", description: "" }); // State for new activity

//     // Fetch activities when the component mounts
//     useEffect(() => {
//         fetchActivities();
//     }, []);

//     // Fetch activities from the backend
//     const fetchActivities = async () => {
//         try {
//             const response = await axios.get("http://localhost:8080/activities");

//             // Filter to show only activities of type 'assignment'
//             const assignments = response.data.filter(activity => activity.type === "assignment");
//             setActivities(assignments);
//         } catch (error) {
//             console.error("Error fetching activities:", error);
//         }
//     };

//     // Add a new activity
//     const handleAddActivity = async () => {
//         const { name, description } = newActivity;

//         if (!name.trim() || !description.trim()) {
//             alert("Name and Description are required!");
//             return;
//         }

//         try {
//             const response = await axios.post("http://localhost:8080/activities/add", newActivity);
//             alert(response.data); // Success message
//             fetchActivities(); // Refresh activities
//             setNewActivity({ name: "", description: "" }); // Reset form
//         } catch (error) {
//             console.error("Error adding activity:", error);
//             alert("Failed to add activity.");
//         }
//     };

//     // Delete an activity
//     const handleDeleteActivity = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/activities/delete?id=${id}`);
//             fetchActivities(); // Refresh activities
//         } catch (error) {
//             console.error("Error deleting activity:", error);
//             alert("Failed to delete activity.");
//         }
//     };

//     return (
//         <div className="p-5">
//             <h1 className="text-xl font-bold mb-5">Activity Management</h1>

//             {/* Form to add a new activity */}
//             <div className="mb-5 flex gap-3">
//                 <input
//                     className="w-full p-2 border rounded"
//                     type="text"
//                     placeholder="Activity Name"
//                     value={newActivity.name}
//                     onChange={(e) =>
//                         setNewActivity({ ...newActivity, name: e.target.value })
//                     }
//                 />
//                 <input
//                     className="w-full p-2 border rounded"
//                     type="text"
//                     placeholder="Activity Description"
//                     value={newActivity.description}
//                     onChange={(e) =>
//                         setNewActivity({ ...newActivity, description: e.target.value })
//                     }
//                 />
//                 <button
//                     onClick={handleAddActivity}
//                     className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center"
//                 >
//                     <Plus className="mr-2" />
//                     Add Activity
//                 </button>
//             </div>

//             {/* List of activities */}
//             {activities.length > 0 ? (
//                 <div className="grid grid-cols-1 gap-4">
//                     {activities.map((activity) => (
//                         <div
//                             key={activity.id}
//                             className="p-4 border rounded shadow-md flex justify-between items-center"
//                         >
//                             <div>
//                                 <h2 className="text-lg font-semibold">{activity.activityDescription}</h2>
//                                 <p className="text-gray-600">{activity.activityDescription}</p>
//                             </div>
//                             <button
//                                 onClick={() => handleDeleteActivity(activity.id)}
//                                 className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
//                             >
//                                 <Trash className="w-5 h-5" />
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//             ) : (
//                 <p className="text-gray-500">No activities found.</p>
//             )}
//         </div>
//     );
// }



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Plus, Trash, Check, EllipsisVertical } from "lucide-react";

// // Modal component for adding a new assignment
// function Modal({ isOpen, onClose, onSave }) {
//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');

//     const handleSubmit = () => {
//         if (!name || !description) {
//             alert("Please fill in both name and description.");
//             return;
//         }
//         onSave({ name, description, activityType: "Assignment" });
//         setName('');
//         setDescription('');
//         onClose();
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded shadow-md w-96">
//                 <h3 className="text-xl font-semibold mb-4">Add New Assignment</h3>
//                 <input
//                     className="w-full p-2 mb-3 border rounded"
//                     type="text"
//                     placeholder="Assignment Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <textarea
//                     className="w-full p-2 mb-3 border rounded"
//                     placeholder="Assignment Description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                 />
//                 <div className="flex justify-end gap-4">
//                     <button onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
//                     <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">Save</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default function Assignments() {
//     const [assignments, setAssignments] = useState([]);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     // Fetch assignments from backend
//     useEffect(() => {
//         fetchAssignments();
//     }, []);

//     const fetchAssignments = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/activities');
//             // Filter to show only activities of type 'assignment'
//             const assignments = response.data.filter(activity => activity.activityType === "Assignment");
//             setAssignments(assignments);
//         } catch (error) {
//             console.error('Error fetching assignments:', error);
//         }
//     };

//     // Add new assignment
//     const handleAddAssignment = async (newAssignment) => {
//         try {
//             await axios.post('http://localhost:8080/activities/add', newAssignment);
//             fetchAssignments(); // Refresh the list
//         } catch (error) {
//             console.error('Error adding assignment:', error);
//         }
//     };

//     // Delete an assignment
//     const handleDeleteAssignment = async (id) => {
//         try {
//             await axios.delete(`http://localhost:8080/activities/delete?id=${id}`);
//             fetchAssignments(); // Refresh the list
//         } catch (error) {
//             console.error('Error deleting assignment:', error);
//         }
//     };

//     return (
//         <div className="mx-5">
//             <div className="flex items-start mt-3">
//                 <button
//                     className="ml-2 w-64 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white"
//                     onClick={() => setIsModalOpen(true)}
//                 >
//                     <Plus className="w-5 mr-2" />
//                     <p>New Assignment</p>
//                 </button>
//             </div>

//             <div className="mt-5">
//                 <h1 className="text-left text-sm w-full p-3 bg-gray-200 font-semibold text-gray-700">Assignments</h1>
//                 <div className="bg-white w-full p-3">
//                     {assignments.map((assignment) => (
//                         <div
//                             key={assignment.id}
//                             className="flex justify-between items-center p-3 mb-2 bg-gray-100 rounded shadow-md"
//                         >
//                             <div>
//                                 <h4 className="font-bold">{assignment.name}</h4>
//                                 <p>{assignment.activityDescription}</p>
//                             </div>
//                             <div>
//                                 <button
//                                     onClick={() => handleDeleteAssignment(assignment.activityId)}
//                                     className="text-white bg-red-500 hover:bg-red-600 p-1 rounded-full"
//                                 >
//                                     <Trash className="w-5 h-5" />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                     {assignments.length === 0 && (
//                         <p className="text-gray-500">No assignments available.</p>
//                     )}
//                 </div>
//             </div>

//             {/* Modal for adding a new assignment */}
//             <Modal
//                 isOpen={isModalOpen}
//                 onClose={() => setIsModalOpen(false)}
//                 onSave={handleAddAssignment}
//             />
//         </div>
//     );
// }



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Plus, Trash, Check, EllipsisVertical } from "lucide-react";

// Modal component for adding a new assignment
function Modal({ isOpen, onClose, onSave }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = () => {
        if (!name || !description) {
            alert("Please fill in both name and description.");
            return;
        }
        onSave({ name, description, activityType: "Assignment" });
        setName('');
        setDescription('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-md w-96">
                <h3 className="text-xl font-semibold mb-4">Add New Assignment</h3>
                <input
                    className="w-full p-2 mb-3 border rounded"
                    type="text"
                    placeholder="Assignment Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    className="w-full p-2 mb-3 border rounded"
                    placeholder="Assignment Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className="flex justify-end gap-4">
                    <button onClick={onClose} className="bg-gray-300 p-2 rounded">Cancel</button>
                    <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">Save</button>
                </div>
            </div>
        </div>
    );
}

export default function Assignments({ courseId }) {
    const [assignments, setAssignments] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fetch assignments from backend when component mounts
    useEffect(() => {
        fetchAssignments();
    }, [courseId]);

    const fetchAssignments = async () => {
        try {
            // Fetch assignments from backend (filtered by courseId)
            const response = await axios.get(`http://localhost:8080/activities/${courseId}/assignments`);
            setAssignments(response.data);
        } catch (error) {
            console.error("Error fetching assignments:", error);
        }
    };

    // Add new assignment
    const handleAddAssignment = async (newAssignment) => {
        try {
            await axios.post('http://localhost:8080/activities/add', newAssignment);
            fetchAssignments(); // Refresh the list after adding a new assignment
        } catch (error) {
            console.error("Error adding assignment:", error);
        }
    };

    // Delete an assignment
    const handleDeleteAssignment = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/activities/delete?id=${id}`);
            fetchAssignments(); // Refresh the list after deleting an assignment
        } catch (error) {
            console.error("Error deleting assignment:", error);
        }
    };

    return (
        <div className="mx-5">
            <div className="flex items-start mt-3">
                <button
                    className="ml-2 w-64 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white"
                    onClick={() => setIsModalOpen(true)}
                >
                    <Plus className="w-5 mr-2" />
                    <p>New Assignment</p>
                </button>
            </div>

            <div className="mt-5">
                <h1 className="text-left text-sm w-full p-3 bg-gray-200 font-semibold text-gray-700">Assignments</h1>
                <div className="bg-white w-full p-3">
                    {assignments.map((assignment) => (
                        <div
                            key={assignment.id}
                            className="flex justify-between items-center p-3 mb-2 bg-gray-100 rounded shadow-md"
                        >
                            <div>
                                <h4 className="font-bold">{assignment.name}</h4>
                                <p>{assignment.activityDescription}</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => handleDeleteAssignment(assignment.id)}
                                    className="text-white bg-red-500 hover:bg-red-600 p-1 rounded-full"
                                >
                                    <Trash className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                    {assignments.length === 0 && (
                        <p className="text-gray-500">No assignments available.</p>
                    )}
                </div>
            </div>

            {/* Modal for adding a new assignment */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleAddAssignment}
            />
        </div>
    );
}
