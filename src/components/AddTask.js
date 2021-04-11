import React from 'react';

class AddTask extends React.Component {
    state = {
        taskTitle: '',
        taskType: 'task',
    }

    handleInputChanges = (event) => {

        this.setState({
            [event.target.name]: event.target.value    });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.taskTitle, this.state.taskType);
        this.setState({ taskTitle: '', taskType: '' });
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
                           value={this.state.taskTitle}
                           onChange={this.handleInputChanges} />
                    <label htmlFor="taskType"> Type </label>
                    <select className="form-control" name="taskType" id="typeFiltering" onChange={this.handleInputChanges} >
                        <option value="task"> Task </option>
                        <option value="feature"> Feature </option>
                        <option value="bug"> Bug </option>
                    </select>

                    <button type="submit" className="btn btn-primary">
                        Add
                    </button>
                </form>
            </div>
        );
    }
}

export default AddTask;