import React from 'react';

import {toTime} from '../lib/time';

export default class Course extends React.Component {

  constructor() {
    super();

    this.state = {collapsed: false};
    this.handleEnableEditing = this.handleEnableEditing.bind(this);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
  }

  handleEnableEditing() {
    this.props.onCourseChange(this.props.id, {editing: true})
  }

  toggleCollapsed() {
    this.setState({collapsed: !this.state.collapsed});
  }

  render() {
    return (
      <div className="course">
        <div className="course-header">
          <span className="course-name">{this.props.code} - {this.props.name}</span>
          <span className="course-edit fa fa-pencil" onClick={this.handleEnableEditing}></span>
        </div>
        {this.state.collapsed ? null : this.props.sections.map(({id, name, days, start, finish}) => (
          <div className="course-section" key={id}>
            <span className="section-name">Section {name} - {days} {toTime(start)} - {toTime(finish)}</span>
          </div>
        ))}
        <div className="course-footer" onClick={this.toggleCollapsed}>
          <span>{this.state.collapsed ? 'Show' : 'Hide'} {this.props.sections.length} Sections</span>
        </div>
      </div>
    )
  }

}
