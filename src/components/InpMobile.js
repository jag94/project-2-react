import React from 'react';
import Tasks from './Tasks';
import "../App.css";

class InpMobile extends React.Component {

    cardOver = (task, move) => {
        const taskID = this.props.tasks.findIndex(t => t.id === task.id);
        let tempList = this.props.tasks;
        let taskColumn = tempList[taskID]["column"];

        if (taskColumn === "in-progress" && move === 'right'){
            tempList[taskID]["column"] = "review";
        }
        else if (taskColumn === "in-progress" && move === 'left'){
            tempList[taskID]["column"] = "todo";
        }

        this.props.onUpdateTaskList(tempList);
    }

    render() {

        const inpTask = this.props.inps.map(inps => {
            return <Tasks
                task={inps}
                key={inps.id}
                column={inps.column}
                cardOver={this.cardOver}
            />
        });

        return (
            <div className="InpMobile over-board">
                <main className="flexbox">
                    <div id="board-1" className="board">
                        <h2> In Progress </h2>
                        { inpTask }
                    </div>
                </main>
            </div>
        )
    }
}

export default InpMobile;