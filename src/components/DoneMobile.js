import React from 'react';
import Tasks from './Tasks';
import "../App.css";

class DoneMobile extends React.Component {

    moveTask = (task, move) => {
        const taskID = this.props.tasks.findIndex(t => t.id === task.id);
        let tempList = this.props.tasks;
        let taskColumn = tempList[taskID]["column"];

        if (taskColumn === "done" && move === 'left'){
            tempList[taskID]["column"] = "review";
        }

        this.props.onUpdateTaskList(tempList);
    }

    render() {

        const doneTask = this.props.dones.map(dones => {
            return <Tasks
                task={dones}
                key={dones.id}
                column={dones.column}
                moveTask={this.moveTask}
            />
        });

        return (
            <div className="DoneMobile over-board">
                <main className="flexbox">
                    <div id="board-1" className="board">
                        <h2> Done </h2>
                        { doneTask }
                    </div>
                </main>
            </div>
        )
    }
}

export default DoneMobile;