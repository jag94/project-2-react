//import logo from './logo.svg';
import '../App.css';

import React from 'react';
import axios from 'axios';

import TaskList from "./TaskList";
import Pages from "./Pages";
import AddTask from "./AddTask";
import TaskBoard from "./TaskBoard";
//anything else for imports

//Constants


class App extends React.Component {
  state = {
    tasks: [], errorMessage: '', view: 'list', filter: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts').then(response => {
      this.setState({tasks: response.data});
    }).catch(error => {
      this.setState({ errorMessage: error.message});
    });
  }

  onViewChange(view) {
    this.setState({view});
  }

  wrapPage(jsx) {
    const { view } = this.state;
    return (
        <div className="container">
          <Pages currentView={view} onViewChange={this.onViewChange.bind(this)}/>
          {jsx}
        </div>
    )
  }

  onAddTask = (taskName, taskType) => {
    let tasks = this.state.tasks;
    tasks.push({
      title: taskName,
      id: this.state.tasks.length + 1,
      type: taskType,
      column: 'todo'
    });

    this.setState({ tasks });
    this.onViewChange('list');
  }

  onUpdateTaskList = (newTaskList) => {
    this.setState({ tasks: newTaskList});
  }

  render() {
    const { view } = this.state;

    switch (view) {
      case 'list':
        return (this.wrapPage(
                <div>
                  <div>
                    Filter by Type: &nbsp;
                    <select id="typeFiltering" onChange={this.onFilter}>
                      <option value="typeTask"> Task </option>
                      <option value="typeFeature"> Feature </option>
                      <option value="typeBug"> Bug </option>
                    </select>
                  </div>
                <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
              </div>
          )
        );
      case 'add':
        return (this.wrapPage((<AddTask onSubmit={this.onAddTask} />)));
      case 'grid':
        return (this.wrapPage((<TaskBoard />)));
      default:
        return (this.wrapPage(<h2>Try Again</h2>));
    }
  }
}

export default App;
