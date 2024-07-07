import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Studenthomepage = () => {
    const [notices, setNotices] = useState([]);
    const [currentMenu, setCurrentMenu] = useState(null);

    useEffect(() => {
        fetchNotices();
        fetchMenus();
    }, []);

    const fetchNotices = async () => {
        try {
            const response = await axios.get('http://localhost:3500/api/notice/allnotices');
            setNotices(response.data);
        } catch (error) {
            console.error('Error fetching notices:', error);
        }
    };

    const fetchMenus = async () => {
        try {
            const response = await axios.get('http://localhost:3500/api/menu/getmenu');
            const menus = response.data;

            // Get current date in 'YYYY-MM-DD' format
            const currentDate = new Date().toISOString().split('T')[0];

            // Filter menus to find the one for the current date
            const todayMenu = menus.find(menu => menu.date.split('T')[0] === currentDate);

            setCurrentMenu(todayMenu);
        } catch (error) {
            console.error('Error fetching menus:', error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto mt-10 p-6 bg-gray-100 shadow-lg rounded-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-indigo-600">Student Dashboard</h2>

            <section className="mb-8">
                <h3 className="text-3xl font-bold mb-4 text-blue-700">Notices</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {notices.map(notice => (
                        <div key={notice._id} className="p-4 border border-gray-300 rounded-md bg-white shadow-md hover:bg-blue-50 transition duration-300">
                            <h4 className="text-xl font-semibold mb-2 text-blue-900">{notice.title}</h4>
                            <p className="text-gray-700">{notice.content}</p>
                            <p className="text-sm text-gray-500 mt-2">Category: {notice.category}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="text-3xl font-bold mb-4 text-green-700">Today's Menu</h3>
                {currentMenu ? (
                    <div className="mb-6 p-4 bg-white rounded-md shadow-md">
                        <h4 className="text-xl font-semibold mb-2 text-green-800">Date: {new Date(currentMenu.date).toLocaleDateString()}</h4>
                        <table className="min-w-full divide-y divide-gray-200 bg-gray-50">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentMenu.meals.map((meal, index) => (
                                    <tr key={index} className="hover:bg-green-50 transition duration-300">
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-900">{meal.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-600">{meal.type}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500">No menu available for today.</p>
                )}
            </section>
        </div>
    );
};

export default Studenthomepage;
