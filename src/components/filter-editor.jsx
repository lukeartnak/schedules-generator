import React from 'react';

import EditorDropdown from './editor-dropdown';
import TimeInput from './time-input';
import DaysInput from './days-input';

import {toTime, toMinutes} from '../lib/time';

export default class FilterEditor extends React.Component {

  constructor() {
    super();

    this.state = {dropdown: false, filter: 'Start Before'};

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);

    this.renderTimeFilter = this.renderTimeFilter.bind(this);
    this.renderClassFilter = this.renderClassFilter.bind(this);
  }

  handleFilterChange(event) {
    this.handleDropdownToggle();
    this.setState({filter: event.target.innerText});
  }

  handleDropdownToggle() {
    this.setState({dropdown: !this.state.dropdown});
  }

  renderClassFilter() {
    return (
      <div className="filter-editor-section">
        <div className="editor-group">
          <input type="checkbox"/>
        </div>
        <div className="editor-group">
          <span>I want</span>
        </div>
        <div className="editor-group">
          <EditorDropdown  options={['At Most', 'At Least', 'Exactly']}/>
        </div>
        <div className="editor-group">
          <input className="editor-input" type="text" defaultValue="3" />
        </div>
        <div className="editor-group">
          <span>classes on</span>
        </div>
        <div className="editor-group">
          <DaysInput days={['M', 'W', 'F']} onChange={() => {}} />
        </div>
      </div>
    )

  }

  renderTimeFilter() {
    return (
      <div className="filter-editor-section">
        <div className="editor-group">
          <input type="checkbox"/>
        </div>
        <div className="editor-group">
          <span>I want to</span>
        </div>
        <div className="editor-group">
          <EditorDropdown  options={['Start Before', 'Start After', 'Finish Before', 'Finish After']}/>
        </div>
        <div className="editor-group">
          <TimeInput defaultValue={'9:00 AM'} onChange={() => {}} />
        </div>
        <div className="editor-group">
          <span>on</span>
        </div>
        <div className="editor-group">
          <DaysInput days={['M', 'W', 'F']} onChange={() => {}} />
        </div>
      </div>
    )

  }

  render() {
    return (
      <div>

      <div className="filter-editor">
          {this.props.type == 'Time Range' ? this.renderTimeFilter() : this.renderClassFilter()}
      </div>

      </div>

    )
  }


}
