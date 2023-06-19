import { Link } from "react-router-dom";

// Function component to display the rules
function HangmanHelp() {
    return(
        <div className="help">
            <Link to="/hangman" class="startGame">Back to game</Link>
            <h3>HANGMAN RULES</h3>
            <ul>
                <li>Click begin game to start the game.</li>
                <li>You need to generate a new word before you can begin.</li>
                <li>Once you have generated a word start guessing letters!</li>
                <li>If you make a correct guess the letter(s) will reveal themselves.</li>
                <li>However each time you make an incorrect guess the hangman drawing will be added to!</li>
                <li>Try to finish off the word before the image is complete to win!!!</li>
            </ul>
        </div>
        
    )
}

// Export Help component
export default HangmanHelp