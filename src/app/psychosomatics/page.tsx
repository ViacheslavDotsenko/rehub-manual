// components/RandomText.tsx
import React from "react";
//import Link from "next/link";
import PsychosomMain from "../../components/psychosomatics/PsyhosomMain";
import PsychosomNavigation from "../../components/psychosomatics/PsychosomaticsNavigation";


// Функція для генерації випадкових слів


const Psychosomatics: React.FC = () => {
 

  return (
    <div className="flex-1 max-w-7xl mr-auto ml-auto">
      <PsychosomNavigation />
      {/* <h2>Психосоматика показує, що тіло і розум – єдине ціле. Наші думки, страхи, переживання можуть впливати на здоров`я. Навчившись керувати емоціями та правильно реагувати на стрес, можна запобігти багатьом хворобам та покращити якість життя.</h2>
      <Link href="/">Random Text Component</Link> */}
      <PsychosomMain />
      
      
    </div>
  );
};

export default Psychosomatics;
