// import React, { useState, useEffect } from 'react';
// import { Upload, CheckCircle, XCircle, Trash2 } from 'lucide-react';

// export default function StudentModules({courseId}) {
//   const [modules, setModules] = useState([]);
//   const [file, setFile] = useState(null);
//   const [newModuleTitle, setNewModuleTitle] = useState('');
//   const [isPublished, setIsPublished] = useState(false);
//   const [isUploading, setIsUploading] = useState(false);

//   // Fetch all modules
//   useEffect(() => {
//     fetchModules();
//   }, []);

//   const fetchModules = async () => {
//     try {
//       const response = await fetch(`http://localhost:8080/courses/${courseId}/published`);
//       const data = await response.json();
//       setModules(data);
//     } catch (error) {
//       console.error('Error fetching modules:', error);
//     }
//   };

//   // Handle file change
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // Handle module title change
//   const handleModuleTitleChange = (e) => {
//     setNewModuleTitle(e.target.value);
//   };

//   // Handle upload of new module
//   const handleUpload = async () => {
//     if (!file || !newModuleTitle) {
//       alert('Please provide both a title and a file.');
//       return;
//     }
  
//     setIsUploading(true);
  
//     const formData = new FormData();
//     formData.append('moduleTitle', newModuleTitle);
//     formData.append('file', file);
//     formData.append('status', isPublished);
//     formData.append('courseId', courseId); // Add the courseId
  
//     // Log formData to check
//     for (let pair of formData.entries()) {
//       console.log(pair[0] + ': ' + pair[1]);
//     }
  
//     try {
//       const response = await fetch('http://localhost:8080/modules/add', {
//         method: 'POST',
//         body: formData,
//       });
  
//       if (!response.ok) {
//         const message = await response.text();
//         alert(message);
//         setIsUploading(false);
//         return;
//       }
  
//       alert('Module added successfully');
//       fetchModules(); // Refresh module list
//       setIsUploading(false);
//       setNewModuleTitle('');
//       setFile(null);
//     } catch (error) {
//       console.error('Error uploading module:', error);
//       alert('Upload failed. Please try again.');
//       setIsUploading(false);
//     }
//   };
  
//   // Toggle publish status of a module
//   const togglePublish = async (id, currentStatus) => {
//     try {
//       const response = await fetch(`http://localhost:8080/modules/${id}/status?status=${!currentStatus}`, {
//         method: 'PATCH',
//       });
//       const message = await response.text();
//       alert(message);
//       fetchModules(); // Refresh module list
//     } catch (error) {
//       console.error('Error updating publish status:', error);
//       alert('Error updating publish status. Please try again.');
//     }
//   };

//   // Delete a module
//   const deleteModule = async (id) => {
//     if (window.confirm('Are you sure you want to delete this module?')) {
//       try {
//         const response = await fetch(`http://localhost:8080/modules/delete/${id}`, {
//           method: 'DELETE',
//         });
//         const message = await response.text();
//         alert(message);
//         fetchModules(); // Refresh module list
//       } catch (error) {
//         console.error('Error deleting module:', error);
//         alert('Error deleting module. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="ml-5 mr-5">
//       {/* Upload Module Section */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold">Upload a New Module</h2>
//         <div className="mt-4 flex flex-col">
//           <input
//             type="text"
//             value={newModuleTitle}
//             onChange={handleModuleTitleChange}
//             placeholder="Module Title"
//             className="p-2 border rounded w-64 mb-4"
//           />
//           <input
//             type="file"
//             onChange={handleFileChange}
//             className="p-2 border rounded w-64 mb-4"
//           />
//           <button
//             onClick={handleUpload}
//             disabled={isUploading}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2"
//           >
//             {isUploading ? (
//               <>
//                 <Upload className="animate-spin w-5 h-5" />
//                 <span>Uploading...</span>
//               </>
//             ) : (
//               <>
//                 <Upload className="w-5 h-5" />
//                 <span>Upload Module</span>
//               </>
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Display Uploaded Modules Section */}
//       <div className="mt-10">
//         <h2 className="text-xl font-semibold">Uploaded Modules</h2>
//         <div className="space-y-4 mt-4">
//           {modules.map((module) => (
//             <div key={module.moduleId} className="flex justify-between items-center bg-white shadow-md p-4 rounded">
//               <div>
//                 <h3 className="font-semibold">{module.moduleTitle}</h3>
//                 <p className="text-sm text-gray-500">{module.status ? 'Published' : 'Unpublished'}</p>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <button
//                   onClick={() => togglePublish(module.moduleId, module.status)}
//                   className={`${
//                     module.status ? 'bg-red-500' : 'bg-green-500'
//                   } text-white px-4 py-2 rounded flex items-center space-x-2`}
//                 >
//                   {module.status ? (
//                     <>
//                       <XCircle className="w-5 h-5" />
//                       <span>Unpublish</span>
//                     </>
//                   ) : (
//                     <>
//                       <CheckCircle className="w-5 h-5" />
//                       <span>Publish</span>
//                     </>
//                   )}
//                 </button>
//                 <button
//                   onClick={() => deleteModule(module.moduleId)}
//                   className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2"
//                 >
//                   <Trash2 className="w-5 h-5" />
//                   <span>Delete</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useState, useEffect } from 'react';
import { Upload, CheckCircle, XCircle, Trash2 } from 'lucide-react';

export default function StudentModules({ courseId }) {
  const [modules, setModules] = useState([]);
  const [file, setFile] = useState(null);
  const [newModuleTitle, setNewModuleTitle] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch all modules
  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8080/courses/${courseId}/published`);
      const data = await response.json();
      if (Array.isArray(data)) {
        setModules(data);
      } else {
        console.error('Fetched data is not an array:', data);
        setModules([]);
      }
    } catch (error) {
      console.error('Error fetching modules:', error);
      setModules([]);
    } finally {
      setLoading(false);
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
    formData.append('courseId', courseId);

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
      setNewModuleTitle('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading module:', error);
      alert('Upload failed. Please try again.');
    } finally {
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
        {loading ? (
          <p>Loading modules...</p>
        ) : Array.isArray(modules) && modules.length > 0 ? (
          <div className="space-y-4 mt-4">
            {modules.map((module) => (
              <div
                key={module.moduleId}
                className="flex justify-between items-center bg-white shadow-md p-4 rounded"
              >
                <div>
                  <h3 className="font-semibold">{module.moduleTitle}</h3>
                  <p className="text-sm text-gray-500">
                    {module.status ? 'Published' : 'Unpublished'}
                  </p>
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
        ) : (
          <p>No modules available.</p>
        )}
      </div>
    </div>
  );
}
