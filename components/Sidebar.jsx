import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-red-800 text-white w-64 p-6 shadow-lg">
        {/* Logo */}
        <div className="text-2xl font-bold mb-6 text-center">iScope HR</div>
        {/* Navigation */}
        <ul className="space-y-4">
          <li>
            <Link href="/">
              <div className="text-black hover:text-white">Dashboard</div>
            </Link>
          </li>
          <li>
            <div className="relative group">
              <div className="text-black hover:text-white cursor-pointer">
                Organization Profie
              </div>
              <ul className="absolute left-0 hidden mt-1 bg-white text-black group-hover:block shadow-lg rounded-md w-48">
                <li>
                  <Link href={`/pages/organization`}>
                    <div className="px-4 py-2">Organizations</div>
                  </Link>
                </li>
                <li>
                  <Link href={`/pages/divisions`}>
                    <div className="px-4 py-2">Divisions</div>
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link href="/pages/organization/departments">
                    <div className="px-4 py-2">Departments</div>
                  </Link>
                </li>
                <li className="hover:bg-gray-200">
                  <Link href="/pages/organization/awards">
                    <div className="px-4 py-2">Organizational Awards</div>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/">
              <div className="text-black hover:text-white">Contact</div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex-1"></div>
    </div>
  );
}
