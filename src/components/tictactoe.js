import Section from './section'
import { Link } from "react-router-dom";


function TicTacToe() {

  
  return (
    <div className="TicTacToe">
      <Link to="/tictactoeHelp" class="startGame">Help</Link>
      <table className="tableXO">
        <tbody>
          <tr className="row1">
            <td className="column1"><Section/></td>
            <td className="column2"><Section/></td>
            <td className="column3"><Section/></td>
          </tr>
          <tr className="row2">
            <td className="column1"><Section/></td>
            <td className="column2"><Section/></td>
            <td className="column3"><Section/></td>
          </tr>
          <tr className="row3">
            <td className="column1"><Section/></td>
            <td className="column2"><Section/></td>
            <td className="column3"><Section/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TicTacToe;