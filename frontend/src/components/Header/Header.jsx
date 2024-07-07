import logo from "../../assets/hostellogo.png"
import { Link } from "react-router-dom"
export default function Header() {
  return (<>
    <nav className="bg-gray-800 p-4 mt-0">
      <div className="container mx-auto flex justify-between items-center w-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" /> {/* Adjust height and width as needed */}
          <span className="text-white font-bold text-xl">My Logo</span>
        </div>
        <div className="flex space-x-10">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/about" className="text-white">About Us</Link>

        </div>
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</Link>

      </div>
    </nav>
  </>)


}