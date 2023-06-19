import { Link } from "react-router-dom";
import { updateImage } from '../store/hangmanImages';
import { useDispatch } from "react-redux";




// Create a function component for the heading including navigation links to other components
function Heading() {
    
    const dispatch = useDispatch();

    // Create a function to reset the image 
    function reset(){
        dispatch(updateImage(0))
    }


    return(
        <div id="heading">
            
            <h1 >My Games App</h1>
            <Link to="/" className="homeLink" onClick={reset}><h2>Home</h2></Link>
            <nav>
                
                {/* <Link to="/help" className="link">Help</Link> */}
            </nav>
        </div>
    )
}

// Export the heading function
export default Heading