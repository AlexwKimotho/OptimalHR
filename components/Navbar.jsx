import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-black">
      <Link className="text-white font-bold" href={"/"}>
        iScope HR
      </Link>

    </div>
  );
}
