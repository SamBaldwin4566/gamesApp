import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/counter";


function Section() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

    let handleClick = (e) => {
        console.log(count)
        if (count%2 === 0){
            e.target.nextSibling.className = "reveal"
            e.target.className = "hidden"
        }
        else {
            e.target.nextSibling.nextSibling.className = "reveal"
            e.target.className = "hidden"
        }
        dispatch(increment())
        
    }


    return(
        <div>
            <button className="buttonXO" onClick={handleClick}></button>
            <div className="hiddenXO">X</div>
            <div className="hiddenXO">O</div>
        </div>
    )

}

export default Section