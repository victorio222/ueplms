import React, { useState } from "react";
import { Delete, ListChecks, Plus, Trash, Check, EllipsisVertical } from "lucide-react";

export default function Discussions() {
  // Sample data for discussions
  const [discussions, setDiscussions] = useState([
    {
      id: 1,
      title: "Quiz 1: Web Development Basics",
      dueDate: "2024-01-01",
      points: 100,
      isRead: false,
    },
    {
      id: 2,
      title: "Assignment 2: JavaScript Functions",
      dueDate: "2024-02-01",
      points: 50,
      isRead: true,
    },
    {
      id: 3,
      title: "Final Project: Web Application",
      dueDate: "2024-03-01",
      points: 200,
      isRead: false,
    },
  ]);

  // Function to mark all as read
  const markAllAsRead = () => {
    const updatedDiscussions = discussions.map((discussion) => ({
      ...discussion,
      isRead: true,
    }));
    setDiscussions(updatedDiscussions);
  };

  // Function to delete a discussion
  const deleteDiscussion = (id) => {
    const updatedDiscussions = discussions.filter((discussion) => discussion.id !== id);
    setDiscussions(updatedDiscussions);
  };

  return (
    <div className="mx-5">
      <div className="flex items-start mt-3">
        <input
          className="w-full h-9 p-2 text-sm"
          type="text"
          name="searchAssignments"
          placeholder="Search for Discussions"
        />
        <button className="ml-2 w-40 h-9 rounded-sm p-2 text-sm flex items-center justify-center bg-blue-500 text-white">
          <Plus className="w-5 mr-2" />
          <p>New Discussion</p>
        </button>
        <button
          onClick={markAllAsRead}
          className="ml-2 w-52 h-9 text-gray-700 bg-gray-300 rounded-sm p-2 text-sm cursor-pointer flex items-center justify-center hover:bg-gray-400"
        >
          <ListChecks className="w-5 mr-2" />
          <p>Mark All as Read</p>
        </button>
      </div>

      <div className="flex items-center justify-center flex-col mt-2 border shadow-sm">
        <h1 className="text-left text-sm w-full p-3 bg-gray-200 font-semibold text-gray-700">Discussions</h1>
        <div className="bg-white w-full">
          {discussions.length === 0 ? (
            <div className="flex items-center justify-center px-4 py-3 border-b border-gray-200">
              <p className="my-5 font-semibold text-md text-gray-500">No discussions available.</p>
            </div>
          ) : (
            discussions.map((discussion) => (
              <div key={discussion.id} className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <div className="text-left">
                  <h2 className="text-lg font-semibold">{discussion.title}</h2>
                  <p className="text-xs text-gray-500">
                    Due: {discussion.dueDate} <span className="px-2">|</span> {discussion.points} pts.
                  </p>
                </div>
                <div className="flex items-center">
                  <Check
                    onClick={() => {
                      // Toggle read/unread state
                      const updatedDiscussions = discussions.map((item) =>
                        item.id === discussion.id ? { ...item, isRead: !item.isRead } : item
                      );
                      setDiscussions(updatedDiscussions);
                    }}
                    className={`w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center ${
                      discussion.isRead ? 'bg-green-500' : 'bg-blue-500'
                    } text-white`}
                  />
                  <EllipsisVertical className="ml-2 w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center bg-gray-400 text-white" />
                  <Trash
                    onClick={() => deleteDiscussion(discussion.id)}
                    className="ml-2 w-7 h-7 rounded-full cursor-pointer p-1 text-sm flex items-center justify-center bg-red-500 text-white"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
