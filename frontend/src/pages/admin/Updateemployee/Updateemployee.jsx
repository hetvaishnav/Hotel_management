import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineUser, AiOutlineMobile, AiOutlineMail, AiOutlineHome, AiOutlineDollar } from 'react-icons/ai';
import { RiBankFill } from 'react-icons/ri';
import Sidebar from "../../../components/sidenavbar/Sidebar";
import { useNavigate } from "react-router-dom";
const Updateemployee = () => {
    // const {employeeId} = useParams();
    const { id } = useParams();
    console.log("id" + id)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        mobileno: "",
        email: "",
        address: "",
        emptype: "",
        acno: "",
        salary: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        // Fetch employee data using employeeId
        const fetchEmployeeData = async () => {
            try {
                const response = await axios.get(`http://localhost:3500/api/employee/manageemployee/${id}`);
                const employeeData = response.data;
                // Set form data with employee data
                setFormData(employeeData);
            } catch (error) {
                console.error("Error fetching employee data:", error);
                setErrorMessage("Error fetching employee data");
            }
        };

        fetchEmployeeData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:3500/api/employee/update/${id}`, formData);
            const responseData = response.data;
            if (responseData.status === "pass") {
                // Handle success, maybe redirect or show a success message
                toast.success("Employee updated successfully");
                navigate("/manageemployee")
                console.log("Employee updated successfully");
            } else {
                setErrorMessage(responseData.message);
            }
        } catch (error) {
            console.error("Error updating employee:", error);
            setErrorMessage("Error updating employee");
        }
    };

    return (
        <>
        <div className="flex min-h-screen">
            <Sidebar />
            <div className="container mx-auto bg-gray-100 py-8 px-4">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
                    <div className="mb-4 flex items-center">
                        <label htmlFor="name" className="text-gray-700 mr-2">
                            <AiOutlineUser className="w-6 h-6" />
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
                    <div className="mb-4 flex items-center">
                        <label htmlFor="mobileno" className="text-gray-700 mr-2">
                            <AiOutlineMobile className="w-6 h-6" />
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
                    <div className="mb-4 flex items-center">
                        <label htmlFor="email" className="text-gray-700 mr-2">
                            <AiOutlineMail className="w-6 h-6" />
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
                    <div className="mb-4 flex items-center">
                        <label htmlFor="address" className="text-gray-700 mr-2">
                            <AiOutlineHome className="w-6 h-6" />
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
                    <div className="mb-4 flex items-center">
                        <label htmlFor="emptype" className="text-gray-700 mr-2">
                            <AiOutlineDollar className="w-6 h-6" />
                        </label>
                        <input
                            type="text"
                            id="emptype"
                            name="emptype"
                            value={formData.emptype}
                            onChange={handleChange}
                            placeholder="Employee Type"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            required
                        />
                    </div>
                    <div className="mb-4 flex items-center">
                        <label htmlFor="acno" className="text-gray-700 mr-2">
                            <RiBankFill className="w-6 h-6" />
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
                    <div className="mb-4 flex items-center">
                        <label htmlFor="salary" className="text-gray-700 mr-2">
                            <AiOutlineDollar className="w-6 h-6" />
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

export default Updateemployee;
