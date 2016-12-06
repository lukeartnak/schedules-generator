import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

import data from './data';

import CourseList from './components/course-list';
import FilterList from './components/filter-list';
import ScheduleList from './components/schedule-list';

class Application extends React.Component {

  constructor() {
    super();

    this.state = {view: 'Courses'};
    this.handleViewChange = this.handleViewChange.bind(this);
  }

  render() {

    return (
      <div className="generator">
        <nav className="nav">
          <span onClick={this.handleViewChange} className="nav-item">Courses</span>
          <span onClick={this.handleViewChange} className="nav-item">Filters</span>
          <span onClick={this.handleViewChange} className="nav-item">Schedules</span>
        </nav>
        {this.renderView()}
      </div>
    )
  }

  handleViewChange(event) {
    this.setState({view: event.target.innerHTML});
  }

  renderView() {
    switch (this.state.view) {
      case 'Courses':
        return <CourseList />
      case 'Filters':
          return <FilterList />
      case 'Schedules':
        return <ScheduleList />
      default:
        return <CourseList />
    }
  }


}

ReactDOM.render(<Provider store={store}><Application /></Provider>, document.querySelector('.app'));
