// components/Header.tsx
import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-[linear-gradient(120deg,#1c1aa2_0%,#08c1e7_100%)] text-white p-6 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 text-center">
        
        <h1 className="text-xl font-bold hover:text-green-200">
          <Link href="/">MainPage</Link>
        </h1>        
        <nav>
          <ul className="flex space-x-4 flex-wrap">
            <li>
              <Link href="/psychosomatics" className="hover:underline">
              psychosomatics
              </Link>
            </li>
            <li>
              <Link href="/biochemistry" className="hover:underline">
                Biochemistry
              </Link>
            </li>
            <li>
              <Link href="/structural" className="hover:underline">
                structural
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                others
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
