import {useEffect, useState} from "react";
import CurrentDialogueTitle from "./currentDialogue/CurrentDialogueTitle";
import CurrentDialogText from "./currentDialogue/CurrentDialogText";


const CurrentDialogue = () => {
  const [curJsonFile, setCurJsonFile] = useState({});
  // useEffect(() => {
  //   const curJsonSub = currentJsonSubject
  //     .subscribe((curFile) => {
  //       setCurJsonFile(curFile);
  //       console.log('CURFILE: ', curFile);
  //     });
  //   return curJsonSub.unsubscribe();
  // }, []);

  return (
    <div className="text-blue-600 text-xl min-w-64 flex-auto">
      <CurrentDialogueTitle titles={curJsonFile} />
      <CurrentDialogText dialog={curJsonFile} />
    </div>
  )
};

export default CurrentDialogue;