// import React from "react";
// import { Delete, ListChecks, Plus, Trash, Check, EllipsisVertical } from "lucide-react";

// export default function Quizzes() {
//     return (
//         <div className="mx-5">
//             <div className="flex items-start mt-3">
//                 <input className="w-full h-9 p-2 text-sm" type="text" name="searchAssignments" placeholder="Search for Quiz"/>
//                 <button className=" ml-2 w-40 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white">
//                     <Plus className="w-5 mr-2" />
//                     <p>New Quiz</p>
//                 </button>
//                 <button className="ml-2 w-52 h-9 text-gray-700 bg-gray-300 rounded-sm p-2 text-sm cursor-pointer flex items-center justify-center hover:bg-gray-400 ">
//                     <ListChecks className="w-5 mr-2" />
//                     <p>Mark All as Read</p>
//                 </button>
//             </div>
//             <div className="flex items-center justify-center flex-col mt-2 border shadow-sm">
//             <h1 className="text-left text-sm w-full p-3 bg-gray-200 font-semibold text-gray-700">Quizzes</h1>
//                 <div className="bg-white w-full">
//                     <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
//                         <div className="text-left">
//                             <h2 className="text-lg font-semibold">Quiz 1</h2>
//                             <p className="text-xs text-gray-500">Due: 2022-01-01 <span className="px-2">|</span> 100 pts.</p>
//                         </div>
//                         <div className="flex items-center">
//                             <Check className="w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center bg-blue-500 text-white" />
//                             <EllipsisVertical className="ml-2 w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center bg-gray-400 text-white" />
//                         </div>
//                     </div>
//                     <div className="flex items-center justify-center px-4 py-3 border-b border-gray-200">
//                         <p className="my-5 font-semibold text-md text-gray-500">No quizzes available.</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


import React, { useState, useEffect } from "react";
import { Delete, ListChecks, Plus, Trash, Check, EllipsisVertical } from "lucide-react";
import axios from "axios";

export default function Quizzes({ courseId }) {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch quizzes from the backend using courseId
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/activities/${courseId}/quizzes`);
                setQuizzes(response.data);
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            } finally {
                setLoading(false);
            }
        };

        if (courseId) {
            fetchQuizzes();
        }
    }, [courseId]);

    return (
        <div className="mx-5">
            <div className="flex items-start mt-3">
                <input className="w-full h-9 p-2 text-sm" type="text" name="searchAssignments" placeholder="Search for Quiz"/>
                <button className="ml-2 w-40 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white">
                    <Plus className="w-5 mr-2" />
                    <p>New Quiz</p>
                </button>
                <button className="ml-2 w-52 h-9 text-gray-700 bg-gray-300 rounded-sm p-2 text-sm cursor-pointer flex items-center justify-center hover:bg-gray-400">
                    <ListChecks className="w-5 mr-2" />
                    <p>Mark All as Read</p>
                </button>
            </div>

            <div className="flex items-center justify-center flex-col mt-2 border shadow-sm">
                <h1 className="text-left text-sm w-full p-3 bg-gray-200 font-semibold text-gray-700">Quizzes</h1>
                <div className="bg-white w-full">
                    {loading ? (
                        <div className="flex items-center justify-center px-4 py-3 border-b border-gray-200">
                            <p className="my-5 font-semibold text-md text-gray-500">Loading quizzes...</p>
                        </div>
                    ) : quizzes.length === 0 ? (
                        <div className="flex items-center justify-center px-4 py-3 border-b border-gray-200">
                            <p className="my-5 font-semibold text-md text-gray-500">No quizzes available.</p>
                        </div>
                    ) : (
                        quizzes.map((quiz) => (
                            <div
                                key={quiz.id}
                                className="flex items-center justify-between px-4 py-3 border-b border-gray-200"
                            >
                                <div className="text-left">
                                    <h2 className="text-lg font-semibold">{quiz.activityDescription}</h2>
                                    <p className="text-xs text-gray-500">Due: {quiz.dueDate} <span className="px-2">|</span> {quiz.points} pts.</p>
                                </div>
                                <div className="flex items-center">
                                    <Check className="w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center bg-blue-500 text-white" />
                                    <EllipsisVertical className="ml-2 w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center bg-gray-400 text-white" />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
