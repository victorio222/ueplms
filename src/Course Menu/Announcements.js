// import React from "react";
// import { ListChecks, Plus } from "lucide-react";

// export default function Announcements() {
//     return (
//         <div className="mx-5">
//             <h1 className="text-left text-3xl">Announcements</h1>
//             <div className="flex items-start mt-3">
//                 <input className="w-full h-9 p-2 text-sm" type="text" name="searchAnnounucement" placeholder="Search"/>
//                 <button className=" ml-2 w-64 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white">
//                     <Plus className="w-5 mr-2" />
//                     <p>Add Announcement</p>
//                 </button>
//                 <button className="ml-2 w-52 h-9 text-gray-700 bg-gray-300 rounded-sm p-2 text-sm cursor-pointer flex items-center justify-center hover:bg-gray-400 ">
//                     <ListChecks className="w-5 mr-2" />
//                     <p>Mark All as Read</p>
//                 </button>
//             </div>
//             <div className="flex items-center justify-center flex-col mt-10">
//                 <svg
//                     height="200px"
//                     width="200px"
//                     version="1.1"
//                     id="Layer_1"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     viewBox="0 0 512 512"
//                     xmlSpace="preserve"
//                     fill="#000000"
//                 >
//                     <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
//                     <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
//                     <g id="SVGRepo_iconCarrier">
//                         <polygon
//                             style={{ fill: "#CCCCCC" }}
//                             points="305.665,420.858 272.141,454.347 247.22,413.297 229.907,384.802 272.508,356.555 287.868,386.352"
//                         ></polygon>
//                         <polygon
//                             style={{ fill: "#B3B3B3" }}
//                             points="287.868,386.352 247.22,413.297 229.907,384.802 272.508,356.555"
//                         ></polygon>
//                         <polygon
//                             style={{ fill: "#CCCCCC" }}
//                             points="55.15,373.465 114.507,433.343 84.521,463.329 24.904,403.712"
//                         ></polygon>
//                         <polygon
//                             style={{ fill: "#B3B3B3" }}
//                             points="55.15,373.465 24.904,403.712 35.781,414.589 65.98,384.391"
//                         ></polygon>
//                         <polygon
//                             style={{ fill: "#728eda" }}
//                             points="411.729,270.703 276.058,360.697 233.457,388.943 169.521,431.343 164.125,434.928 131.938,456.264 112.14,436.301 95.159,419.166 52.783,376.424 30.951,354.401 216.251,75.32 304.825,163.858"
//                         ></polygon>
//                         <polygon
//                             style={{ fill: "#728eda" }}
//                             points="127.202,451.363 110.221,434.228 67.845,391.485 46.012,369.463 243.772,102.954 319.887,178.92 411.724,270.707 411.729,270.703 304.825,163.858 216.251,75.32 30.951,354.401 52.783,376.424 95.159,419.166 112.14,436.301 131.938,456.264 132.013,456.215"
//                         ></polygon>
//                         <polygon
//                             style={{ fill: "#d67d6b" }}
//                             points="294.778,485.753 241.007,512 229.73,498.711 171.402,430.041 169.521,427.201 233.457,384.802 259.432,427.58 275.691,454.347"
//                         ></polygon>
//                         <g>
//                             <path
//                                 style={{ fill: "#e28065" }}
//                                 d="M294.778,485.753L241.007,512l-11.277-13.289c3.787-20.46,12.035-46.423,29.702-71.131 l16.259,26.767L294.778,485.753z"
//                             ></path>
//                             <path
//                                 style={{ fill: "#e28065" }}
//                                 d="M418.604,120.501c0,14.366-5.834,27.371-15.253,36.79l-45.145-45.121l-28.495-28.471 c9.431-9.419,22.436-15.242,36.826-15.242c20.649,0,38.494,12.011,46.908,29.43C416.758,104.726,418.604,112.395,418.604,120.501z"
//                             ></path>
//                         </g>
//                         <path
//                             style={{ fill: "#d67d6b" }}
//                             d="M383.104,85.024c10.14,0,19.6,2.902,27.603,7.912c-9.198-14.702-25.541-24.479-44.17-24.479 c-14.39,0-27.395,5.822-36.826,15.242l16.574,16.56C355.716,90.843,368.718,85.024,383.104,85.024z"
//                         ></path>
//                         <polygon
//                             style={{ fill: "#F2F2F2" }}
//                             points="487.096,238.634 440.271,302.784 415.232,277.756 409.954,272.478 257.562,120.169 214.476,77.095 184.159,46.801 248.332,0 313.049,64.694 330.882,82.515 330.894,82.515 404.534,156.108 404.534,156.131 467.098,218.648"
//                         ></polygon>
//                         <g>
//                             <polygon
//                                 style={{ fill: "#E6E6E6" }}
//                                 points="421.101,172.698 483.665,235.214 487.093,238.64 487.096,238.634 467.098,218.648 421.101,172.685"
//                             ></polygon>
//                             <polygon
//                                 style={{ fill: "#E6E6E6" }}
//                                 points="264.899,16.567 329.616,81.261 347.449,99.082 347.461,99.082 404.534,156.118 404.534,156.108 330.894,82.515 330.882,82.515 313.049,64.694 248.332,0 184.159,46.801 200.733,63.362"
//                             ></polygon>
//                         </g>
//                     </g>
//                 </svg>
//                 <p className="mt-5 font-semibold text-gray-500">No announcement available.</p>
//             </div>
//         </div>
//     );
// };




