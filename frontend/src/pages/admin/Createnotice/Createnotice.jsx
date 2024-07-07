import React, { useState } from 'react';
import axios from 'axios';
 import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/sidenavbar/Sidebar';
const AddNoticeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3500/api/notice/addnotices', formData);
      if(response.data.status==="pass"){
        console.log(response.data.message); // Handle success
        toast.success(response.data.message)
        navigate("/admin")
      }
     
    } catch (error) {
      console.error('Error adding notice:', error.response.data.error);
    }
  };

  return (
    <>
    <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Notice</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700">Content</label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            >
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="Event">Event</option>
              <option value="Emergency">Emergency</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default AddNoticeForm;
