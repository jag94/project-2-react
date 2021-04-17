import React from 'react';
import Tasks from './Tasks';
import Board from "./Board";
import "../App.css";

class DoneMobile extends React.Component {

    render() {

        const doneTask = this.props.dones.map(dones => {
            return <Tasks
                task={dones}
                key={dones.id}
                column={dones.column}
            />
        });

        return (
            <div className="DoneMobile over-board">
                <main className="flexbox">
                    <Board id="board-1" className="board">
                        <h2> Done </h2>
                        { doneTask }
                    </Board>
                </main>
            </div>
        )
    }
}

export default DoneMobile;