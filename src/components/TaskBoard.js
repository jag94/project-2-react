import React from 'react';
import Tasks from './Tasks';
import Board from "./Board";
import Card from "./Card";
import "../App.css";

class TaskBoard extends React.Component {

    render() {
        const taskItems = this.props.tasks.map(task => {
            return <Tasks
                task={task}
                key={task.id}
                column={task.column}
            />
        });

        return (
            <div className="TaskBoard">
                <main className="flexbox">
                    <Board id="board-1" className="board">
                        <h2> To Do </h2>
                        { taskItems.column }
                    </Board>
                    <Board id="board-2" className="board">
                        <h2> In Progress </h2>

                    </Board>
                    <Board id="board-3" className="board">
                        <h2> Review </h2>

                    </Board>
                    <Board id="board-4" className="board">
                        <h2> Done </h2>

                    </Board>
                </main>
            </div>
        )
    }
}
    /*sepData() {
        const sepObj = taskItem => {
            const res = [];
            const keys = Object.keys(taskItem);
            keys.forEach(key => {
                res.push({
                    key: taskItem[key]
                });
            });
            return res;
        }
    }*/

    /*render() {
        const taskItems = this.props.tasks.map(task => {
            return <Tasks
                task={task}
                key={task.id}
            />
        });

        return (
            <div>
                <div className="container">
                    <div className="task-list">
                        <div className="list-headers">
                            <h2 className="td"> To Do </h2>
                        </div>
                        <div className="list-headers">
                            <h2 className="inp"> In Progress </h2>
                        </div>
                        <div className="list-headers">
                            <h2 className="rev"> Review </h2>
                        </div>
                        <div className="list-headers">
                            <h2 className="fin"> Done </h2>
                        </div>
                        <div className="card-container">
                            { taskItems }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
*/


/*<div className="list-items">
    <button type="button" onClick={() => props.markDone(props.task)} className="btn btn-primary" style={{float: 'right'}}>
        Done
    </button>
</div> */

export default TaskBoard;