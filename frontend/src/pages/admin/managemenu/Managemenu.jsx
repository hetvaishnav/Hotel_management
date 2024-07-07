import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
const Managemenu = () => {
    const [menus, setMenus] = useState([]);

    // Fetch all menus from server
    const fetchMenus = async () => {
        try {
            const response = await axios.get('http://localhost:3500/api/menu/getmenu');
            setMenus(response.data);
        } catch (error) {
            console.error('Error fetching menus:', error);
        }
    };

    useEffect(() => {
        fetchMenus();
    }, []); // Fetch menus on component mount

    // Delete menu by ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3500/api/menu/getmenu/${id}`);
            // Update state after successful deletion
            setMenus(menus.filter(menu => menu._id !== id));
            toast.success("Menu Deleted succesfully")
        } catch (error) {
            console.error('Error deleting menu:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-6">All Menus</h2>
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="text-left py-2 px-4">Date</th>
                        <th className="text-left py-2 px-4">Meals</th>
                        <th className="py-2 px-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {menus.map(menu => (
                        <tr key={menu._id} className="border-b border-gray-200">
                            <td className="text-left py-2 px-4">{menu.date}</td>
                            <td className="text-left py-2 px-4">
                                <ul>
                                    {menu.meals.map((meal, index) => (
                                        <li key={index}>{meal.name}</li>
                                    ))}
                                </ul>
                            </td>
                            <td className="py-2 px-4 text-right">
                                <button
                                    onClick={() => handleDelete(menu._id)}
                                    className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Managemenu;
