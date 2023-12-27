import React from "react";

//This component returns the rules of the game
function Help() {
  return (
    <div className="help">
      <h2>Rules</h2>
      <ul>
        <li>Type a letter until you can guess the word</li>

        <li>Correct and wrong letters will be displayed</li>

        <li>
          Enough wrong letters result in the person being hanged and you lose
        </li>

        <li>
          if you can guess the word before the person is hanged then you win
        </li>
      </ul>
      <p>Find the hidden word - Enter a letter</p>
    </div>
  );
}

export default Help;
