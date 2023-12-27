import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Notification from "./components/Notification";
import Popup from "./components/Popup";
import { useState, useEffect } from "react";
import { show } from "./helpers/helpers";
import Help from "./components/Help";

//These are the dictionary words which the user has to find
const words = ["application", "programming", "interface", "wizard"];

//A word is selected randomly
let selectedWord = words[Math.floor(Math.random() * words.length)];

//This variable states weather the game is ongoing or not
let playable = true;

const correctLetters = [];
const wrongLetters = [];

function App() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  //This useEffect handles user input
  useEffect(() => {
    const handleKeydown = (event) => {
      //The key and keycode from the event are stored
      const { key, keyCode } = event;

      //If the game is playable and the keycode is a letter key then the
      //letter is stored in a variable
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          //If the entered letter is correct and that letter is not
          //in the correct letters array then it is added to the correctLetters array
          //else the letter is already in the correctLetters array so the notification is shown
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } //Else If the input letter is wrong and is not is the wrong letters array then it is
        //stored in the wrong letters array else it is already in the wrongLetters array so the
        //notification is shown
        else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((wrongLetters) => [...wrongLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  //this function resets the game when the play again button is clicked
  function playAgain() {
    setPlayable(true);

    //Empty array
    setCorrectLetters([]);
    setWrongLetters([]);

    //A new word is selected
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  return (
    <div>
      <Header />
      <Help />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </div>
  );
}

export default App;
