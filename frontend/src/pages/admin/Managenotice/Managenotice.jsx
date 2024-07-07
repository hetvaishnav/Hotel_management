import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../../../components/sidenavbar/Sidebar';
import toast from "react-hot-toast";
const ManageNotices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const response = await axios.get('http://localhost:3500/api/notice/allnotices');
      setNotices(response.data);
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const handleUpdate = (id) => {
    // Handle update action
    console.log('Update notice with ID:', id);
  };

  const handleDelete = async (id) => {
    // Handle delete action
    try {
     const notedel= await axios.delete(`http://localhost:3500/api/notice/delete/${id}`);
      fetchNotices(); // Fetch notices again after deletion
      if(notedel.data.status==="pass"){
        toast.success("Notice deleted successfully")
      }
      console.log('Notice deleted successfully');
    } catch (error) {
      console.error('Error deleting notice:', error);
    }
  };

  return (<>
  <div className="flex min-h-screen">
  <Sidebar />
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Notices</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border border-gray-300">index</th>
            <th className="py-2 px-4 border border-gray-300">Title</th>
            <th className="py-2 px-4 border border-gray-300">Content</th>
            <th className="py-2 px-4 border border-gray-300">Category</th>
            <th className="py-2 px-4 border border-gray-300">Created At</th>
            <th className="py-2 px-4 border border-gray-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice,index) => (
            <tr key={notice._id}>
                 <td className="py-2 px-4 border border-gray-300">{index+1}</td>
              <td className="py-2 px-4 border border-gray-300">{notice.title}</td>
              <td className="py-2 px-4 border border-gray-300">{notice.content}</td>
              <td className="py-2 px-4 border border-gray-300">{notice.category}</td>
              <td className="py-2 px-4 border border-gray-300">{new Date(notice.createdAt).toLocaleDateString()}</td>
              <td className="py-2 px-4 border border-gray-300">
                <button onClick={() => handleDelete(notice._id)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export default ManageNotices;
