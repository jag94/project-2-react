import React, { Component } from 'react';
import Tasks from "./Tasks";

class TaskBoard extends React.Component {
    render() {
        const taskItems = this.props.tasks.map(task => {
            return <Tasks
                task={task}

            />
        });

        return (
            "Blank"
        )
    }
};
/*<div className="list-items">
    <button type="button" onClick={() => props.markDone(props.task)} className="btn btn-primary" style={{float: 'right'}}>
        Done
    </button>
</div> */

export default TaskBoard;