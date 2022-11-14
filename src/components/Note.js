import React from "react"

export default function Note(props){
    return(
        <div className="note--wrapper">
        <input
            type="checkbox"
            checked={props.note.isChecked}
            onChange={props.handleChecked}
        />
            {props.note.noteValue}
        </div>
    )
}
