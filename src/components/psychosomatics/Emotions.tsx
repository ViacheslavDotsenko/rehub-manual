






const Emotions: React.FC = () => {

 
    return (
      <div className="overflow-x-auto max-w-7xl mr-auto ml-auto">
        <table className="min-w-full border border-gray-300">
          <thead>
            <tr className="bg-green-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-4">Ємоція</th>
              <th className="border border-gray-300 px-4 py-4">Точка Локалізації</th>
              <th className="border border-gray-300 px-4 py-4">М`язи</th>
              <th className="border border-gray-300 px-4 py-4">Асоціативні М`язи</th>
              
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-3">Смуток *грусть</td>
              <td className="border border-gray-300 px-4 py-3">Верх 1 ребра, в підключичній ямці</td>
              <td className="border border-gray-300 px-4 py-3">Латеральна частина біцебса плеча</td>
              <td className="border border-gray-300 px-4 py-3">Дельтовидна, передній зубчастий, клювоплечева</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Сум *печаль</td>
              <td className="border border-gray-300 px-4 py-2">Крила носу</td>
              <td className="border border-gray-300 px-4 py-2">Латеральна сторона тріцебса</td>
              <td className="border border-gray-300 px-4 py-2">TFL, Хамстрінги, квадратний м`яз поясниці</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Тривога</td>
              <td className="border border-gray-300 px-4 py-2">Під очима</td>
              <td className="border border-gray-300 px-4 py-2">Латеральна поверхня квадрицебса</td>
              <td className="border border-gray-300 px-4 py-2 max-w-3xl">Ключична порція ВГМ, згиначі-розгиначі шиї, ГКСМ, біцебс плеча, плечепроменевий м`яз, супенатор предпліччя, круглий пронатор, жувальна, скронева, медіальні та латеральні криловидні м`язи</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Турбота</td>
              <td className="border border-gray-300 px-4 py-2">&#8548; - &#8549; Міжребер`я, SP 21</td>
              <td className="border border-gray-300 px-4 py-2">Медіальна поверхня квадрицебса</td>
              <td className="border border-gray-300 px-4 py-2">ШМС, тріцебс плеча, середня та нижня порція трапеції</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Щастя</td>
              <td className="border border-gray-300 px-4 py-2">Пахова впадина</td>
              <td className="border border-gray-300 px-4 py-2">Медіальна частина біцебса</td>
              <td className="border border-gray-300 px-4 py-2">Підлопаточний м`яз</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Радість</td>
              <td className="border border-gray-300 px-4 py-2">Козелик</td>
              <td className="border border-gray-300 px-4 py-2">Середина тріцебса</td>
              <td className="border border-gray-300 px-4 py-2">Квадрицебс, м`язи передньої черевної порожнини</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Жах</td>
              <td className="border border-gray-300 px-4 py-2">Внутрішній кут ока</td>
              <td className="border border-gray-300 px-4 py-2">Хамстрінги, ББ</td>
              <td className="border border-gray-300 px-4 py-2">Передня великогомілкова, довга-коротка малоберцеві, куприко-остиста</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Страх</td>
              <td className="border border-gray-300 px-4 py-2">К 27</td>
              <td className="border border-gray-300 px-4 py-2">Великий привідний м`яз</td>
              <td className="border border-gray-300 px-4 py-2">Поясничний м`яз, повздовжня, верхня порція трапеції</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Кохання</td>
              <td className="border border-gray-300 px-4 py-2">&#8547; міжреберря, над соском</td>
              <td className="border border-gray-300 px-4 py-2">Передпліччя</td>
              <td className="border border-gray-300 px-4 py-2">Кравецький, тонка, ВКМ,СКМ, привідні, грушоподібна</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Лють</td>
              <td className="border border-gray-300 px-4 py-2">Зовнішний кут очей</td>
              <td className="border border-gray-300 px-4 py-2">Іліотибіальний тракт</td>
              <td className="border border-gray-300 px-4 py-2">Підколінний м`яз</td>             
            </tr>
            <tr className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">Гнів</td>
              <td className="border border-gray-300 px-4 py-2">&#8549; Міжребер`я</td>
              <td className="border border-gray-300 px-4 py-2">Довгий привідний м`яз</td>
              <td className="border border-gray-300 px-4 py-2">Грудинна порція ВГМ, Ромбовидні</td>             
            </tr>
            <tr className="even:bg-green-100">
              <td className="border border-gray-300 px-4 py-2">Радість</td>
              <td className="border border-gray-300 px-4 py-2">Кінець бров</td>
              <td className="border border-gray-300 px-4 py-2">Середина тріцебса</td>
              <td className="border border-gray-300 px-4 py-2">Мала кругла, підосний м`яз</td>             
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Emotions;