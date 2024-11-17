import { useState } from "react";
import { SunIcon, MoonIcon, GlobeIcon, SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <header className="bg-black text-white w-full">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold">
          <span>BitBlogs</span>
        </div>

        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/write" className="hover:text-gray-400">
            Write
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-400">
            <SearchIcon className="w-5 h-5" />
          </button>
    
          <Link
            to="/SignIn"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Sign In
          </Link>

          <button className="hover:text-gray-400">
            <GlobeIcon className="w-5 h-5" />
          </button>

          <button
            className="hover:text-gray-400"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  );
};
