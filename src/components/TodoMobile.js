import React from 'react';
import Tasks from './Tasks';
import Board from "./Board";
import "../App.css";

class TodoMobile extends React.Component {

    render() {

        const todoTask = this.props.todos.map(dos => {
            return <Tasks
                task={dos}
                key={dos.id}
                column={dos.column}
            />
        });

        return (
            <div className="TodoMobile  over-board">
                <main className="flexbox">
                    <Board id="board-1" className="board">
                        <h2> To Do </h2>
                        { todoTask }
                    </Board>
                </main>
            </div>
        )
    }
}

export default TodoMobile;