// import React, { useState } from 'react';
// import { Upload, CheckCircle, XCircle, FileText, Trash2 } from 'lucide-react';

// // Helper function to simulate file upload with progress
// const simulateUploadProgress = (file, onProgress, onComplete) => {
//     let progress = 0;
//     const interval = setInterval(() => {
//         progress += 10;
//         onProgress(progress);
//         if (progress >= 100) {
//             clearInterval(interval);
//             onComplete(file.name);
//         }
//     }, 1000); // Simulate progress every 1 second
// };

// export default function Modules() {
//     const [modules, setModules] = useState([]);
//     const [file, setFile] = useState(null);
//     const [uploadProgress, setUploadProgress] = useState(0);
//     const [isUploading, setIsUploading] = useState(false);

//     const [newModuleTitle, setNewModuleTitle] = useState('');
//     const [isPublished, setIsPublished] = useState(false);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = () => {
//         if (!file) return;

//         setIsUploading(true);
//         setUploadProgress(0);

//         // Simulate file upload with progress
//         simulateUploadProgress(file, (progress) => {
//             setUploadProgress(progress);
//         }, (fileName) => {
//             setIsUploading(false);
//             setModules([
//                 ...modules,
//                 {
//                     title: newModuleTitle || fileName,
//                     fileName: file.name,
//                     progress: 100,
//                     published: isPublished,
//                 },
//             ]);
//             setFile(null);
//             setNewModuleTitle('');
//             setUploadProgress(0);
//         });
//     };

//     const handlePublishToggle = (index) => {
//         const updatedModules = [...modules];
//         updatedModules[index].published = !updatedModules[index].published;
//         setModules(updatedModules);
//     };

//     const handleDeleteModule = (index) => {
//         const updatedModules = modules.filter((_, i) => i !== index);
//         setModules(updatedModules);
//     };

//     return (
//         <div className="ml-5 mr-5">
//             <div className="mt-10">
//                 <h2 className="text-xl font-semibold">Upload a New Module</h2>

//                 <div className="mt-4 flex flex-col">
//                     <input
//                         type="text"
//                         value={newModuleTitle}
//                         onChange={(e) => setNewModuleTitle(e.target.value)}
//                         placeholder="Module Title"
//                         className="p-2 border rounded w-64 mb-4"
//                     />
//                     <input
//                         type="file"
//                         onChange={handleFileChange}
//                         className="p-2 border rounded w-64 mb-4"
//                     />

//                     <button
//                         onClick={handleUpload}
//                         disabled={isUploading}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2"
//                     >
//                         {isUploading ? (
//                             <>
//                                 <Upload className="animate-spin w-5 h-5" />
//                                 <span>{`Uploading... ${uploadProgress}%`}</span>
//                             </>
//                         ) : (
//                             <>
//                                 <Upload className="w-5 h-5" />
//                                 <span>Upload Module</span>
//                             </>
//                         )}
//                     </button>
//                 </div>
//             </div>

//             <div className="mt-10">
//                 <h2 className="text-xl font-semibold">Uploaded Modules</h2>

//                 <div className="space-y-4 mt-4">
//                     {modules.map((module, index) => (
//                         <div key={index} className="flex justify-between items-center bg-white shadow-md p-4 rounded">
//                             <div>
//                                 <h3 className="font-semibold">{module.title}</h3>
//                                 <p className="text-sm text-gray-500">File: {module.fileName}</p>
//                                 <div className="text-sm text-gray-500">
//                                     {module.published ? (
//                                         <span className="text-green-500">Published</span>
//                                     ) : (
//                                         <span className="text-red-500">Unpublished</span>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="flex items-center space-x-4">
//                                 <button
//                                     onClick={() => handlePublishToggle(index)}
//                                     className={`${
//                                         module.published ? 'bg-red-500' : 'bg-green-500'
//                                     } text-white px-4 py-2 rounded flex items-center space-x-2`}
//                                 >
//                                     {module.published ? (
//                                         <>
//                                             <XCircle className="w-5 h-5" />
//                                             <span>Unpublish</span>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <CheckCircle className="w-5 h-5" />
//                                             <span>Publish</span>
//                                         </>
//                                     )}
//                                 </button>

//                                 <button
//                                     onClick={() => handleDeleteModule(index)}
//                                     className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2"
//                                 >
//                                     <Trash2 className="w-5 h-5" />
//                                     <span>Delete</span>
//                                 </button>

//                                 <div className="text-sm">
//                                     <progress value={module.progress} max={100} className="w-32 h-2" />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }



