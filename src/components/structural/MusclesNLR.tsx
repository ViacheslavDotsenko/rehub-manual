import React from "react";






const MusclesNLR: React.FC = () => {
  

 
    return (
        <div className="overflow-x-auto">
            <h2>М`язи верхньої частини</h2>
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">Колонка 1</th>
              <th className="border border-gray-300 px-4 py-2">Колонка 2</th>
              <th className="border border-gray-300 px-4 py-2">Колонка 3</th>
              <th className="border border-gray-300 px-4 py-2">Колонка 4</th>
              <th className="border border-gray-300 px-4 py-2">Колонка 5</th>
              <th className="border border-gray-300 px-4 py-2">Колонка 6</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  };
  
  export default MusclesNLR;
  