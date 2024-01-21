import {getCurrentJson} from "../../store";

const FullTitleListComponent = (props) => {
  const {titles, currentLanguage} = props;
  const jsxTitleList = [];
  const pickDialogHandler = (key) => {
    getCurrentJson(key);
  };
  if (titles) {
    for (const titleObject of titles) {
      for (const [key, title] of Object.entries(titleObject)) {
        jsxTitleList.push(
          <li onClick={() => pickDialogHandler(key)}
              className="hover:bg-blue-100 cursor-pointer list-decimal even:bg-white odd:bg-blue-50 p-1" key={key}>
            <span className="text-blue-800">{title[currentLanguage]}</span>
          </li>
        )
      }
    }
  }
  return <ol className="mt-2.5 text-blue-800">{jsxTitleList}</ol>;
};

export default FullTitleListComponent;