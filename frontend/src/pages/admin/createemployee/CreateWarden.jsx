import React, { useState } from 'react';
import axios from 'axios';
import { AiOutlineUser, AiOutlineMobile, AiOutlineMail, AiOutlineHome, AiOutlineDollar } from 'react-icons/ai';
import { RiBankFill } from 'react-icons/ri';
import { HiOutlineKey } from 'react-icons/hi'; // Import password icon
import toast from "react-hot-toast";
import Sidebar from '../../../components/sidenavbar/Sidebar';

const CreateWarden = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileno: '',
    email: '',
    address: '',
    emptype: '',
    acno: '',
    salary: '',
    password: '' // Adding password field to the form data
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3500/api/warden/register", formData);
      if (response.data.status === 'pass') {
        console.log('Employee data submitted successfully');
        toast.success("created succesfull");
        setErrorMessage('');
        setFormData({
          name: '',
          mobileno: '',
          email: '',
          address: '',
          acno: '',
          salary: '',
          password: '' // Clear password field after successful submission
        });
      } else {
        setErrorMessage(response.data.message);
        toast.error("failed to create")
      }
    } catch (error) {
      console.error('Error submitting employee data:', error);
    }
  };

  return (
    <>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="container mx-auto bg-gray-100 py-8 px-4">
          <h1 className='font-bold text-center my-3'>Create Warden</h1>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
            {/* Name field */}
            <div className="mb-4 flex items-center">
              <label htmlFor="name" className="text-gray-700 mr-2">
                <AiOutlineUser />
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Mobile Number field */}
            <div className="mb-4 flex items-center">
              <label htmlFor="mobileno" className="text-gray-700 mr-2">
                <AiOutlineMobile />
              </label>
              <input
                type="text"
                id="mobileno"
                name="mobileno"
                value={formData.mobileno}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Email field */}
            <div className="mb-4 flex items-center">
              <label htmlFor="email" className="text-gray-700 mr-2">
                <AiOutlineMail />
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Address field */}
            <div className="mb-4 flex items-center">
              <label htmlFor="address" className="text-gray-700 mr-2">
                <AiOutlineHome />
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            {/* Account Number field */}
            <div className="mb-4 flex items-center">
              <label htmlFor="acno" className="text-gray-700 mr-2">
                <RiBankFill />
              </label>
              <input
                type="text"
                id="acno"
                name="acno"
                value={formData.acno}
                onChange={handleChange}
                placeholder="Account Number"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Salary field */}
            <div className="mb-4 flex items-center">
              <label htmlFor="salary" className="text-gray-700 mr-2">
                <AiOutlineDollar />
              </label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="Salary"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Password field */}
            <div className="mb-4 flex items-center">
              <label htmlFor="password" className="text-gray-700 mr-2">
                <HiOutlineKey />
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default  CreateWarden;