// import React, { useState, useEffect } from "react";
// import { Upload, CheckCircle, XCircle, FileText, Trash2 } from "lucide-react";
// import axios from "axios";

// // Helper function to simulate file upload with progress
// const simulateUploadProgress = (file, onProgress, onComplete) => {
//     let progress = 0;
//     const interval = setInterval(() => {
//         progress += 10;
//         onProgress(progress);
//         if (progress >= 100) {
//             clearInterval(interval);
//             onComplete(file.name);
//         }
//     }, 1000); // Simulate progress every 1 second
// };

// export default function Modules({ courseId }) {
//     const [modules, setModules] = useState([]);
//     const [file, setFile] = useState(null);
//     const [uploadProgress, setUploadProgress] = useState(0);
//     const [isUploading, setIsUploading] = useState(false);

//     const [newModuleTitle, setNewModuleTitle] = useState("");
//     const [isPublished, setIsPublished] = useState(false);

//     // Fetch modules for a specific course
//     useEffect(() => {
//         const fetchModules = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/courses/${courseId}/modules`);
//                 setModules(
//                     response.data.map((module) => ({
//                         title: module.title,
//                         fileName: module.fileName || "No File Name",
//                         progress: 100,
//                         published: module.published || false,
//                     }))
//                 );
//             } catch (error) {
//                 console.error("Error fetching modules:", error);
//             }
//         };

//         if (courseId) {
//             fetchModules();
//         }
//     }, [courseId]);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const handleUpload = () => {
//         if (!file) return;

//         setIsUploading(true);
//         setUploadProgress(0);

//         // Simulate file upload with progress
//         simulateUploadProgress(
//             file,
//             (progress) => {
//                 setUploadProgress(progress);
//             },
//             (fileName) => {
//                 setIsUploading(false);
//                 setModules([
//                     ...modules,
//                     {
//                         title: newModuleTitle || fileName,
//                         fileName: file.name,
//                         progress: 100,
//                         published: isPublished,
//                     },
//                 ]);
//                 setFile(null);
//                 setNewModuleTitle("");
//                 setUploadProgress(0);
//             }
//         );
//     };

//     const handlePublishToggle = (index) => {
//         const updatedModules = [...modules];
//         updatedModules[index].published = !updatedModules[index].published;
//         setModules(updatedModules);
//     };

//     const handleDeleteModule = (index) => {
//         const updatedModules = modules.filter((_, i) => i !== index);
//         setModules(updatedModules);
//     };

//     return (
//         <div className="ml-5 mr-5">
//             <div className="mt-10">
//                 <h2 className="text-xl font-semibold">Upload a New Module</h2>

//                 <div className="mt-4 flex flex-col">
//                     <input
//                         type="text"
//                         value={newModuleTitle}
//                         onChange={(e) => setNewModuleTitle(e.target.value)}
//                         placeholder="Module Title"
//                         className="p-2 border rounded w-64 mb-4"
//                     />
//                     <input
//                         type="file"
//                         onChange={handleFileChange}
//                         className="p-2 border rounded w-64 mb-4"
//                     />

//                     <button
//                         onClick={handleUpload}
//                         disabled={isUploading}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2"
//                     >
//                         {isUploading ? (
//                             <>
//                                 <Upload className="animate-spin w-5 h-5" />
//                                 <span>{`Uploading... ${uploadProgress}%`}</span>
//                             </>
//                         ) : (
//                             <>
//                                 <Upload className="w-5 h-5" />
//                                 <span>Upload Module</span>
//                             </>
//                         )}
//                     </button>
//                 </div>
//             </div>

//             <div className="mt-10">
//                 <h2 className="text-xl font-semibold">Uploaded Modules</h2>

//                 <div className="space-y-4 mt-4">
//                     {modules.map((module, index) => (
//                         <div
//                             key={index}
//                             className="flex justify-between items-center bg-white shadow-md p-4 rounded"
//                         >
//                             <div>
//                                 <h3 className="font-semibold">{module.title}</h3>
//                                 <p className="text-sm text-gray-500">File: {module.fileName}</p>
//                                 <div className="text-sm text-gray-500">
//                                     {module.published ? (
//                                         <span className="text-green-500">Published</span>
//                                     ) : (
//                                         <span className="text-red-500">Unpublished</span>
//                                     )}
//                                 </div>
//                             </div>

