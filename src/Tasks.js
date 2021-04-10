import React from 'react';

const Tasks = props => {
    return (
        <div className="list-group-item">
            <div className="list-items">
                { props.task.title }
            </div>
            <div className="list-items">
                { props.task.column }
            </div>
            <div className="list-items">
                { props.task.type }
            </div>
            <div className="list-items">
                <button type="button" onClick={() => props.markDone(props.task)} className="btn btn-primary" style={{float: 'right'}}>
                    Done
                </button>
            </div>
        </div>
    )
};

export default Tasks;