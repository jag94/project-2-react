import React from 'react';
import Tasks from './Tasks';
import Board from "./Board";
import "../App.css";

class InpMobile extends React.Component {

    render() {

        const inpTask = this.props.inps.map(inps => {
            return <Tasks
                task={inps}
                key={inps.id}
                column={inps.column}
            />
        });

        return (
            <div className="InpMobile over-board">
                <main className="flexbox">
                    <Board id="board-1" className="board">
                        <h2> In Progress </h2>
                        { inpTask }
                    </Board>
                </main>
            </div>
        )
    }
}

export default InpMobile;