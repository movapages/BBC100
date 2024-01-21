import {useState} from "react";
import LangToggle from "./LangToggle";
import {jsonTitleList, langSet, readJsonTitles} from "../store";
import {useEffect} from "react";
import FullTitleListComponent from "./TitleList/FullTitleListComponent";

readJsonTitles();
const TitleList = () => {
  const [fullTitleList, setFullTitleList] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState(null);

  useEffect(() => {
    const jsonTitleListSub = jsonTitleList
      .subscribe((titles) => {
        setFullTitleList(titles);
      });
    const langSub = langSet
      .subscribe(language => {
        setCurrentLanguage((language.eng ? 0 : 1));
      });
    return () => {
      langSub.unsubscribe();
      jsonTitleListSub.unsubscribe();
    };
  }, []);

  return (
    <div className="text-blue-500 text-xl min-w-64 flex-1">
      <LangToggle />
      <FullTitleListComponent titles={fullTitleList} currentLanguage={currentLanguage} />
    </div>
  );
};

export default TitleList;