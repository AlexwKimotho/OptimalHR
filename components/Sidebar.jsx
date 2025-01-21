"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  Layout,
  Users,
  Award,
  Phone,
  Building2,
} from "lucide-react";

const Sidebar = () => {
  const [isOrgMenuOpen, setIsOrgMenuOpen] = useState(false);
  const [isTeseMenuOpen, setIsTeseMenuOpen] = useState(false);

  const toggleOrgMenu = () => {
    setIsOrgMenuOpen(!isOrgMenuOpen);
  };

  const toggleTeseMenu = () => {
    setIsTeseMenuOpen(!isTeseMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-gray-900 text-gray-100 w-64 flex flex-col shadow-lg">
        {/* Logo/Profile Section */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
          </div>
          <h1 className="text-xl font-semibold text-center mt-4">
            Profile Picture
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {/* Dashboard */}
            <li>
              <a href="/pages/dashboard" className="block">
                <div className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out">
                  <Layout className="w-5 h-5 mr-3" />
                  <span>Dashboard</span>
                </div>
              </a>
            </li>

            {/* Organization Dropdown */}
            <li>
              <button
                onClick={toggleOrgMenu}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out"
                aria-expanded={isOrgMenuOpen}
              >
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 mr-3" />
                  <span>Institutions</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isOrgMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <ul
                className={`mt-2 ml-4 space-y-1 ${
                  isOrgMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <a href="/pages/organization" className="block">
                    <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out">
                      <Users className="w-4 h-4 mr-3" />
                      <span>Business Accounts</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            {/* TESE Dropdown */}
            <li>
              <button
                onClick={toggleTeseMenu}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out"
                aria-expanded={isTeseMenuOpen}
              >
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 mr-3" />
                  <span>TESE</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isTeseMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              <ul
                className={`mt-2 ml-4 space-y-1 ${
                  isTeseMenuOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <a href="/pages/divisions" className="block">
                    <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out">
                      <Building2 className="w-4 h-4 mr-3" />
                      <span>User Management</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/pages/departments" className="block">
                    <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out">
                      <Building2 className="w-4 h-4 mr-3" />
                      <span>Departments</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/pages/organization/awards" className="block">
                    <div className="flex items-center px-4 py-2 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out">
                      <Award className="w-4 h-4 mr-3" />
                      <span>Organizational Awards</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>

            {/* Contact */}
            <li>
              <a href="/" className="block">
                <div className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors duration-150 ease-in-out">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>Contact</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Sidebar;
