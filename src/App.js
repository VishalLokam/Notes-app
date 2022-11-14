import React from "react";
import Header from "./components/Header"
import Note from "./components/Note"
import AddNote from "./components/AddNote"


function App() {
    const [notesArray, setNotesArray] = React.useState([])
    const [taskPending, setTaskPending] = React.useState(notesArray.length)
    const [taskDone, setTaskDone] = React.useState(0)

    function handleChecked(id){
        setNotesArray(prevNotes => {
            const newArray = prevNotes.filter(note => note.id !== id)
            return newArray
        })

        setTaskDone(prevNotes=>(prevNotes+1))
    }


    React.useEffect(()=>{
        setTaskPending(notesArray.length)
    }, [notesArray])

    const noteElements = notesArray.map(note => (
        <Note key={note.id} note={note} handleChecked={()=>handleChecked(note.id)}/>
    ))

    console.log(`Task pending ${taskPending}  Task done ${taskDone}`)
    return (
        <div className="App">
            <Header taskPending={taskPending} taskDone={taskDone}/>
            <AddNote setNotesArray={setNotesArray}/>
            <div className="app--notes-wrapper">
                {noteElements}
            </div>
        </div>
    );
}

export default App;
