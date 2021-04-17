import React from 'react';
import "../App.css"

const Tasks = props => {
    return (
            <div id="card-1" className="card" draggable="false">
                <div className="name">{ props.task.title }</div>
                <div className="id"> Task ID: { props.task.id }</div>
                <div className="type"> Type: { props.task.type }</div>
                <div className="control-move"> { props.task.column !== "todo" ? (
                    <button type="button"
                            onClick={() => props.cardOver(props.task, 'left')}
                            className="btn-move">
                        Previous
                    </button>
                ) : null }
                { props.task.column !== "done" ? (
                    <button type="button"
                            onClick={() => props.cardOver(props.task, 'right')}
                            className="btn-move">
                        Next
                    </button>
                ) : null } </div>
            </div>
    )
};

export default Tasks;