import React, { useState, useEffect } from "react";
import axios from "axios";

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ username: "", email: "", password: "" });
  const [editingStudent, setEditingStudent] = useState(null);

  // Fetch all students
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8080/users");
      console.log("Fetched students:", response.data); // Log the fetched data for debugging
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // Add new student
  const addStudent = async () => {
    try {
      const response = await axios.post("http://localhost:8080/register", newStudent);
      if (response.data.status) {
        fetchStudents(); // Refresh the student list after adding
        setNewStudent({ username: "", email: "", password: "" }); // Reset form
      } else {
        alert("Error registering student");
      }
    } catch (error) {
      console.error("Error registering student:", error);
    }
  };

  // Update student
  const updateStudent = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/users/${editingStudent.username}`,
        editingStudent
      );
      if (response.data.status) {
        fetchStudents(); // Refresh student list after update
        setEditingStudent(null); // Reset editing state
      } else {
        alert("Error updating student");
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  // Delete student
  const deleteStudent = async (username) => {
    try {
      const response = await axios.delete(`http://localhost:8080/users/${username}`);
      if (response.data.status) {
        fetchStudents(); // Refresh student list after delete
      } else {
        alert("Error deleting student");
      }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">View Students</h1>

      {/* Add New Student */}
      <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add New Student</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={newStudent.username}
            onChange={(e) => setNewStudent({ ...newStudent, username: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={newStudent.password}
            onChange={(e) => setNewStudent({ ...newStudent, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addStudent}
            className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Student
          </button>
        </div>
      </div>

      {/* Edit Student */}
      {editingStudent && (
        <div className="mb-6 p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Edit Student</h2>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              value={editingStudent.username}
              onChange={(e) => setEditingStudent({ ...editingStudent, username: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={editingStudent.email}
              onChange={(e) => setEditingStudent({ ...editingStudent, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={editingStudent.password}
              onChange={(e) => setEditingStudent({ ...editingStudent, password: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={updateStudent}
              className="w-full p-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Update Student
            </button>
            <button
              onClick={() => setEditingStudent(null)}
              className="w-full p-3 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Student List */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Student List</h2>
        {students.length === 0 ? (
          <p>No students found</p>
        ) : (
          <table className="w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-lg font-semibold">Username</th>
                <th className="p-3 text-left text-lg font-semibold">Email</th>
                <th className="p-3 text-left text-lg font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.username} className="border-b hover:bg-gray-50">
                  <td className="p-3">{student.username}</td>
                  <td className="p-3">{student.email}</td>
                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => setEditingStudent(student)}
                      className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteStudent(student.username)}
                      className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewStudents;
