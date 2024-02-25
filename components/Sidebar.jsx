import Link from "next/link";

export default function Sidebar() {
    return (
        <div className="flex h-full">
            <div className="bg-gray-200 p-4 w-52">
                <ul className="mt-4">
                    <li>
                        <Link href="/">
                            <div className="text-blue-600 hover:text-blue-800">Home</div>
                        </Link>
                    </li>
                    <li>
                        <Link href={`/pages/organization`}>
                            <div className="text-blue-600 hover:text-blue-800">Organizations</div>
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
            <div className="flex-1">

            </div>
        </div>
    );
}
