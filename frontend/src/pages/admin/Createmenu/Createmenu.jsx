import React, { useState } from 'react';
import axios from 'axios';

const CreateMenu = () => {
    const [date, setDate] = useState('');
    const [meals, setMeals] = useState([{ name: '' }]);

    const handleAddMeal = () => {
        setMeals([...meals, { name: '' }]);
    };

    const handleChangeMeal = (index, event) => {
        const newMeals = meals.map((meal, mealIndex) => {
            if (index === mealIndex) {
                return { ...meal, [event.target.name]: event.target.value };
            }
            return meal;
        });
        setMeals(newMeals);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3500/api/menu/addmenu', { date, meals });
            alert('Menu added successfully');
        } catch (error) {
            console.error('Error adding menu:', error);
        }
    };

    return (
        <>
         
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Add Menu</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>
                {meals.map((meal, index) => (
                    <div key={index} className="space-y-2">
                        <label className="block text-gray-700">Meal Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={meal.name}
                            onChange={(e) => handleChangeMeal(index, e)}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddMeal}
                    className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                    Add Meal
                </button>
                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Submit
                </button>
            </form>
        </div>
        
        </>
    );
};

export default CreateMenu;