// import React, { useEffect, useState } from "react";
// import { ListChecks, Plus } from "lucide-react";
// import axios from "axios";

// export default function Announcements({ courseId }) {
//     const [announcements, setAnnouncements] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchAnnouncements = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/courses/${courseId}/announcements`);
//                 setAnnouncements(response.data);
//                 setLoading(false);
//             } catch (error) {
//                 console.error("Error fetching announcements:", error);
//                 setLoading(false);
//             }
//         };

//         if (courseId) {
//             fetchAnnouncements();
//         }
//     }, [courseId]);

//     if (loading) {
//         return <p>Loading announcements...</p>;
//     }

//     return (
//         <div className="mx-5">
//             <h1 className="text-left text-3xl">Announcements</h1>
//             <div className="flex items-start mt-3">
//                 <input
//                     className="w-full h-9 p-2 text-sm"
//                     type="text"
//                     name="searchAnnouncement"
//                     placeholder="Search"
//                 />
//                 <button className="ml-2 w-64 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white">
//                     <Plus className="w-5 mr-2" />
//                     <p>Add Announcement</p>
//                 </button>
//                 <button className="ml-2 w-52 h-9 text-gray-700 bg-gray-300 rounded-sm p-2 text-sm cursor-pointer flex items-center justify-center hover:bg-gray-400">
//                     <ListChecks className="w-5 mr-2" />
//                     <p>Mark All as Read</p>
//                 </button>
//             </div>
//             {announcements.length > 0 ? (
//                 <ul className="mt-5">
//                     {announcements.map((announcement) => (
//                         <li key={announcement.id} className="mb-4">
//                             <h3 className="font-semibold">{announcement.title}</h3>
//                             <p>{announcement.description}</p>
//                         </li>
//                     ))}
//                 </ul>
//             ) : (
//                 <div className="flex items-center justify-center flex-col mt-10">
//                     {/* No announcements SVG */}
//                     <p className="mt-5 font-semibold text-gray-500">No announcement available.</p>
//                 </div>
//             )}
//         </div>
//     );
// }




import React, { useEffect, useState } from "react";
import { ListChecks, Plus } from "lucide-react";
import axios from "axios";

