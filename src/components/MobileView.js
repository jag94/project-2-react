import React from 'react';

class MobileView extends React.Component {
    state = {
        mobile: '',
    }

    handleChange = (event) => {
        this.setState({mobile: event.target.value});
    }

    handleInputChanges(e, change) {
        this.props.onChange(change);
        this.setState({mobile: e.target.value});
        e.preventDefault();
        this.props.onChange(change);
    }

    render() {
        return (
            <div className="drop-con">
                <form className="task-input form-group mobile-form" onInput={this.handleChange}>
                        <select className="form-con" name="mobile" id="typeFiltering" value={this.state.value} onChange={(e) => this.handleInputChanges(e, this.state.mobile)} >
                            <option value="ToDo"> To Do </option>
                            <option value="InProgress"> In-progress </option>
                            <option value="Review"> Review </option>
                            <option value="Done"> Done </option>
                        </select>
                </form>
            </div>
        );
    }
}

export default MobileView;