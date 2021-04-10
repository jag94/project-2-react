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
            return <Tasks task={task} key={task.id} markDone={this.markDone} />
        });

        return (
            <div>
                <div className="task-list list-group">
                    { taskItems }
                </div>
            </div>
        )
    }
}

export default TaskList;