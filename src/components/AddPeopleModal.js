import React, { useState } from 'react';

function AddPeopleModal({ isOpen, onClose, onAdd }) {
  const [name, setName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [role, setRole] = useState('Student');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && studentId) {
      onAdd({ name, studentId, role });
      setName('');
      setStudentId('');
      setRole('Student');
      onClose(); // Close the modal after adding
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg w-96">
          <h2 className="text-xl font-bold mb-4">Add New Person</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                Student ID
              </label>
              <input
                type="text"
                id="studentId"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full mt-2 p-2 border border-gray-300 rounded-md"
              >
                <option value="Student">Student</option>
                <option value="Instructor">Instructor</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-300 rounded-lg text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm"
              >
                Add Person
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default AddPeopleModal; 

