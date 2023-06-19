// Function component for the letters buttons


function Letters(props) {
    

    return(
        <div id={props.letter}>
            <button className="letterButton" onClick={props.click}>{props.letter}</button>
            <div className="hidden">{props.letter}</div>
        </div>
    )
}

// Export Letters component
export default Letters