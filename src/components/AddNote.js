import React from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import uniqid from 'uniqid';

export default function AddNote(props){
    const [newNote, setNewNote] = React.useState("")

    function handleChange(event){
        const {value} = event.target
        setNewNote(value)
    }

    function handleSubmit(event){
        event.preventDefault()
        props.setNotesArray(prevNotes=>(
            [...prevNotes, {id:uniqid(),noteValue:newNote,isChecked:false}]
        ))
    }

    return(

        <Popup trigger={<button>Add new note...</button>} position="right center">
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Type your note here..."
                    type="text"
                    value={newNote}
                    name="noteValue"
                    onChange={handleChange}
                />
                <button>Submit</button>
                </form>
        </Popup>

    )
}
