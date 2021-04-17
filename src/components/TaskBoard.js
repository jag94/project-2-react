import React from 'react';
import Tasks from './Tasks';
import Card from "./Card";
import "../App.css";

class TaskBoard extends React.Component {


    cardOver = (task, over) => {
        const taskID = this.props.tasks.findIndex(e => e.id === task.id);
        let tempList = this.props.tasks;
        let column = tempList[taskID]["column"];

        // functionality for the right moving buttons
        if (column === 'todo' && over === 'right') {
            tempList[taskID]["column"] = 'in-progress';
        }
        else if (column === 'in-progress' && over === 'right') {
            tempList[taskID]["column"] = 'review';
        }
        else if (column === 'review' && over === 'right') {
            tempList[taskID]["column"] = 'done';
        }

        // functionality for the left moving buttons
        if (column === 'in-progress' && over === 'left'){
                tempList[taskID]["column"] = 'todo';
        }
        else if (column === 'review' && over === 'left'){
                tempList[taskID]["column"] = 'in-progress';
        }
        else if (column === 'done' && over === 'left') {
            tempList[taskID]["column"] = 'review';
        }

        this.props.onUpdateTaskList(tempList);
    }

    render() {
        const todoTask = this.props.todos.map(task => {
            return <Tasks
                task={task}
                key={task.id}
                column={task.column}
                cardOver={this.cardOver}
            />
        });

        const revTask = this.props.revs.map(task => {
                return <Tasks
                    task={task}
                    key={task.id}
                    column={task.column}
                    cardOver={this.cardOver}
                />
        });

        const inpTask = this.props.inps.map(task => {
                return <Tasks
                    task={task}
                    key={task.id}
                    column={task.column}
                    cardOver={this.cardOver}
                />
        });

        const doneTask = this.props.dones.map(task => {
                return <Tasks
                    task={task}
                    key={task.id}
                    column={task.column}
                    cardOver={this.cardOver}
                />
        });

        return (
            <div className="TaskBoard">
                <main className="flexbox main-flex">
                    <div id="board-1" className="board">
                        <h2> To Do </h2>
                        { todoTask }
                    </div>
                    <div id="board-2" className="board">
                        <h2> In Progress </h2>
                        { inpTask }
                    </div>
                    <div id="board-3" className="board">
                        <h2> Review </h2>
                        { revTask }
                    </div>
                    <div id="board-4" className="board">
                        <h2> Done </h2>
                        { doneTask }
                    </div>
                </main>
            </div>
        )
    }
}

export default TaskBoard;