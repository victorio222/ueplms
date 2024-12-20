import React from 'react';
import { CheckCircle, XCircle, FileText } from 'lucide-react';

// Sample grade data
const gradeData = [
  {
    assignment: "Assignment 1: Introduction to Web Development",
    grade: "A",
    percentage: 95,
    feedback: "Great job! Keep up the good work.",
    date: "2024-01-10",
  },
  {
    assignment: "Module 1 Quiz: JavaScript Basics",
    grade: "B+",
    percentage: 88,
    feedback: "Good work, but review the concepts on closures.",
    date: "2024-01-15",
  },
  {
    assignment: "Final Project: Web Application",
    grade: "A-",
    percentage: 90,
    feedback: "Well done! Excellent use of JavaScript and CSS.",
    date: "2024-02-01",
  },
];

export default function Grades() {
  return (
    <div className="ml-5 mr-5">
      <h1 className="text-left text-3xl">Recent Activity in WS101</h1>
      
      <div className="flex bg-blue-900 mt-10 p-4">
        <FileText className="w-8 ml-4 mr-3 text-white" />
        <p className="text-left text-sm bg-white m-0.5 p-4">
          <strong>Grades Overview</strong>
          View your most recent grades for assignments, quizzes, and projects. As you progress in the course, your grades will be updated here.
        </p>
      </div>

      <div className="mt-10">
        <h2 className="text-xl font-semibold">Grades</h2>

        <div className="space-y-4 mt-4">
          {gradeData.map((grade, index) => (
            <div key={index} className="flex justify-between items-center bg-white shadow-md p-4 rounded">
              <div className="flex items-center space-x-4">
                <div>
                  <h3 className="font-semibold">{grade.assignment}</h3>
                  <p className="text-sm text-gray-500">{`Date: ${grade.date}`}</p>
                  <p className="text-xs text-gray-400 mt-1">Feedback: {grade.feedback}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className={`font-semibold ${grade.grade === "A" || grade.grade === "A-" ? 'text-green-500' : grade.grade === "B+" ? 'text-yellow-500' : 'text-red-500'}`}>
                  {grade.grade} ({grade.percentage}%)
                </span>

                {grade.grade === "A" || grade.grade === "A-" ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
