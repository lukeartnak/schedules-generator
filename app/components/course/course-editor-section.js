import React from 'react';

import TimeInput from 'components/time-input';
import DaysInput from 'components/days-input';

import {toTime, toMinutes} from 'lib/time';

export default class CourseEditorSection extends React.Component {

  constructor() {
    super();

    this.state = {startFocus: false, finishFocus: false};

    this.handleSectionToggle = this.handleSectionToggle.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDaysChange = this.handleDaysChange.bind(this);
    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleFinishChange = this.handleFinishChange.bind(this);
    this.handleSectionDelete = this.handleSectionDelete.bind(this);
  }

  render() {
    return (
      <div className="course-editor-section">
        <div className="editor-group">
          <input type="checkbox"
            checked={this.props.active}
            onChange={this.handleSectionToggle}
            />
        </div>
        <div className="editor-group">
          <input type="text"
            className="editor-input"
            defaultValue={this.props.name}
            onChange={this.handleNameChange}
            />
        </div>
        <div className="editor-group">
          <DaysInput days={this.props.days} onChange={this.handleDaysChange} />
        </div>
        <div className="editor-group">
          <TimeInput defaultValue={toTime(this.props.start)} onChange={this.handleStartChange} />
        </div>
        <span>-</span>
        <div className="editor-group">
          <TimeInput defaultValue={toTime(this.props.finish)} onChange={this.handleFinishChange} />
        </div>
        <button className="section-delete" onClick={this.handleSectionDelete}>
          <span className="fa fa-times"></span>
        </button>
      </div>
    )
  }

  handleSectionToggle() {
    this.props.onSectionChange(this.props.id, {active: !this.props.active});
  }

  handleNameChange(event) {
    this.props.onSectionChange(this.props.id, {name: event.target.value});
  }

  handleDaysChange(days) {
    this.props.onSectionChange(this.props.id, {days});
  }

  handleStartChange(time) {
    if (time.match(/(\d+):(\d+) (AM|PM)/i)) {
      this.props.onSectionChange(this.props.id, {start: toMinutes(time)});
    }
  }

  handleFinishChange(time) {
    if (time.match(/(\d+):(\d+) (AM|PM)/i)) {
      this.props.onSectionChange(this.props.id, {finish: toMinutes(time)});
    }
  }

  handleSectionDelete() {
    this.props.onSectionDelete(this.props.id);
  }

}
