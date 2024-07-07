import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../../components/sidenavbar/Sidebar";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaUserTie } from 'react-icons/fa';
const Managewarden = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/warden/allwarden");
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
     const empdelete= await axios.delete(`http://localhost:3500/api/warden/delete/${id}`);
     console.log(empdelete.data.status)
      // Assuming you want to update the table after deletion
      if(empdelete.data.status==="pass"){
        toast.success("Deleted succesfully")
      }
        toast.error(empdelete.data.message)
      fetchData();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  return (
    <>
     <div className="flex min-h-screen">
            <Sidebar />
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold m-4 mt-3">Employee List</h1>
      <table className="table-auto w-full">
        <thead className="bg-emerald-400">
          <tr>
          <th className="px-4 py-2"><FaUserTie/></th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Mobileno</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Ac-no</th>
            <th className="px-4 py-2">Salary</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee,index) => (
            <tr key={employee._id}>
              <td className="border px-4 py-2">{index+1}</td>
              <td className="border px-4 py-2">{employee.name}</td>
              <td className="border px-4 py-2">{employee.mobileno}</td>
              <td className="border px-4 py-2">{employee.email}</td>
              <td className="border px-4 py-2">{employee.acno}</td>
              <td className="border px-4 py-2">{employee.salary}</td>
              <td className="border px-4 py-2">   
                <Link to={`/updatewarden/${employee._id}`} >
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  // onClick={() => handleUpdate(employee._id)}
                  >
                  Update
                </button>
                  </Link>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDelete(employee._id)}
                >
                  Delete
                </button>
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

export default Managewarden;
