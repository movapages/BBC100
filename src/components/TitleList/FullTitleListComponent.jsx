const FullTitleListComponent = (props) => {
  const {titles, currentLanguage} = props;
  const jsxTitleList = [];
  if(titles) {
    for (const titleObject of titles) {
      for (const [key, title] of Object.entries(titleObject)) {
        jsxTitleList.push(
          <li className="list-decimal even:bg-white odd:bg-blue-50 p-1" key={key}>
            <span className="text-blue-95000">{title[currentLanguage]}</span>
          </li>
        )
      }
    }
  }
  return <ol className="mt-2.5 text-blue-800">{jsxTitleList}</ol>;
};

export default FullTitleListComponent;