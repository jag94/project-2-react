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

  //onAddTask?

  onUpdateTaskList = (newTaskList) => {
    this.setState({ tasks: newTaskList});
  }

  onFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filteredTasks = () => {
    return this.state.tasks.filter(tasks => {
      if (this.state.filter === 'typeTask') {
        return tasks.type === 'task';
      }
      else if (this.state.filter === 'typeFeature') {
        return tasks.type === 'feature';
      }
      else {
        return tasks.type === 'bug';
      }
    })
  }

      //onTypeFilter =

  //<Addtask onSubmit={this.onAddTask} />
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
                <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} onFilter={this.filteredTasks()} />
              </div>
          )
        );
      case 'add':
        return (this.wrapPage((<AddTask />)));
      case 'grid':
        return (this.wrapPage((<TaskBoard />)));
      default:
        return (this.wrapPage(<h2>Try Again</h2>));
    }
  }
}

export default App;
