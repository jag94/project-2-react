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
        <ul className='nav pages'>
            <li className='nav-item'>
                <a className={this.isActivePage('grid')} onClick={(e) => this.onNavClick(e, 'grid')}>
                    Grid View
                </a>
            </li>
            <li className='nav-item'>
                <a className={this.isActivePage('list')} onClick={(e) => this.onNavClick(e, 'list')}>
                    List View
                </a>
            </li>
        </ul>
    )
    }
};

export default Pages;