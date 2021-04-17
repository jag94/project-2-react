import React from 'react';
import Tasks from './Tasks';
import "../App.css";

class ReviewMobile extends React.Component {

    cardOver = (task, move) => {
        const taskID = this.props.tasks.findIndex(t => t.id === task.id);
        let tempList = this.props.tasks;
        let taskColumn = tempList[taskID]["column"];

        if (taskColumn === "review" && move === 'right'){
            tempList[taskID]["column"] = "done";
        }
        else if (taskColumn === "review" && move === 'left'){
            tempList[taskID]["column"] = "in-progress";
        }

        this.props.onUpdateTaskList(tempList);
    }

    render() {

        const revTask = this.props.revs.map(revs => {
            return <Tasks
                task={revs}
                key={revs.id}
                column={revs.column}
                cardOver={this.cardOver}
            />
        });

        return (
            <div className="ReviewMobile over-board">
                <main className="flexbox">
                    <div id="board-1" className="board">
                        <h2> Review </h2>
                        { revTask }
                    </div>
                </main>
            </div>
        )
    }
}

export default ReviewMobile;