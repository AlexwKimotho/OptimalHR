"use client";

import { useState } from "react";
import Image from 'next/image';

export default function Settings() {
  const [businessName, setBusinessName] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., sending data to the server)
    alert("Profile updated successfully!");
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-extrabold text-indigo-600 mb-6">Business Profile</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Name */}
          <div>
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
              Business Name
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              placeholder="Enter your business name"
            />
          </div>

          {/* Business Description */}
          <div>
            <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700">
              Business Description
            </label>
            <textarea
              id="businessDescription"
              name="businessDescription"
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-base"
              placeholder="Tell us about your business"
              rows="4"
            ></textarea>
          </div>

          {/* Profile Picture */}
          <div>
            <label htmlFor="profilePic" className="block text-sm font-medium text-gray-700">
              Profile Picture
            </label>
            <div className="mt-2 flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                {profilePic ? (
                  <Image  src={profilePic} alt="Profile Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-white">No Image</span>
                  </div>
                )}
              </div>
              <input
                type="file"
                id="profilePic"
                name="profilePic"
                onChange={handleProfilePicChange}
                className="ml-4 p-2 text-sm border border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 text-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
