const CurrentDialogueTitle = (props) => {
  const {titles} = props;

  return (
    <div className="text-center border-b-4 border-b-white min-w-full max-w-fit pt-1 pl-3">
      <h3 className="prose prose-2xl prose-slate">{titles.title[0]}</h3>
      <h4 className="prose prose-sm prose-zinc">{titles.title[1]}</h4>
    </div>
  )
};

export default CurrentDialogueTitle;