import React from 'react';
import Card from './Card'
import "../App.css"

const Tasks = props => {
    return (
            <Card id="card-1" className="card" draggable="false">
                <div className="name">{ props.task.title }</div>
                <div className="id"> Task ID: { props.task.id }</div>
                <div className="type"> Type: { props.task.type }</div>
                <div> { props.task.column !== "ToDo" ? (
                    <button type="button"
                            onClick={() => props.cardOver(props.task, 0)}
                            className="btn-move">
                        Move Left
                    </button>
                ) : null }
                { props.task.column !== "Done" ? (
                    <button type="button"
                            onClick={() => props.cardOver(props.task, 1)}
                            className="btn-move">
                        Move Right
                    </button>
                ) : null } </div>
            </Card>
    )
};

export default Tasks;