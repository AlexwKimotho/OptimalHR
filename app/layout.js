"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import "./globals.css";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Check if the current page is the SignIn page
  const isSignInPage = pathname === "/";

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        {isSignInPage ? (
          // Render only the SignIn content
          <div>
            {children}
          </div>
        ) : (
          // Render the default layout with Navbar and Sidebar
          <div>
            <Navbar />
            <div className="flex">
              <Sidebar className="w-64 flex-shrink-0" />
              <div className="flex-grow p-4">{children}</div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
