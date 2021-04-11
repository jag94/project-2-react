import React from 'react';

class AddTask extends React.Component {
    state = {
        newTask: '', newType: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.newTask);
        this.setState({ newTask: '' })
    }

    render() {
        return (
            <div>
                <h2>
                    Add a New Task
                </h2>
                <form className="task-input form-group" onSubmit={this.onFormSubmit}>
                    <label htmlFor="taskTitle">Title</label>
                    <input type="text" className="form-control"
                           name="taskTitle"
                           value={this.state.newTask}
                           onChange={(e) => this.setState({ newTask: e.target.value })} />
                    <label htmlFor="taskType"> Type </label>
                    <input type="text" className="form-control"
                           name="taskType"
                           value={this.state.newType}
                           onChange={(e) => this.setState({ newTask: e.target.value })} />

                    <button type="button"
                            onClick={() => props.markDone(props.task)}
                            className="btn btn-primary" style={{ float: 'right' }}>
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default AddTask;