import React from "react"

export default function Note(props){
    return(
        <div className="note--wrapper">
            {props.noteText}
        </div>
    )
}