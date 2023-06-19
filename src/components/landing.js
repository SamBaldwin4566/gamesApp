import { Link } from "react-router-dom";
import hangmanButton from "../hangmandrawings/state8.GIF"
import tictactoeButton from "../hangmandrawings/XO-Screenshot.png"


// Function component for a link to begin the game
function Landing() {
   

    return(
        <div>
            <Link to="/hangman" className="gameButton"><img src={hangmanButton} className="gameImage"></img></Link>
            <Link to="/tictactoe" className="gameButton"><img src={tictactoeButton} className="gameImage"></img></Link>
        </div>
        )
}

// Export the landing component
export default Landing