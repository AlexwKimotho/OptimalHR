import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
      <div>
          <Navbar />
          <div className="flex">
            <Sidebar className="w-64 flex-shrink-0" />
            <div className="flex-grow p-4">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
