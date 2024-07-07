import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Managestudent = () => {
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobileno: '',
    email: '',
    address: '',
    collegeName: '',
    department: '',
    year: '',
    fee: '',
    roomNo: '',
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:3500/api/student/getstudents');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/api/student/students/${id}`);
      setStudents(students.filter(student => student._id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleEdit = (student) => {
    setEditMode(student._id);
    setFormData(student);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:3500/api/student/ustudents/${editMode}`, formData);
      setStudents(students.map(student => (student._id === editMode ? response.data : student)));
      setEditMode(null);
      setFormData({
        name: '',
        mobileno: '',
        email: '',
        address: '',
        collegeName: '',
        department: '',
        year: '',
        fee: '',
        roomNo: '',
      });
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Student List</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Name', 'Mobile', 'Email', 'Address', 'College', 'Department', 'Year', 'Fee', 'Room', 'Actions'].map(header => (
              <th key={header} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map(student => (
            <tr key={student._id}>
              <td className="px-6 py-4 whitespace-nowrap">{student.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.mobileno}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.collegeName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.department}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.year}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.fee}</td>
              <td className="px-6 py-4 whitespace-nowrap">{student.roomNo}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="text-blue-600 hover:text-blue-900 mr-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="text-red-600 hover:text-red-900"
                  onClick={() => handleDelete(student._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editMode && (
        <form onSubmit={handleUpdate} className="mt-6 space-y-4">
          <h2 className="text-xl font-bold">Edit Student</h2>
          {Object.keys(formData).map(key => (
            key !== '_id' && (
              <div key={key}>
                <label className="block text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                <input
                  type="text"
                  name={key}
                  value={formData[key]}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            )
          ))}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default Managestudent;
