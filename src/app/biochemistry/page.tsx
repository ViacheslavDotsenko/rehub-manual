// components/RandomText.tsx
import React from "react";
import Link from "next/link";
import FunctionalBiochemistry from "@/components/biochemistry/FunctionalBiochemistry";




const Biochemistry: React.FC = () => {

  return (
    <div className="flex-1 max-w-7xl mr-auto ml-auto">
      <Link href="/">Random Text page Biochemistry</Link>
      <FunctionalBiochemistry/>      
    </div>
  );
};

export default Biochemistry;
