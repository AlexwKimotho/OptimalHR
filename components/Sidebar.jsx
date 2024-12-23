import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 p-6 shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold mb-6 text-center">iScope HR</div>
        {/* Navigation */}
        <ul className="space-y-4">
          <li>
            <Link href="/">
              <div className="text-blue-600 hover:text-blue-800">Home</div>
            </Link>
          </li>
          <li>
            <Link href={`/pages/organization`}>
              <div className="text-blue-600 hover:text-blue-800">
                Organizations
              </div>
            </Link>
          </li>

          <li>
            <Link href={`/pages/divisions`}>
              <div className="text-blue-600 hover:text-blue-800">Divisions</div>
            </Link>
          </li>

          <li>
            <Link href="/">
              <div className="text-blue-600 hover:text-blue-800">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}

// import Link from "next/link";

// export default function Sidebar() {
//     return (
//         <div className="flex h-screen bg-gray-100">
//             {/* Sidebar */}
//             <div className="bg-gray-800 text-white w-64 p-6 shadow-lg">
//                 {/* Logo */}
//                 <div className="text-2xl font-bold mb-6 text-center">My App</div>
//                 {/* Navigation */}
//                 <ul className="space-y-4">
//                     <li>
//                         <Link href="/">
//                             <a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 focus:bg-gray-700">
//                                 <span className="text-blue-400">&#x1F3E0;</span>
//                                 <span className="ml-3">Home</span>
//                             </a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/pages/organization">
//                             <a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 focus:bg-gray-700">
//                                 <span className="text-blue-400">&#x1F465;</span>
//                                 <span className="ml-3">Organizations</span>
//                             </a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/pages/divisions">
//                             <a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 focus:bg-gray-700">
//                                 <span className="text-blue-400">&#x1F4DA;</span>
//                                 <span className="ml-3">Divisions</span>
//                             </a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/">
//                             <a className="flex items-center px-4 py-2 rounded-lg hover:bg-gray-700 focus:bg-gray-700">
//                                 <span className="text-blue-400">&#x1F4E9;</span>
//                                 <span className="ml-3">Contact</span>
//                             </a>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 p-10">
//                 <h1 className="text-3xl font-bold text-gray-800">Welcome to My App</h1>
//                 <p className="mt-4 text-gray-600">This is the main content area.</p>
//             </div>
//         </div>
//     );
// }
