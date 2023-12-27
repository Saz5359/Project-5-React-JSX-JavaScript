import React from "react";

//This component displays the correct letters
function Word({ selectedWord, correctLetters }) {
  //The selected word is split into an array and
  //mapped through if the correct letters array contains a letter
  //from the selected word then it is displayed else nothing is displayed
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ""}
          </span>
        );
      })}
    </div>
  );
}

export default Word;