export default function Announcements({ courseId }) {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnnouncements = async () => {
            try {
                // Ensure the endpoint matches your backend controller
                // const response = await axios.get(`http://localhost:8080/announcements/course/${courseId}`);
                const response = await axios.get(`http://localhost:8080/courses/${courseId}/announcements`);

                setAnnouncements(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching announcements:", error);
                setLoading(false);
            }
        };

        if (courseId) {
            fetchAnnouncements();
        }
    }, [courseId]);

    if (loading) {
        return <p>Loading announcements...</p>;
    }

    return (
        <div className="mx-5">
            <h1 className="text-left text-3xl">Announcements</h1>
            <div className="flex items-start mt-3">
                <input
                    className="w-full h-9 p-2 text-sm"
                    type="text"
                    name="searchAnnouncement"
                    placeholder="Search"
                />
                <button className="ml-2 w-64 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white">
                    <Plus className="w-5 mr-2" />
                    <p>Add Announcement</p>
                </button>
                <button className="ml-2 w-52 h-9 text-gray-700 bg-gray-300 rounded-sm p-2 text-sm cursor-pointer flex items-center justify-center hover:bg-gray-400">
                    <ListChecks className="w-5 mr-2" />
                    <p>Mark All as Read</p>
                </button>
            </div>
            <div className="mt-5 bg-gray-200">
                <div className="bg-white w-full">
                <h1 className="text-left text-sm w-full p-3 bg-gray-200 font-semibold text-gray-700">Announcement</h1>
                    {announcements.length > 0 ? (
                        <ul className="mt-2">
                            {announcements.map((announcement) => (
                                <div
                                    key={announcement.announcementId}
                                    className="flex justify-between items-center p-3 mb-2 border-t-2 border-b-2 border-gray-300 shadow-md"
                                >
                                    <div>
                                        <h4 className="font-bold">{announcement.announcementTitle}</h4>
                                        <p>{announcement.description}</p>
                                    </div>
                                    {/* <div>
                                <button
                                    onClick={() => handleDeleteAssignment(announcement.announcementId)}
                                    className="text-white bg-red-500 hover:bg-red-600 p-1 rounded-full"
                                >
                                    <Trash className="w-5 h-5" />
                                </button>
                            </div> */}
                                </div>
                            ))}
                        </ul>
                    ) : (

                        <div className="flex items-center justify-center flex-col mt-10">
                            <svg
                                height="200px"
                                width="200px"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                fill="#000000"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <polygon
                                        style={{ fill: "#CCCCCC" }}
                                        points="305.665,420.858 272.141,454.347 247.22,413.297 229.907,384.802 272.508,356.555 287.868,386.352"
                                    ></polygon>
                                    <polygon
                                        style={{ fill: "#B3B3B3" }}
                                        points="287.868,386.352 247.22,413.297 229.907,384.802 272.508,356.555"
                                    ></polygon>
                                    <polygon
                                        style={{ fill: "#CCCCCC" }}
                                        points="55.15,373.465 114.507,433.343 84.521,463.329 24.904,403.712"
                                    ></polygon>
                                    <polygon
                                        style={{ fill: "#B3B3B3" }}
                                        points="55.15,373.465 24.904,403.712 35.781,414.589 65.98,384.391"
                                    ></polygon>
                                    <polygon
                                        style={{ fill: "#728eda" }}
                                        points="411.729,270.703 276.058,360.697 233.457,388.943 169.521,431.343 164.125,434.928 131.938,456.264 112.14,436.301 95.159,419.166 52.783,376.424 30.951,354.401 216.251,75.32 304.825,163.858"
                                    ></polygon>
                                    <polygon
                                        style={{ fill: "#728eda" }}
                                        points="127.202,451.363 110.221,434.228 67.845,391.485 46.012,369.463 243.772,102.954 319.887,178.92 411.724,270.707 411.729,270.703 304.825,163.858 216.251,75.32 30.951,354.401 52.783,376.424 95.159,419.166 112.14,436.301 131.938,456.264 132.013,456.215"
                                    ></polygon>
                                    <polygon
                                        style={{ fill: "#d67d6b" }}
                                        points="294.778,485.753 241.007,512 229.73,498.711 171.402,430.041 169.521,427.201 233.457,384.802 259.432,427.58 275.691,454.347"
                                    ></polygon>
                                    <g>
                                        <path
                                            style={{ fill: "#e28065" }}
                                            d="M294.778,485.753L241.007,512l-11.277-13.289c3.787-20.46,12.035-46.423,29.702-71.131 l16.259,26.767L294.778,485.753z"
                                        ></path>
                                        <path
                                            style={{ fill: "#e28065" }}
                                            d="M418.604,120.501c0,14.366-5.834,27.371-15.253,36.79l-45.145-45.121l-28.495-28.471 c9.431-9.419,22.436-15.242,36.826-15.242c20.649,0,38.494,12.011,46.908,29.43C416.758,104.726,418.604,112.395,418.604,120.501z"
                                        ></path>
                                    </g>
                                    <path
                                        style={{ fill: "#d67d6b" }}
                                        d="M383.104,85.024c10.14,0,19.6,2.902,27.603,7.912c-9.198-14.702-25.541-24.479-44.17-24.479 c-14.39,0-27.395,5.822-36.826,15.242l16.574,16.56C355.716,90.843,368.718,85.024,383.104,85.024z"
                                    ></path>
                                    <polygon
                                        style={{ fill: "#F2F2F2" }}
                                        points="487.096,238.634 440.271,302.784 415.232,277.756 409.954,272.478 257.562,120.169 214.476,77.095 184.159,46.801 248.332,0 313.049,64.694 330.882,82.515 330.894,82.515 404.534,156.108 404.534,156.131 467.098,218.648"
                                    ></polygon>
                                    <g>
                                        <polygon
                                            style={{ fill: "#E6E6E6" }}
                                            points="421.101,172.698 483.665,235.214 487.093,238.64 487.096,238.634 467.098,218.648 421.101,172.685"
                                        ></polygon>
                                        <polygon
                                            style={{ fill: "#E6E6E6" }}
                                            points="264.899,16.567 329.616,81.261 347.449,99.082 347.461,99.082 404.534,156.118 404.534,156.108 330.894,82.515 330.882,82.515 313.049,64.694 248.332,0 184.159,46.801 200.733,63.362"
                                        ></polygon>
                                    </g>
                                </g>
                            </svg>
                            <p className="mt-5 font-semibold text-gray-500">No announcement available.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
