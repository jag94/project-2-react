import React from 'react';
import '../App.css';

class Pages extends React.Component {

    isActivePage(pageName) {
        return (pageName === this.props.currentView ? 'nav-link active' : 'nav-link')
    }

    onNavClick(event, pageName) {
        event.preventDefault();
        this.props.onViewChange(pageName);
    }

    render () {
        return (
        <div className='nav pages'>
            <div className='nav-item'>
                <a className={this.isActivePage('grid')} onClick={(e) => this.onNavClick(e, 'grid')}>
                    Grid View
                </a>
            </div>
            <div className='nav-item'>
                <a className={this.isActivePage('add')} onClick={(e) => this.onNavClick(e, 'add')}>
                    Add Task
                </a>
            </div>
        </div>
    )
    }
};

export default Pages;