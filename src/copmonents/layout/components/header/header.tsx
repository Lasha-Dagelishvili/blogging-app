import { useState } from "react";
import { SunIcon, MoonIcon, GlobeIcon, SearchIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useMutation } from "react-query";
import { logout } from "@/supabase/auth";

export const Header = () => {
  const { user, setUser } = useAuthContext();
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const { mutate: handleLogout } = useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => {
      setUser(null);
    },
  });

  return (
    <header className="bg-black text-white w-full relative">
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
          <Link to="/test" className="hover:text-gray-400">
            Test
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hover:text-gray-400">
            <SearchIcon className="w-5 h-5" />
          </button>
          {user ? (
            <div className="flex gap-x-2">
              <NavLink
              to="/Profile"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
              Profile
              </NavLink>
                <span
                  onClick={() => handleLogout()}
                  className="cursor-pointer hover:text-gray-400"
                >
                  Logout
                </span>
            </div>
          ) : (
            <NavLink
              to="/SignIn"
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Sign In
            </NavLink>
          )}

          <div className="relative">
            <button
              className="hover:text-gray-400"
              onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
            >
              <GlobeIcon className="w-5 h-5" />
            </button>
            {showLanguageDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-gray-800 text-white rounded-md shadow-lg z-20">
                <ul className="py-2">
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setShowLanguageDropdown(false);
                      i18n.changeLanguage("en");
                    }}
                  >
                    English
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                    onClick={() => {
                      setShowLanguageDropdown(false);
                      i18n.changeLanguage("ka");
                    }}
                  >
                    ქართული
                  </li>
                </ul>
              </div>
            )}
          </div>

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
