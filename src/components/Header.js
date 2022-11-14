import React from "react"

export default function Header(props){


    return (
        <div className="header--wrapper">
            <h3 className="header--app-name">Task Master</h3>
            <div className="header--counter-wrapper">
                <h4 className="header--task-pending-counter">Tasks pending: {props.taskPending}</h4>
                <h4 className="header--task-pending-counter">Tasks done: {props.taskDone}</h4>
            </div>
        </div>

    )
}
