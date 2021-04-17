import React from 'react';
import Tasks from './Tasks';
import Board from "./Board";
import "../App.css";

class ReviewMobile extends React.Component {

    render() {

        const revTask = this.props.revs.map(revs => {
            return <Tasks
                task={revs}
                key={revs.id}
                column={revs.column}
            />
        });

        return (
            <div className="ReviewMobile over-board">
                <main className="flexbox">
                    <Board id="board-1" className="board">
                        <h2> Review </h2>
                        { revTask }
                    </Board>
                </main>
            </div>
        )
    }
}

export default ReviewMobile;