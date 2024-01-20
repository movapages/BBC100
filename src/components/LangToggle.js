import {langSet} from "../store";
import {useState} from "react";
const LangToggle = () => {
  const [curLang, setCurLang] = useState(langSet.getValue());

  const toggleLanguage = (e) => {
    let curLangSet = {eng: false, ukr: false};
    (e.target.value === 'ukr') && (curLangSet = {eng: false, ukr: true});
    (e.target.value === 'eng') && (curLangSet = {eng: true, ukr: false});
    langSet.next(curLangSet)
    setCurLang(curLangSet);
  };

  return (
    <main className="grid min-h-fit w-48 place-items-center">
      <div className="grid w-[8rem] grid-cols-2 rounded-xl bg-gray-100 p-1">
        <div>
          <input onChange={toggleLanguage}
            type="radio" name="option" id="1" value="ukr" className="peer hidden" checked={curLang.ukr}/>
          <label
            htmlFor="1"
            className="block cursor-pointer select-none rounded-xl p-0 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
            ukr
          </label>
        </div>
          <div>
            <input onChange={toggleLanguage}
              type="radio" name="option" id="2" value="eng" className="peer hidden" checked={curLang.eng}/>
            <label
              htmlFor="2"
              className="block cursor-pointer select-none rounded-xl p-0 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
              eng
            </label>
          </div>
      </div>
    </main>
  );
};

export default LangToggle;