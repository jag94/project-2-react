import React from 'react';
import Card from './Card'

const Tasks = props => {
    return (
            <Card id="card-1" className="card" draggable="true">
                <div className="name">{ props.task.title }</div>
                <div className="id"> Task ID: { props.task.id }</div>
                <div className="type"> Type: { props.task.type }</div>

            </Card>
    )
};

export default Tasks;