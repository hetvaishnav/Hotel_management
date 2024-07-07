// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import toast from 'react-hot-toast';
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'admin', // Default role
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.role === "admin") {
        const response = await axios.post("http://localhost:3500/api/admin/login", formData);
        console.log(formData)
        console.log(response.data.status)
        if (response.data.status === "failed") {
          toast.error(response.data.message)


        }
        if (response.data.status === "success") {
          toast.success("Login succesfull")
          navigate("/admin")
        }
      }else if(formData.role === "student"){
        const response = await axios.post("http://localhost:3500/api/student/login", formData);
        console.log(formData)
        console.log(response.data.status)
        if (response.data.status === "failed") {
          toast.error(response.data.message)
        }
        if (response.data.status === "success") {
          toast.success("Login succesfull")
          navigate("/student")
        }

      }else if(formData.role === "warden"){
        const response = await axios.post("http://localhost:3500/api/warden/login", formData);
        if (response.data.status === "failed") {
          toast.error(response.data.message)
        }
        if (response.data.status === "success") {
          toast.success("Login succesfull")
          navigate("/")
        }

      }



    } catch (error) {

      console.error('Login failed', error.response.data);

    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-5">Role</label>
            <div className="flex">
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={formData.role === 'admin'}
                  onChange={handleInputChange}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Admin</span>
              </label>
              <label className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === 'student'}
                  onChange={handleInputChange}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Student</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="warden"
                  checked={formData.role === 'warden'}
                  onChange={handleInputChange}
                  className="form-radio h-5 w-5 text-blue-600"
                />
                <span className="ml-2">Warden</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
