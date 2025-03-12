import React from 'react';
import Link from "next/link";


const StructuralNavigation: React.FC = () => {
  

 
  return (
    <nav className='flex p-3 text-[#1186df]'>
        <ul className='flex gap-2 ml-auto mr-auto'>
          <li className='grid place-items-center mr-[2rem]'>
            <Link href="/" className="hover:text-green-500 transition-colors duration-300">&#8656; Назад на головну</Link>
          </li>
            <li className='p-4 border-2 border-[#45afff] hover:border-[#0091ff] rounded-lg'><Link href="/structural/muscles" className="hover:underline">
            М`язи 
              </Link></li>
            <li className='p-4 border-2 border-[#45afff] hover:border-[#0091ff] rounded-lg'><Link href="/structural/internals" className="hover:underline">
            Внутрішні органи
              </Link></li>
            <li className='p-4 border-2 border-[#45afff] hover:border-[#0491ff] rounded-lg'><Link href="/psychosomatics" className="hover:underline">
            Точки лoкалізації
              </Link></li>
        </ul>      
    </nav>
  );
};

export default StructuralNavigation;
