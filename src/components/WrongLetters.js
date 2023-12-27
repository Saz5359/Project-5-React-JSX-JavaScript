import React from "react";

//This component displays the wrong letters
function WrongLetters({ wrongLetters }) {
  //If there are no wrong letters then nothing is displayed
  //The wrong letters are looped through and displayed
  //a span is added to each letter which will be separated by a coma using
  //the reduce method
  return (
    <>
      <div className="wrong-letters-container">
        <div>
          {wrongLetters.length > 0 && <p>Wrong Letters</p>}
          {wrongLetters
            .map((letter, i) => <span key={i}>{letter}</span>)
            .reduce(
              (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
              null
            )}
        </div>
      </div>
    </>
  );
}

export default WrongLetters;
