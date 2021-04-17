import React from 'react';
import Tasks from './Tasks';
import "../App.css";

class TodoMobile extends React.Component {

    cardOver = (task, move) => {
        const taskID = this.props.tasks.findIndex(t => t.id === task.id);
        let tempList = this.props.tasks;
        let taskColumn = tempList[taskID]["column"];

        if (taskColumn === "todo" && move === 'right'){
            tempList[taskID]["column"] = "in-progress";
        }

        this.props.onUpdateTaskList(tempList);
    }

    render() {

        const todoTask = this.props.todos.map(dos => {
            return <Tasks
                task={dos}
                key={dos.id}
                column={dos.column}
                cardOver={this.cardOver}
            />
        });

        return (
            <div className="TodoMobile  over-board">
                <main className="flexbox">
                    <div id="board-1" className="board">
                        <h2> To Do </h2>
                        { todoTask }
                    </div>
                </main>
            </div>
        )
    }
}

export default TodoMobile;