import React from "react";
import ho1 from "../../assets/h4.jpg"
import ho2 from "../../assets/h3.jpg"
 

export default function About() {

    return (<>
            
        <div className="container mx-auto mt-8 flex ">
            {/* Information on the left */}
            <div className="w-1/2 pr-8 bg-slate-100">
                <h2 className="text-3xl font-bold mb-4">About Our Hostel</h2>
                <p className="text-gray-700 bg-slate-50">
                    Welcome to <strong>Your Hostel Name</strong>, your home away from home. We are located in the heart
                    of the city, providing a convenient and comfortable living space for students and travelers alike.
                </p>
                <p className="text-gray-700 mt-4">
                    Address: <strong>Your Hostel Address</strong>
                </p>
                <p className="text-gray-700">
                    Contact: <strong>Your Contact Number</strong>
                </p>
                <section className="mb-8 mt-8">
                    <h2 className="text-2xl font-bold mb-4">Hostel Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="card rounded-lg shadow-md p-4 bg-slate-400">
                            <h3 className="text-lg font-bold mb-2">Facilities</h3>
                            <ul className=" stext-gray-700 leading-loose">
                                <li>Wi-Fi</li>
                                <li>Laundry</li>
                                <li>Common areas</li>
                                <li>Security</li>
                                {/* Add more facilities as needed */}
                            </ul>
                        </div>
                        <div className="card rounded-lg shadow-md p-4 bg-slate-400">
                            <h3 className="text-lg font-bold mb-2">Accommodation Options</h3>
                            <ul className="stext-gray-700 leading-loose">
                                <li>Single rooms</li>
                                <li>Double rooms</li>
                                <li>Dormitories (various capacities)</li>
                                {/* Add more room types as needed */}
                            </ul>
                        </div>
                        <div className="card rounded-lg shadow-md p-4 md:col-span-2 mt-14">
                            <h3 className="text-lg font-bold mb-2">Additional Information</h3>
                            <p className="text-gray-700 leading-loose">
                                {/* Provide additional details about the hostel */}
                                [Provide any other relevant details about the hostel, such as policies (cancellation, check-in/out times, etc.), house rules, or how to apply for residency.]
                            </p>
                        </div>
                    </div>
                </section>

            </div>

            {/* Photos on the right */}
            <div className="w-1/2">
                <div className="mb-4">
                    <img
                        src={ho1}
                        alt="Hostel Photo 1"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
                <div>
                    <img
                        src={ho2}
                        alt="Hostel Photo 2"
                        className="w-full h-full object-cover rounded"
                    />
                </div>
            </div>
        </div>




    </>)



}


