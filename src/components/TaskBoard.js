import React from 'react';
import Tasks from './Tasks';
import Board from "./Board";
import Card from "./Card";
import "../App.css";

class TaskBoard extends React.Component {


    cardOver = (task, over) => {
        const taskItem = this.props.tasks.findIndex(e => e.id === task.id);
        let taskList = this.props.tasks;
        let column = taskList[taskItem]["column"];

        if (column === 'todo' && over === 1) {
            taskList[taskItem]["column"] = 'in-progress';
        }

        if (column === 'in-progress' && over === 1) {
            taskList[taskItem]["column"] = 'review';
        }
            else if (column === 'in-progress' && over === 0){
                taskList[taskItem]["column"] = 'todo';
        }

        if (column === 'review' && over === 1) {
            taskList[taskItem]["column"] = 'done';
        }
            else if (column === 'review' && over === 0){
                taskList[taskItem]["column"] = 'in-progress';
        }

        if (column === 'done' && over === 0) {
            taskList[taskItem]["column"] = 'review';
        }

        console.log(this.props);
        this.props.onUpdateTaskList(taskList);
    }

    render() {
        const todoTask = this.props.todos.map(task => {
            if (task.column === 'todo') {
            return <Tasks
                task={task}
                key={task.id}
                column={task.column}
                cardOver={this.cardOver}
            />}
        });

        const revTask = this.props.revs.map(task => {
            if (task.column === 'review') {
                return <Tasks
                    task={task}
                    key={task.id}
                    column={task.column}
                    cardOver={this.cardOver}
                />}
        });

        const inpTask = this.props.inps.map(task => {
            if (task.column === 'in-progress') {
                return <Tasks
                    task={task}
                    key={task.id}
                    column={task.column}
                    cardOver={this.cardOver}
                />}
        });

        const doneTask = this.props.dones.map(task => {
            if (task.column === 'done') {
                return <Tasks
                    task={task}
                    key={task.id}
                    column={task.column}
                    cardOver={this.cardOver}
                />}
        });

        return (
            <div className="TaskBoard">
                <main className="flexbox main-flex">
                    <Board id="board-1" className="board">
                        <h2> To Do </h2>
                        { todoTask }
                    </Board>
                    <Board id="board-2" className="board">
                        <h2> In Progress </h2>
                        { inpTask }
                    </Board>
                    <Board id="board-3" className="board">
                        <h2> Review </h2>
                        { revTask }
                    </Board>
                    <Board id="board-4" className="board">
                        <h2> Done </h2>
                        { doneTask }
                    </Board>
                </main>
            </div>
        )
    }
}

export default TaskBoard;