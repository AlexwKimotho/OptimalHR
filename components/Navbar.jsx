"use client";

import { useState } from "react";
import Link from "next/link";
import { User } from "lucide-react"; // Assuming you're using lucide-react icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 shadow-lg">
      {/* Logo/Brand */}
      <Link className="text-white font-bold text-xl" href={"/"}>
        OptimaHR
      </Link>

      {/* Navbar Links */}
      <div className="flex space-x-6">   
        {/* Profile Icon (Button with Popup Effect) */}
        <button onClick={toggleMenu} className="relative">
          <User className="text-white w-6 h-6" />
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 bg-gray-800 text-white rounded-lg shadow-lg w-48">
              <ul className="space-y-2 p-2">
                <li>
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-700 rounded-lg">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link href="/pages/settings" className="block px-4 py-2 hover:bg-gray-700 rounded-lg">
                    Settings
                  </Link>
                </li>
                <li>
                  <Link href="/logout" className="block px-4 py-2 hover:bg-gray-700 rounded-lg">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
