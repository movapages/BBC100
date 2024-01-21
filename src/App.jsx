import TitleList from './components/TitleList';
import CurrentDialogue from './components/CurrentDialogue';
import {getCurrentJson} from "./store";


getCurrentJson();
function App() {
  return (
    <div className="font-alice flex-col justify-start w-full min-h-screen">
      <h3 className="bg-gradient-to-r from-blue-100 text-blue-800 text-3xl mb-8 mt-4 w-full p-1 rounded-sm">
        БіБіСі Діалоги &brvbar; <small className="text-xl text-blue-300">BBC Dialogues</small>
      </h3>
      <div className="flex flex-row gap-1 w-full ml-6 min-h-full">
        <TitleList />
        <CurrentDialogue />
      </div>
    </div>
  );
}

export default App;
