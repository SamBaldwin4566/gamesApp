// Import letters component
import Letters from './letters';

import { useSelector, useDispatch } from "react-redux";

// Import the slice the update the state
import { updateImage } from '../store/hangmanImages';
import { createWord } from '../store/word'

import { Link } from "react-router-dom";






// Create a function for the game component
function Game() {

  // Base words incase the fetch takes a while to load 
  let wordList = ["monkey", "banana", "giraffe", "hello", "computer", "cheese", "frog", "house"]
  // Fetch the list of words from the dictionary txt file and convert into an array
  const wordFile = require("../dictionary.txt")
  fetch(wordFile)
    .then(response => response.text())
    .then(text => {
      wordList = text.split('\n')
    

    })

  

  
  // Assign variable and get the state from the store
  const hangmanImage = useSelector((state) => state.images)
  const hangmanWord = (useSelector((state) => state.createWord.newWord)).toUpperCase()
  const dispatch = useDispatch();

  
  // Function if a letter is clicked to change the style from a button
  const letterClick = (e) => {
    
    // Error handling 
    if(hangmanWord === "") {
      alert("Please click start")
    }
    else {
      // Create the variable for the counter to update the image
      let counter = hangmanImage.counter

      // Change styles of button once clicked
      e.target.className="buttonHide"
      e.target.nextSibling.className="clickedButton"
      // Increment the counter to update the image
      counter += 1
      // Create a variable to stop the counter updating if correct letter is selected
      let newCounter = counter - 1
      let hiddenLetters = document.querySelectorAll('.hideLetter')
      // If the counter is less than 11 the game continues
      if(counter < 11) {

        // Loop through hidden letters to check if they match the selected letter
        for(let i=0; i<hiddenLetters.length; i++) {
          
          if (e.target.innerText === hiddenLetters[i].id) {
            hiddenLetters[i].className = "correct"
            counter = newCounter
          } 
        }
        
        // Dispatch to update the image counter 
        dispatch(updateImage(counter))

        // If the final letter is clicked and correct game alerts you have won
        if ((hiddenLetters.length === 1) && (hiddenLetters[0].className === "correct" )) {
          return alert("YOU WIN!!!!")
        }
        // Error handling in case multiple of the same letter remains
        else if (hiddenLetters.length === 0) {
          return alert("YOU WIN!!!!")
        }
        
        
      }
      // The game has ended and alert the user has lose
      else {
        alert("YOU LOSE!")
        for(let i=0; i<hiddenLetters.length; i++) {
          hiddenLetters[i].className = "correct"
        }
      }
    }
  }


  // Create a function to generate a new word
  const generateWord = (e) => {
    e.target.innerText = "Generate New Word"
    
    // When button is pressed refresh all the letters to the original styles 
    let refresh1 = document.querySelectorAll('.hideLetter')
    for (let l=0; l<refresh1.length; l++) {
      refresh1[l].remove()
    }
    let refresh2 = document.querySelectorAll('.correct')
    for (let m=0; m<refresh2.length; m++) {
      refresh2[m].remove()
    }
      
      // Create a randomiser to choose a random index from the array of words
      let randomNumber = Math.floor(Math.random()*wordList.length)
      let randomWord = wordList[randomNumber]
      // dispatch update to refresh the image to the original
      dispatch(updateImage(0))
      let lettersButtons = document.querySelectorAll(".buttonHide")
      let clickedButtons = document.querySelectorAll(".clickedButton")

      
      for (let i=0; i<lettersButtons.length; i++){
        lettersButtons[i].className = "letterButton"
      }
      for (let j=0; j<clickedButtons.length; j++){
        clickedButtons[j].className = "hidden"
      }
      
      // Change the state of the word
      dispatch(createWord(randomWord))
      console.log(randomWord)
      
      // Create a new element to display the newly generated word with the letters hidden
      let displayWord = document.getElementById('displayWord')
      for (let k=0; k<hangmanWord.length; k++) {
        
        const letter = document.createElement('a')
        letter.innerHTML = hangmanWord[k]
        letter.id = hangmanWord[k]
        letter.className = "hideLetter"
        displayWord.appendChild(letter)
      } 
  }


  // Create array of alphabet
  let alphabet1 = ["A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K", "L", "M", "N","O", "P", "Q", "R", "S", "T", "U","V", "w", "X", "Y", "Z"]
  let alphabet2 = ["H", "I", "J", "K", "L", "M", "N"]
  let alphabet3 = ["O", "P", "Q", "R", "S", "T", "U"]
  let alphabet4 = ["V", "w", "X", "Y", "Z"]

  // Map through both arrays to display them using the Letters component
  let alpha1 = alphabet1.map((item, index) => (
    <td key={item + index}><Letters letter={item} click={letterClick}/></td>
  ))
  // let alpha2 = alphabet2.map((item,index) => (
  //   <td key={item + index}><Letters letter={item} click={letterClick}/></td>
  // ))
  // let alpha3 = alphabet3.map((item, index) => (
  //   <td key={item + index}><Letters letter={item} click={letterClick}/></td>
  // ))
  // let alpha4 = alphabet4.map((item,index) => (
  //   <td key={item + index}><Letters letter={item} click={letterClick}/></td>
  // ))


  // Return the component display
  return (
    
    <div className="Game">
      <Link to="/hangmanHelp" class="startGame">Help</Link>
      
      <div id="hangmanMainPage">
        
        <div id="word">
          <div id="image">
            <img id="hangmanImage" src={hangmanImage.image} alt="Hangman"/>
          </div>
          
          <div id="displayWord"></div>
        </div>
        

        <div id="keypad">
          
          <button id="generate" onClick={generateWord}>Start</button>

          <div className="letters">
            {alpha1}
          </div>

          {/* <table>
            <tbody>
              <tr>
                {alpha1}
              </tr>
              <tr>
                {alpha2}
              </tr>
              <tr>
                {alpha3}
              </tr>
              <tr>
                {alpha4}
              </tr>
            </tbody>
          </table> */}

          
        </div>
        
        
      </div>

    </div>
  );

}



// Export the component
export default Game;