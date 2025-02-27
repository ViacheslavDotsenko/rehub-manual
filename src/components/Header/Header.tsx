// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Логотип */}
        <h1 className="text-xl font-bold">
          <Link href="/">MyWebsite</Link>
        </h1>

        {/* Навігація */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/psychosomatics" className="hover:underline">
              psychosomatics
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
