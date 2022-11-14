import React from "react";
import Header from "./components/Header"
import Note from "./components/Note"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import uniqid from 'uniqid';

function App() {
    const [notesArray, setNotesArray] = React.useState([])
    const [newNote, setNewNote] = React.useState({
        id:"",
        noteValue:""
    })


    function handleChange(event){
        const {value} = event.target
        setNewNote({
            id:uniqid(),
            noteValue:value
        })
    }

    function handleAddNote(event){
        event.preventDefault()
        setNotesArray(prevNotes=>(
            [...prevNotes, newNote]
        ))

        console.log(notesArray)
    }

    const noteElements = notesArray.map(note => (
        <Note note={note}/>
    ))

    return (
        <div className="App">
            <Header />

            <Popup trigger={<button> Trigger</button>} position="right center">
                <form onSubmit={handleAddNote}>
                    <input
                        placeholder="Type your note here..."
                        type="text"
                        value={newNote}
                        name="newNote"
                        onChange={handleChange}
                    />
                    <button>Submit</button>
                    </form>
            </Popup>



            {noteElements}
        </div>
    );
}

export default App;
