"use client";

import { useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { format } from "date-fns";
import Image from "next/image";

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function Dashboard() {
  // Sample Data
  const staffData = {
    gender: {
      male: 45,
      female: 55,
    },
    department: {
      hr: 30,
      engineering: 50,
      sales: 40,
      marketing: 35,
    },
    category: {
      fullTime: 80,
      partTime: 20,
    },
    employees: 100, // Number of employees
    attendanceToday: 60, // Todays attendance
    leaveApplications: {
      pending: 10,
      approved: 20,
      rejected: 5,
    },
    birthdaysToday: [
      { name: "John Doe", date: "1990-01-21" },
      { name: "Jane Smith", date: "1995-01-21" },
    ],
  };

  const [clockedIn, setClockedIn] = useState(false);

  // Example leave application filters
  const leaveFilters = ["Pending", "Approved", "Rejected"];
  const [leaveFilter, setLeaveFilter] = useState("Pending");

  const handleClockIn = () => {
    setClockedIn(!clockedIn);
  };

  // Chart Data
  const genderChartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "Staff Population by Gender",
        data: [staffData.gender.male, staffData.gender.female],
        backgroundColor: ["#4CAF50", "#FF5722"],
      },
    ],
  };

  const departmentChartData = {
    labels: ["HR", "Engineering", "Sales", "Marketing"],
    datasets: [
      {
        label: "Staff Population per Department",
        data: [
          staffData.department.hr,
          staffData.department.engineering,
          staffData.department.sales,
          staffData.department.marketing,
        ],
        backgroundColor: ["#2196F3", "#FFC107", "#9C27B0", "#FF9800"],
      },
    ],
  };

  const categoryChartData = {
    labels: ["Full-Time", "Part-Time"],
    datasets: [
      {
        label: "Staff Population per Category",
        data: [staffData.category.fullTime, staffData.category.partTime],
        backgroundColor: ["#009688", "#3F51B5"],
      },
    ],
  };

  // Handle leave filter change
  const handleLeaveFilterChange = (e) => {
    setLeaveFilter(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-xl p-6 mb-8 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Image
            src=""
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-500">Staff Member</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleClockIn}
            className={`py-2 px-4 rounded-lg ${clockedIn ? "bg-green-500" : "bg-indigo-600"} text-white`}
          >
            {clockedIn ? "Clocked In" : "Clock In"}
          </button>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Number of Employees</h3>
          <p className="text-3xl font-bold">{staffData.employees}</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Todays Attendance</h3>
          <p className="text-3xl font-bold">{staffData.attendanceToday} Employees Clocked In</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Staff Birthdays Today</h3>
          <ul>
            {staffData.birthdaysToday.map((birthday, index) => (
              <li key={index} className="text-lg font-semibold">
                {birthday.name} - {format(new Date(birthday.date), "MM/dd/yyyy")}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Leave Applications */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">Leave Applications</h3>
        <div className="mb-4">
          <label className="mr-4">Filter by Status:</label>
          <select
            value={leaveFilter}
            onChange={handleLeaveFilterChange}
            className="py-2 px-4 border rounded-lg"
          >
            {leaveFilters.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className="text-lg">
            {leaveFilter} Applications: {staffData.leaveApplications[leaveFilter.toLowerCase()]}
          </p>
        </div>
      </div>

      {/* Staff Population Charts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Staff Population by Gender</h3>
          <Pie data={genderChartData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Staff Population per Department</h3>
          <Bar data={departmentChartData} />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Staff Population per Category</h3>
          <Pie data={categoryChartData} />
        </div>
      </div>
    </div>
  );
}
