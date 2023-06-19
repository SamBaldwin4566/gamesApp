// Import all the components
import Heading from './components/heading';
import Landing from './components/landing';
import Hangman from './components/hangman';
import HangmanHelp from './components/hangmanRules';
import TicTacToe from './components/tictactoe'
import TicTacToeHelp from './components/tictactoeRules';


// Import the styles
import './App.css';

import { Routes, Route } from "react-router-dom";




// Create a function component for App
function App() {

  

  return(
    <div className ="App">
      <Heading />
      <Routes>
        <Route exact path="/" element= {<Landing />}/>
        <Route exact path="/hangman" element= {<Hangman />}/>
        <Route exact path="/hangmanHelp" element= {<HangmanHelp />}/>
        <Route exact path="/tictactoe" element= {<TicTacToe />}/>
        <Route exact path="/tictactoeHelp" element= {<TicTacToeHelp />}/>
        
      </Routes>
    </div>
  )
}

// Export the component 
export default App