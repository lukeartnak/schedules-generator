import React from 'react';

import {getPossibleTimes} from 'lib/time';

export default class TimeInput extends React.Component {

  constructor(props) {
    super();

    this.state = {focused: false, term: props.defaultValue};
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.renderTimeSuggestions = this.renderTimeSuggestions.bind(this);
  }

  render() {
    return (
      <div className="time-input">
        <input type="text"
          className="editor-input"
          value={this.state.term}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          />
        {this.state.focused ? this.renderTimeSuggestions() : null}
      </div>
    )
  }

  handleChange(event) {
    this.setState({term: event.target.value});
    this.props.onChange(event.target.value);
  }

  handleSelect(event) {
    this.props.onChange(event.target.innerHTML);
    this.setState({term: event.target.innerHTML});
  }

  handleFocus() {
    this.setState({focused: true});
  }

  handleBlur() {
    this.setState({focused: true});
  }

  renderTimeSuggestions() {
    if (this.state.term.length == 0) return;
    let times = getPossibleTimes(this.state.term);
    return times.length > 1 ? (
      <div className="time-suggestions">
        {times.slice(0, 4).map((time, i) =>
          <span key={i} className="time-suggestion" onClick={this.handleSelect}>{time}</span>
        )}
      </div>
    ) : null
  }

}
