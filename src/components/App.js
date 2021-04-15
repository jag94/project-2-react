// imports
import '../App.css';
import React from 'react';
import axios from 'axios';

import TaskList from "./TaskList";
import Pages from "./Pages";
import AddTask from "./AddTask";
import TaskBoard from "./TaskBoard";
import TodoMobile from "./TodoMobile";
import DoneMobile from './DoneMobile';
import InpMobile from './InpMobile';
import ReviewMobile from './ReviewMobile';
import MobileView from './MobileView';

//Constants
const LARGE_DESKTOP = 1366;
const SMALL_DESKTOP = 1024;
const TABLET = 768;

class App extends React.Component {
  state = {
    tasks: [],
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
      this.setState({tasks: response.data});
      this.sortList(this.state.tasks);
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
    let todo = this.state.todo;
    todo.push({
      title: taskName,
      id: this.state.tasks.length + 1,
      type: taskType,
      column: 'todo'
    });

    this.setState({ todo });
    this.onViewChange('grid');
  }

  onMobileView = (singlePage) => {
    this.setState({singlePage});
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
    this.sortList(newTaskList);
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

    this.setState({ breakpoint, browserWidth });
  }

  render() {
    const { view } = this.state;
    const { breakpoint } = this.state;
    const { singlePage } = this.state;
    const { tasks } = this.state;

    switch (view) {
      case 'add':
        return (this.wrapPage((<AddTask onSubmit={this.onAddTask} />)));
      case 'grid':
        switch (breakpoint) {
          case 'standard':
            return (this.wrapPage((<TaskBoard
                todos={this.state.todo}
                revs={this.state.review}
                inps={this.state.inp}
                dones={this.state.done}
                onUpdateTaskList={this.onUpdateTaskList}/>)));
          case 'small-desktop':
            return (this.wrapPage((<TaskBoard
                todos={this.state.todo}
                revs={this.state.review}
                inps={this.state.inp}
                dones={this.state.done}
                onUpdateTaskList={this.onUpdateTaskList}/>)));
          case 'tablet':
          case 'mobile':
            switch (singlePage) {
              case 'ToDo':
                return (
                    this.wrapPage(<div><MobileView onChange={this.onMobileView.bind(this)} />
                <TodoMobile todos={this.state.todo} onUpdateTaskList={this.onUpdateTaskList}/></div>)
                );
              case 'InProgress':
                return (
                    this.wrapPage(<div><MobileView onChange={this.onMobileView.bind(this)} />
                      <div><InpMobile inps={this.state.inp} onUpdateTaskList={this.onUpdateTaskList}/></div></div>)
                );
              case 'Review':
                return (
                    this.wrapPage(<div><MobileView onChange={this.onMobileView.bind(this)} />
                      <div><ReviewMobile revs={this.state.review} onUpdateTaskList={this.onUpdateTaskList}/></div></div>)
                );
              case 'Done':
                return (
                    this.wrapPage(<div><MobileView onChange={this.onMobileView.bind(this)} />
                      <div><DoneMobile dones={this.state.done} onUpdateTaskList={this.onUpdateTaskList}/></div></div>)
                );
              default:
                return (
                    this.wrapPage(<div><MobileView onChange={this.onMobileView.bind(this)} />
                      <TodoMobile todos={this.state.todo} onUpdateTaskList={this.onUpdateTaskList}/></div>)
                );
            }
          default:
            return (this.wrapPage(<h2>Try Again</h2>));
        }
      default:
        return (this.wrapPage(<h2>Try Again</h2>));
    }
  }
}

export default App;
