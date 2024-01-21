const CurrentDialogText = (props) => {
  const {dialog} = props;

  const jsxDialog = [];
  if (dialog) {
    const [engDialog, ukrDialog] = [dialog.D.e, dialog.D.u];
    for (let i = 0; i < engDialog.length; i++ ) {
      for (const [key, phrase] of Object.entries(engDialog[i])) {
        jsxDialog.push(
          <div key={key} className="pl-8 border-b border-b-white">
            <div className="text-[18px] text-blue-700">{phrase}</div>
            <div className="text-[12px] text-gray-500 pl last:pb-1">{ukrDialog[i][key]}</div>
          </div>
        )
      }
    }
  }
  return <div>{jsxDialog}</div>
};
export default CurrentDialogText;