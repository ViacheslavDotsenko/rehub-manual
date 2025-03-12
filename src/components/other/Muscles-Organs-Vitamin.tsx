import React from 'react';




interface Props {
title?: string;
}



const MusculesOrganVitaminDependensy: React.FC<Props> = ({ }) => {
return (<article>
    <h2 className='text-[1.5rem] text-center p-[2rem]'>Взаємозв`язок - М`яз - Орган - Поживні речовини</h2>
       <table className="min-w-full border border-gray-300 mb-[4rem]">
          <thead>
            <tr className="bg-green-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">М`яз</th>
              <th className="border border-gray-300 px-4 py-2">Відповідний орган</th>
              <th className="border border-gray-300 px-4 py-2">Живильні елементи/лікувальні засоби</th>              
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Аддуктори (привідний м`яз)</td>
              <td className="border border-gray-300 px-4 py-2">Репродуктивні органи</td>
              <td className="border border-gray-300 px-4 py-2">Вітамін Е, ПНЖК(Поліненасичені жирні кислоти), Mg</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Прямі м`язи живота</td>
              <td className="border border-gray-300 px-4 py-2">Дванадцятиперсна кишка</td>
              <td className="border border-gray-300 px-4 py-2">Вітаміни Е, В, Со, Q 10</td>             
            </tr>  
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Двухголовий м`яз(біцебс)</td>
              <td className="border border-gray-300 px-4 py-2">Шлунок</td>
              <td className="border border-gray-300 px-4 py-2">Цинк, ПНЖК, Вітамін В1, В2, бетаїн-HCL</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Клювовидно-плечевий м`яз</td>
              <td className="border border-gray-300 px-4 py-2">Легені</td>
              <td className="border border-gray-300 px-4 py-2">Вітамін С, бета-каротин</td>             
            </tr> 
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Дельтовидний м`яз</td>
              <td className="border border-gray-300 px-4 py-2">Легені</td>
              <td className="border border-gray-300 px-4 py-2">Вітамін С, РНК, бета-каротин</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Сідничні м`язи</td>
              <td className="border border-gray-300 px-4 py-2">Репродуктивні органи</td>
              <td className="border border-gray-300 px-4 py-2">Вітаміни Е, А, Ніацин, Цинк, органічні витяжки Репроду-них органів</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Великий сідничний м`яз</td>
              <td className="border border-gray-300 px-4 py-2">Статеві залози</td>
              <td className="border border-gray-300 px-4 py-2">Вітаміни Е, Цинк, Селен, ПНЖК, Mg</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Середні/Малі сідничні м`язи</td>
              <td className="border border-gray-300 px-4 py-2">Статеві залози</td>
              <td className="border border-gray-300 px-4 py-2">Вітаміни Е, Цинк, Селен, ПНЖК, Mg</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Тонкий м`яз</td>
              <td className="border border-gray-300 px-4 py-2">Надпочечник</td>
              <td className="border border-gray-300 px-4 py-2">Вітаміни С, В 3-5-6, Mg, Mn</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">М`язи зад/поверхні бедра ББ</td>
              <td className="border border-gray-300 px-4 py-2">Пряма кишка</td>
              <td className="border border-gray-300 px-4 py-2">Кальцій, вітамін Е</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">М`яз напружувач широкої фасції(права)</td>
              <td className="border border-gray-300 px-4 py-2">Товста кишка, Ілеоцикальний клапан(ICV)</td>
              <td className="border border-gray-300 px-4 py-2">Залізо, В 12, фолієва кислота, кальцій, Mg, рН</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">М`яз напружувач широкої фасції(ліва)</td>
              <td className="border border-gray-300 px-4 py-2">Товста кишка, сігма</td>
              <td className="border border-gray-300 px-4 py-2">Залізо, В 12, фолієва кислота, пребіотики/пробіотики</td>             
            </tr> 
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Повздовжньо-поясничні м`язи</td>
              <td className="border border-gray-300 px-4 py-2">Почки</td>
              <td className="border border-gray-300 px-4 py-2">Вітаміни А, Е</td>             
            </tr>      
          </tbody>
        </table>
</article>
 );
};
export default MusculesOrganVitaminDependensy;