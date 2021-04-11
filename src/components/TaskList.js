import React from 'react';
import Tasks from './Tasks';

class TaskList extends React.Component {

    markDone = (task) => {
        const taskIndex = this.props.tasks.findIndex(t => t.id === task.id);
        let taskList = this.props.tasks;
        taskList.splice(taskIndex, 1);
        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }


    render() {
        const taskItems = this.props.tasks.map(task => {
            return <Tasks
                task={task}
                key={task.id}
                markDone={this.markDone}
                filterStatus={task.column}
                filterType={task.type}
            />
        });

        return (
            <div>
                <div className="container">
                <div className="task-list">
                    <div className="list-headers">
                        <h2 className="name"> Title </h2>
                        <h2 className="status"> Status </h2>
                        <h2 className="type"> Type </h2>
                    </div>
                    <div className="list-group">
                        { taskItems }
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default TaskList;