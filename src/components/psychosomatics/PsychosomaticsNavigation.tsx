import React from 'react';
import Link from "next/link";


const PsychosomaticsNavigation: React.FC = () => {
  

 
  return (
    <nav>
        <ul>
            <li><Link href="/" className="hover:underline">
            мередіани
              </Link></li>
            <li><Link href="/psychosomatics/emotion" className="hover:underline">
            Емоції
              </Link></li>
            <li>точки лoкалізації</li>
        </ul>      
    </nav>
  );
};

export default PsychosomaticsNavigation;
