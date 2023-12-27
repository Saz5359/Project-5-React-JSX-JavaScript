//In this function shows the notification to the user
//When the user enters the same letter twice
//This function shows the notification for 2 seconds then closes it
export function show(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

//This function checks if the user won , lost or is still playing
//Based on what they are doing a status is sent which shows the users progress
//weather they have won ,lost or are still playing
export function checkWin(correct, wrong, word) {
  //status is set to win by default
  let status = "win";

  //check for win
  //if correct letters does not include a letter from the word
  //the it is not a win or a lose the user is still playing
  word.split("").forEach((letter) => {
    if (!correct.includes(letter)) {
      status = "";
    }
  });

  //check for lose
  //if the wrong word is the same length as the figure the its a lose
  if (wrong.length === 6) {
    status = "lose";
  }

  return status;
}
