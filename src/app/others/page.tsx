import NlrBasic from "@/components/other/NlrBasic";
import OtherNav from "@/components/other/OtherNav";
import MusculesOrganVitaminDependensy from "@/components/other/Muscles-Organs-Vitamin";

const Others: React.FC = () => {
 

    return (
      <div className="flex-1 max-w-7xl mr-auto ml-auto">
        <OtherNav/>
        <MusculesOrganVitaminDependensy/>
        <NlrBasic/>        
      </div>
    );
  };
  
  export default Others;