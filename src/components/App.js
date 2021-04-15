// imports
import '../App.css';
import React from 'react';
import axios from 'axios';

import TaskList from "./TaskList";
import Pages from "./Pages";
import AddTask from "./AddTask";
import TaskBoard from "./TaskBoard";

//Constants
const LARGE_DESKTOP = 1366;
const SMALL_DESKTOP = 1024;
const TABLET = 768;

class App extends React.Component {
  state = {
    tasks: [],
    sortedTasks: [],
    errorMessage: '',
    view: 'grid',
    browserSize: 0,
    breakpoint: 'standard',
    singlePage: 'ToDo',

    todo: [],
    inp: [],
    review: [],
    done: []
  }

  componentDidMount() {
    this.getData();
    window.addEventListener('resize', this.sizeWindow);
    this.sizeWindow();
  }

  getData() {
    axios.get('http://my-json-server.typicode.com/bnissen24/project2DB/posts').then(response => {
      let temp = this.sortList(response.data);
      this.setState({tasks: response.data, sortedTasks: temp});
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

  sortList(list) {

      this.setState({
      todo: list.filter(task => task.column === 'todo'),
      inp: list.filter(task => task.column === 'in-progress'),
      review: list.filter(task => task.column === 'review'),
      done: list.filter(task => task.column === 'done')
      })

  }

  onUpdateTaskList = (newTaskList) => {
    /*let taskList = this.state.tasks;
    const index = taskList.findIndex(task => task.id === newTaskList.id);
    taskList[index] = newTaskList; */
this.sortList(newTaskList);
  }

  makeMobile = () => {
    if (this.state.singlePage === 'ToDo') {
      return <TaskBoard content={this.state.todo}/>;
    }
    if (this.state.singlePage === 'InProgress') {
      return <TaskBoard content={this.state.inp}/>;
    }
    if (this.state.singlePage === 'Review') {
      return <TaskBoard content={this.state.review}/>;
    }
    if (this.state.singlePage === 'Done') {
      return <TaskBoard content={this.state.done}/>;
    }
  }

  sizeWindow = () => {
    const browserWidth = window.innerWidth;
    let breakpoint = 'standard';

    if (browserWidth < LARGE_DESKTOP && browserWidth >= SMALL_DESKTOP) {
      breakpoint = 'small-desktop';
    } else if (browserWidth < SMALL_DESKTOP && browserWidth >= TABLET) {
      breakpoint = 'tablet';
    } else if (browserWidth < TABLET) {
      breakpoint = 'mobile';
    }

    this.setState({breakpoint, browserWidth});
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
        switch (this.state.breakpoint) {
          case 'standard':
            return (this.wrapPage((<TaskBoard 
                todos={this.state.todo}
                revs={this.state.review}
                inps={this.state.inp}
                dones={this.state.done}
                onUpdateTaskList={this.onUpdateTaskList}/>)));
          case 'small-desktop':
            return (this.wrapPage((<TaskBoard tasks={this.state.todo} onUpdateTaskList={this.onUpdateTaskList}/>)));
          case 'tablet':
            return (this.wrapPage((<TaskBoard tasks={this.state.todo} onUpdateTaskList={this.onUpdateTaskList}/>)));
          case 'mobile':
            return (this.wrapPage(this.makeMobile(<TaskBoard tasks={this.state.tasks} onUpdateTaskList={this.onUpdateTaskList}/>)));
          default:
            return (this.wrapPage((<AddTask onSubmit={this.onAddTask} />)));
        }
      default:
        return (this.wrapPage(<h2>Try Again</h2>));
    }
  }
}

export default App;
