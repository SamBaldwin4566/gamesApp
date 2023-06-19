import { Link } from "react-router-dom";

// Function component to display the rules
function TicTacToeHelp() {
    return(
        <div className="help">
            <Link to="/tictactoe" class="startGame">Back to game</Link>
            <h3>TIC TAC TOE RULES</h3>
            <ul>
                <li>Decide who wants to be X's and who wants to be 0's.</li>
                <li>Alternate turns with X's going first. With the aim of getting 3 in a row horizontally, vertically or diagonally</li>
                <li>The game ends when either one player is successful or there are no places left on the grid.</li>
            </ul>
        </div>
        
    )
}

// Export Help component
export default TicTacToeHelp