
// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css'; // Optional for default theme
import ho1 from "../../assets/h1.png"
import ho2 from "../../assets/h2.jpg"
import ho3 from "../../assets/h3.jpg"
import ho4 from "../../assets/h4.jpg"
import ho5 from "../../assets/h5.jpg"
import ho6 from "../../assets/h2.jpg"

// const images = [
//   ho1,ho4,ho3,ho4,ho5,ho1
// ];

// function App() {
//   const settings = {
//     dots: true, // Enable navigation dots
//     infinite: true, // Enable infinite looping
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 3000, // Autoplay transition speed in milliseconds
//     slidesToShow: 1, // Number of slides to show at a time
//     slidesToScroll: 1, // Number of slides to scroll per swipe/click
//     responsive: [
//       {
//         breakpoint: 768, // Responsive settings for smaller screens
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <Slider {...settings}>
//         {images.map((image) => (
//           <img key={image} src={image} alt="Slide" className="w-full h-[80vh]" />
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default App;
import React from 'react';
//import 'tailwindcss/tailwind.css';

const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <header className="bg-indigo-600 text-white p-6 text-center">
                <h1 className="text-4xl font-bold">Welcome to Our Hostel</h1>
                <p className="mt-2 text-lg">Your Home Away from Home</p>
            </header>

            <main className="max-w-6xl mx-auto py-12 px-6">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-indigo-600">About Our Hostel</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our hostel offers a welcoming environment where students can thrive academically and socially. We provide
                        comfortable accommodations, a friendly community, and various amenities to ensure a pleasant stay.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-indigo-600">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="relative group">
                            <img src={ho1} alt="Hostel Image 1" className="w-full h-64 object-cover rounded-md shadow-lg transform group-hover:scale-105 transition duration-300" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-xl font-bold">
                                Hostel Exterior
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={ho3} alt="Hostel Image 2" className="w-full h-64 object-cover rounded-md shadow-lg transform group-hover:scale-105 transition duration-300" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-xl font-bold">
                                Common Area
                            </div>
                        </div>
                        <div className="relative group">
                            <img src={ho2} alt="Hostel Image 3" className="w-full h-64 object-cover rounded-md shadow-lg transform group-hover:scale-105 transition duration-300" />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-xl font-bold">
                                Hostel Rooms
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold mb-6 text-indigo-600">Facilities</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-lg">
                        <li className="mb-2">Spacious and well-furnished rooms</li>
                        <li className="mb-2">24/7 Security</li>
                        <li className="mb-2">High-speed internet</li>
                        <li className="mb-2">Common study areas</li>
                        <li className="mb-2">Laundry facilities</li>
                        <li className="mb-2">Cafeteria with healthy meals</li>
                    </ul>
                </section>
            </main>

            <footer className="bg-indigo-600 text-white p-6 text-center">
                <p className="text-lg">&copy; 2024 Hostel Management System. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;

