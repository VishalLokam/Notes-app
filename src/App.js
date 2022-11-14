import React from "react";
import Header from "./components/Header"
import Note from "./components/Note"

function App() {
    const [notesArray, setNotesArray] = React.useState(["first note", "Second note"])

    const noteElements = notesArray.map(note => (
        <Note noteText={note}/>
    ))
        return (
        <div className="App">
            <Header />
            {noteElements}
        </div>
    );
}

export default App;
