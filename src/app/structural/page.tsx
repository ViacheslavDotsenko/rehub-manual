// components/RandomText.tsx
import React from "react";
import Link from "next/link";
import StructuralNavigation from "@/components/structural/StructuralNavigation";




const Structural: React.FC = () => {
   // Генеруємо 400 слів

  return (
    <div className="flex-1 max-w-7xl mr-auto ml-auto">
      <Link href="/">&#8656; Назад на головну</Link>
      <StructuralNavigation/>
      
      
    </div>
  );
};

export default Structural;
