import React from "react";
import Image from "next/image";
import Link from "next/link";




const IleocecalValve: React.FC = () => {
    return(<article>
        <h2 className="text-[28px] mb-[1rem]">Ілеоцекальний клапан</h2>
        <p className="mb-[1rem]"><strong>Ілеоцекальний клапан - </strong>(лат. valva ileocaecalis) анатомічна клапанна структура, розділяюча тонку і товсту кишку(застаріла назва баушнева заслонка). Розташований біля отвору між клубовою кишкою і товстим кишечником. </p>
        <p className="mb-[1rem]">Ілеоцекальний клапан контролює надходження хімусу з тонкої кишки в товсту кишку. Запобігає потраплянню ретроградного напливу бактерій з товстого кишківника до тонкого.</p>
        <p>Поза травленням ілеоцекальний клапан закритий. Через 0,5-4 хвилини після прийому їжі від починає відкриватися з частотою 1-2 рази в минуту і хімус порціями приблизно 15мл потрапляє з тонкої кишки в товсту. Відкривання клапану відбувається рефлекторно: пристальтична хвиля (кільцеве звуження просвіту органа) повздовшньої кишки підвищує тиск в ній і розслаблює ілеоцикальний клапан.</p>
        <p>Підвищення тиску в сліпій кишкі збільшує тонус ілеоцекального клапану і гальмує потапляння в сліпу кишку вміст повздовшньої кишки.</p>
        <p>За добу ілеоцикальний клапан дорослої людини в нормі перепускає орієнтовно 0.5-4 літри хімуса.</p>
        <p className="mb-[1rem]">Рефлекторне розслаблення у відповідь на потрапляння їжі в порожній шлунок називається гастроітеральним рефлексом.</p>
        <div className="flex mb-[1rem]">
        <Image
              src="/images/structural/ileocecal-valve.png"
              alt="picture_ileocecal"
              width={500}
              height={320}
              className="object-contain"
         />
         <ul className="mt-[2rem] list-disc list-inside">
            <li>на малюнку</li>
            <li>верхній сигмент ІК (Upper segment of colic valve)</li>
            <li>нижній сегмент ІК (Lower segment of colic valve)</li>
            <li>повздовжня кишка (ileum)</li>
            <li>сліпа кишка (Cecum)</li>
            <li>восхідна ободочна кишка (Ascending Colon)</li>            
         </ul>
        </div>        
        <p>Діагностика та лікування синдрому ілеоцекального клапану (ІЦК) були започатковані в пркладній кінеозиології Гудхартом в 1967 році.</p>
        <p className="mb-[1rem]">ІЦК також називають тонко-товстокишковим клапаном або ілеоцикальним сфинктором. Його головною задачею стоїть контроль руху між тонким та товстим кишечником. </p>
        <p className="mb-[1rem]"><strong>ІЦК має дві властивості.</strong></p>
        <p>Перше - потовщення круглих м`зів в дистальному кільці повздовшньої кишки по типу сфінктера, пезпосередньо перед сліпою кишкою.</p>
        <p>Друге - знаходиться в точці з`єднання, в якому клапанна структура утворюється двома поперечними складками або губами, одна з яких розміщена над іншою, на сліпокишковій частині повздовшньо - обідкового отвору. частина відноситься до сфінктеру, знаходиться пів неврологічним контролем; клапанна частина має форму, ітворююча клапан, працюючий в одному напрямку, або одношляховий клапан.</p>
        <Image
              src="/images/structural/ileocecalValve.jpg"
              alt="picture_ileocecal"
              width={350}
              height={210}
              className="object-contain"
         />
         <article>
            <h2 className="text-center text-[1.5rem] mb-[1rem]">Диференціальне діагностування та лікування синдрому ілеоцикального клапану</h2>
            <h4>(згідно Дєвиду С. Вальтеру Приклад кінеоз 2011)</h4>
            <table className="min-w-full border border-gray-300 mb-[4rem]">
          <thead>
            <tr className="bg-green-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-2"></th>
              <th className="border border-gray-300 px-4 py-2">Відкритий</th>
              <th className="border border-gray-300 px-4 py-2">Закритий</th>
              
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Провокація</td>
              <td className="border border-gray-300 px-4 py-2">Тяга клапану вверх посилює м`яз. Тяга клапана в низ слабить тонусний м`яз</td>
              <td className="border border-gray-300 px-4 py-2">Тяга клапана вверх не викликає змін в слабому м`язі. Тяга клапана в низ підсилює слабий м`яз.</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Терапевтична локалізація</td>
              <td className="border border-gray-300 px-4 py-2">Над сліпою кишкою в нижньому правому квадранті живота.</td>
              <td className="border border-gray-300 px-4 py-2">Над сліпою кишкою в нижньому правому квадранті живота.</td>             
            </tr>  
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Задіяні м`язи</td>
              <td className="border border-gray-300 px-4 py-2">Тестування загальної індикаторного м`яза при терпевтичній локалізації.</td>
              <td className="border border-gray-300 px-4 py-2">Слабий прямий м`яз живота та квадріцебс бедра. Підвищени тонус поясничного м`яза.</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">НЛР</td>
              <td className="border border-gray-300 px-4 py-2">Нижче правої ПВПО, Права боріздка бвухглавого м`яза плеча(7.5см), поруч з правою пластинкою С3.</td>
              <td className="border border-gray-300 px-4 py-2"><Link href="">НЛР прямої живота</Link> та <Link href="">НЛР квадріцебса бедра</Link></td>             
            </tr> 
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">НСР</td>
              <td className="border border-gray-300 px-4 py-2">На Півшляху між зовнішньою межею прямої живота і ПВПО.</td>
              <td className="border border-gray-300 px-4 py-2">На Півшляху між зовнішньою межею прямої живота і ПВПО.</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Рецептори стресу</td>
              <td className="border border-gray-300 px-4 py-2">1,5 см до зовні від заднього потиличного виступу.</td>
              <td className="border border-gray-300 px-4 py-2">1,5 см до зовні від заднього потиличного виступу.</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Участь позвонків</td>
              <td className="border border-gray-300 px-4 py-2">Зазвичай L1, також можливо T12 і L2.</td>
              <td className="border border-gray-300 px-4 py-2">Передній підвивих L3 і стабілізатор Ловетта(C3), L5 (асоціативна точка тонкої кишки).</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Мередіан</td>
              <td className="border border-gray-300 px-4 py-2">BL58 або КІ 4, ло-точки мередіану почок і сечового міхура для їх збалансування.</td>
              <td className="border border-gray-300 px-4 py-2">BL58 або КІ 4, ло-точки і седативні точки мередіану почок для його дренажу(Протестувати наскільки ефективний)</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Черепні порушення</td>
              <td className="border border-gray-300 px-4 py-2">Діагностування всього черепу, зачасту порушення скулового та лямдоподібного шву.</td>
              <td className="border border-gray-300 px-4 py-2">Діагностування всього черепу. Зачасту присутне універсальне порушення, іноді скулового та лямдоподібного шву.</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Харчування</td>
              <td className="border border-gray-300 px-4 py-2">Хлорофіл, іноді засоби які допомагають травленню.</td>
              <td className="border border-gray-300 px-4 py-2">Кальцій, вітамін D, іноді при порушенні всмоктуванні кальція, соляна кислота.</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Дієта</td>
              <td className="border border-gray-300 px-4 py-2">Відмова від грубої їжі, свіжих фруктів - овочів, гострої їжі, кофеїну, какао алкоголь.</td>
              <td className="border border-gray-300 px-4 py-2">Відмова від грубої їжі, свіжих фруктів - овочів, гострої їжі, кофеїну, какао алкоголь.</td>             
            </tr>     
          </tbody>
        </table>
         </article>
    </article>)
};

export default IleocecalValve;