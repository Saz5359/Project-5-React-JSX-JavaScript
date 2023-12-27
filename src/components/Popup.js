import React from "react";
import { useEffect } from "react";
import { checkWin } from "../helpers/helpers";

//This component checks to see if the user won or lost and displays different messages accordingly
function Popup({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain,
}) {
  let finalMessage = "";
  let finalMessageRevealWord = "";
  let playable = true;

  //If the helper function returns a win then a message is displayed and
  //playable is set to false which means the user cannot play anymore
  if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
    finalMessage = "Congratulations! You won! 😃";
    playable = false;
  } //If the helper function returns a lose the the message is returned and
  //the actual word is revealed to the user
  else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
    finalMessage = "Unfortunately you lost. 😕";
    finalMessageRevealWord = `... the word was: ${selectedWord}`;
    playable = false;
  }

  //The playable is set to stop the game or continue the game
  useEffect(() => setPlayable(playable));

  return (
    <>
      <div
        className="popup-container"
        style={finalMessage != "" ? { display: "flex" } : {}}
      >
        <div className="popup">
          <h2>{finalMessage}</h2>
          <h3>{finalMessageRevealWord}</h3>
          <button onClick={playAgain}>Play Again</button>
        </div>
      </div>
    </>
  );
}

export default Popup;
