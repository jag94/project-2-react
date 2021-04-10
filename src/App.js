//import logo from './logo.svg';
import './App.css';

import React from 'react';
import axios from 'axios';

import TaskList from "./TaskList";
//anything else for imports

class App extends React.Component {
  state = {
    tasks: [], errorMessage: ''
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

  //onAddTask?

  onUpdateTaskList = (newTaskList) => {
    this.setState({ tasks: newTaskList});
  }

  //<Addtask onSubmit={this.onAddTask} />
  render() {
    return (
        <div className="container">

          <TaskList tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList} />
        </div>
    )
  }
}

/* function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h2>Hello</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
