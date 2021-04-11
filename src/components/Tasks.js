import React from 'react';

const Tasks = props => {
    return (
        <div className="list-group-item">
            <div className="list-items name">
                { props.task.title }
            </div>
            <div className="list-items status">
                { props.task.column }
            </div>
            <div className="list-items type">
                { props.task.type }
            </div>
        </div>
    )
};

export default Tasks;