//                             <div className="flex items-center space-x-4">
//                                 <button
//                                     onClick={() => handlePublishToggle(index)}
//                                     className={`${
//                                         module.published ? "bg-red-500" : "bg-green-500"
//                                     } text-white px-4 py-2 rounded flex items-center space-x-2`}
//                                 >
//                                     {module.published ? (
//                                         <>
//                                             <XCircle className="w-5 h-5" />
//                                             <span>Unpublish</span>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <CheckCircle className="w-5 h-5" />
//                                             <span>Publish</span>
//                                         </>
//                                     )}
//                                 </button>

//                                 <button
//                                     onClick={() => handleDeleteModule(index)}
//                                     className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2"
//                                 >
//                                     <Trash2 className="w-5 h-5" />
//                                     <span>Delete</span>
//                                 </button>

//                                 <div className="text-sm">
//                                     <progress
//                                         value={module.progress}
//                                         max={100}
//                                         className="w-32 h-2"
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, XCircle, Trash2 } from 'lucide-react';

export default function Modules({courseId}) {
  const [modules, setModules] = useState([]);
  const [file, setFile] = useState(null);
  const [newModuleTitle, setNewModuleTitle] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Fetch all modules
  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      const response = await fetch(`http://localhost:8080/courses/${courseId}/modules`);
      const data = await response.json();
      setModules(data);
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Handle module title change
  const handleModuleTitleChange = (e) => {
    setNewModuleTitle(e.target.value);
  };

  // Handle upload of new module
  const handleUpload = async () => {
    if (!file || !newModuleTitle) {
      alert('Please provide both a title and a file.');
      return;
    }
  
    setIsUploading(true);
  
    const formData = new FormData();
    formData.append('moduleTitle', newModuleTitle);
    formData.append('file', file);
    formData.append('status', isPublished);
    formData.append('courseId', courseId); // Add the courseId
  
    // Log formData to check
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
  
    try {
      const response = await fetch('http://localhost:8080/modules/add', {
        method: 'POST',
        body: formData,
      });
  
      if (!response.ok) {
        const message = await response.text();
        alert(message);
        setIsUploading(false);
        return;
      }
  
      alert('Module added successfully');
      fetchModules(); // Refresh module list
      setIsUploading(false);
      setNewModuleTitle('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading module:', error);
      alert('Upload failed. Please try again.');
      setIsUploading(false);
    }
  };
  
  // Toggle publish status of a module
  const togglePublish = async (id, currentStatus) => {
    try {
      const response = await fetch(`http://localhost:8080/modules/${id}/status?status=${!currentStatus}`, {
        method: 'PATCH',
      });
      const message = await response.text();
      alert(message);
      fetchModules(); // Refresh module list
    } catch (error) {
      console.error('Error updating publish status:', error);
      alert('Error updating publish status. Please try again.');
    }
  };

  // Delete a module
  const deleteModule = async (id) => {
    if (window.confirm('Are you sure you want to delete this module?')) {
      try {
        const response = await fetch(`http://localhost:8080/modules/delete/${id}`, {
          method: 'DELETE',
        });
        const message = await response.text();
        alert(message);
        fetchModules(); // Refresh module list
      } catch (error) {
        console.error('Error deleting module:', error);
        alert('Error deleting module. Please try again.');
      }
    }
  };

  return (
    <div className="ml-5 mr-5">
      {/* Upload Module Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Upload a New Module</h2>
        <div className="mt-4 flex flex-col">
          <input
            type="text"
            value={newModuleTitle}
            onChange={handleModuleTitleChange}
            placeholder="Module Title"
            className="p-2 border rounded w-64 mb-4"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="p-2 border rounded w-64 mb-4"
          />
          <button
            onClick={handleUpload}
            disabled={isUploading}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2"
          >
            {isUploading ? (
              <>
                <Upload className="animate-spin w-5 h-5" />
                <span>Uploading...</span>
              </>
            ) : (
              <>
                <Upload className="w-5 h-5" />
                <span>Upload Module</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Display Uploaded Modules Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold">Uploaded Modules</h2>
        <div className="space-y-4 mt-4">
          {modules.map((module) => (
            <div key={module.moduleId} className="flex justify-between items-center bg-white shadow-md p-4 rounded">
              <div>
                <h3 className="font-semibold">{module.moduleTitle}</h3>
                <p className="text-sm text-gray-500">{module.status ? 'Published' : 'Unpublished'}</p>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => togglePublish(module.moduleId, module.status)}
                  className={`${
                    module.status ? 'bg-red-500' : 'bg-green-500'
                  } text-white px-4 py-2 rounded flex items-center space-x-2`}
                >
                  {module.status ? (
                    <>
                      <XCircle className="w-5 h-5" />
                      <span>Unpublish</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Publish</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => deleteModule(module.moduleId)}
                  className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
