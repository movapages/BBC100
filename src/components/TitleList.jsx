import {useState} from "react";
import LangToggle from "./LangToggle";
import {jsonTitleList, langSet, readJsonTitles} from "../store";
import {useEffect} from "react";
import FullTitleListComponent from "./TitleList/FullTitleListComponent";

readJsonTitles();
const TitleList = () => {
  const [fullTitleList, setFullTitleList] = useState(jsonTitleList.getValue());
  const [currentLanguage, setCurrentLanguage] = useState(1);
  // const [currentLanguage, setCurrentLanguage] = useState(langSet.getValue().eng ? 0 : 1);

  console.log(">>>CURRENTLANGUAGE<<<", currentLanguage);

  useEffect(() => {
    const langSub = langSet
      .subscribe(language => {
        setCurrentLanguage((language.eng ? 0 : 1));
        console.log('LANGUAGE: ', language);
        console.log('LANGUAGE-currentLanguage: ', currentLanguage);
      });
    return langSub.unsubscribe();
  }, [currentLanguage]);

  return (
    <div className="text-blue-500 text-xl min-w-fit">
      <LangToggle />
      <FullTitleListComponent titles={fullTitleList} currentLanguage={currentLanguage} />
    </div>
  );
};

export default TitleList;