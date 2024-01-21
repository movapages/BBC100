import {useEffect, useState} from "react";
import {currentJsonSubject} from "../store";
import CurrentDialogueTitle from "./currentDialogue/CurrentDialogueTitle";
import CurrentDialogText from "./currentDialogue/CurrentDialogText";


const CurrentDialogue = () => {
  const [curJsonFile, setCurJsonFile] = useState(currentJsonSubject.getValue());
  useEffect(() => {
    const curJsonSub = currentJsonSubject
      .subscribe((curFile) => {
        setCurJsonFile(curFile);
      });
    return () => {
      curJsonSub.unsubscribe();
    }
  }, []);

  return (
    <div
      className="text-blue-600 bg-gradient-to-b from-blue-100 to-transparent min-h-screen
      text-xl min-w-64 flex-1 border border-b-blue-100 rounded-b-sm bg-blue-50">
      <CurrentDialogueTitle titles={curJsonFile} />
      <CurrentDialogText dialog={curJsonFile} />
    </div>
  )
};

export default CurrentDialogue;