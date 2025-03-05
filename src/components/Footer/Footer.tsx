// components/Header.tsx
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[linear-gradient(120deg,#08c1e7_0%,#1c1aa2_100%)] text-white p-5 shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 text-center">
       
        <h1 className="text-xl font-bold">
          <Link href="/">MainPage</Link>
        </h1>

        {/* Навігація */}
        <nav>
          <ul className="flex flex-wrap space-x-4">
            <li>
              <Link href="/psychosomatics" className="hover:underline">
              psychosomatics
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Biochemistry
              </Link>
            </li>
            <li>
              <Link href="/mdx-page" className="hover:underline">
                structural
              </Link>
            </li>
            <li>
              <Link href="/mdx-page" className="hover:underline">
                others
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
