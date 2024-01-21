import {langSet} from "../store";
import {useEffect, useState} from "react";
const LangToggle = () => {
  const [curLang, setCurLang] = useState(langSet.getValue());

  useEffect(() => {
    const langSub = langSet
      .subscribe( language => {
        setCurLang(language);
      });
    return langSub.unsubscribe();
  }, []);

  const toggleLanguage = (e) => {
    let curLangSet = {eng: false, ukr: false};
    (e.currentTarget.value === 'ukr') && (curLangSet = {eng: false, ukr: true});
    (e.currentTarget.value === 'eng') && (curLangSet = {eng: true, ukr: false});
    langSet.next(curLangSet);
    setCurLang(curLangSet);
  };

  return (
    <main className="grid min-h-fit w-48 place-items-center">
      <div className="grid w-[8rem] grid-cols-2 rounded-xl bg-blue-100 p-1">
        <div>
          <input onChange={event => toggleLanguage(event)}
            type="radio" name="language" id="1" value="ukr" className="peer hidden" checked={curLang.ukr}/>
          <label
            htmlFor="1"
            className="block cursor-pointer select-none rounded-xl p-0 text-center peer-checked:bg-blue-800 peer-checked:font-bold peer-checked:text-white">
            ukr
          </label>
        </div>
          <div>
            <input onChange={event => toggleLanguage(event)}
              type="radio" name="language" id="2" value="eng" className="peer hidden" checked={curLang.eng}/>
            <label
              htmlFor="2"
              className="block cursor-pointer select-none rounded-xl p-0 text-center peer-checked:bg-blue-800 peer-checked:font-bold peer-checked:text-white">
              eng
            </label>
          </div>
      </div>
    </main>
  );
};

export default LangToggle;