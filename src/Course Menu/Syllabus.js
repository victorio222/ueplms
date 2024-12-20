import React, { useState } from 'react';
import { FileText, Download, BookOpen, Folder } from 'lucide-react';

// Sample syllabus data
const syllabusData = [
  {
    title: "Introduction to the Course",
    description: "Overview of the course structure, objectives, and expectations.",
    link: "https://example.com/intro-pdf", // Replace with actual link
    date: "2024-01-01",
  },
  {
    title: "Module 1: Basics of JavaScript",
    description: "Introduction to variables, functions, and control flow in JavaScript.",
    link: "https://example.com/module1-pdf", // Replace with actual link
    date: "2024-01-15",
  },
  {
    title: "Module 2: Advanced JavaScript",
    description: "Exploring ES6 features, promises, and async/await.",
    link: "https://example.com/module2-pdf", // Replace with actual link
    date: "2024-02-01",
  },
];

export default function Syllabus() {
  const [downloadInProgress, setDownloadInProgress] = useState(false);

  const handleDownload = (link) => {
    setDownloadInProgress(true);
    setTimeout(() => {
      window.open(link, "_blank");
      setDownloadInProgress(false);
    }, 1000); // Simulate download delay
  };

  return (
    <div className="ml-5 mr-5">
      <h1 className="text-left text-3xl">Course Syllabus for WS101</h1>

      <div className="flex bg-blue-900 mt-10 p-4">
        <BookOpen className="w-8 ml-4 mr-3 text-white" />
        <p className="text-left text-sm bg-white m-0.5 p-4">
          <strong>Syllabus Overview</strong>
          The syllabus below outlines the key modules, topics, and important dates for the course. You can also download PDF resources for each module.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Syllabus Modules</h2>

        <div className="space-y-4 mt-4">
          {syllabusData.map((module, index) => (
            <div key={index} className="flex justify-between items-center bg-white shadow-md p-4 rounded">
              <div className="flex items-center space-x-4">
                <Folder className="w-6 h-6 text-gray-700" />
                <div>
                  <h3 className="font-semibold">{module.title}</h3>
                  <p className="text-sm text-gray-500">{module.description}</p>
                  <p className="text-xs text-gray-400 mt-1">Date: {module.date}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleDownload(module.link)}
                  className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2"
                  disabled={downloadInProgress}
                >
                  {downloadInProgress ? (
                    <>
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
