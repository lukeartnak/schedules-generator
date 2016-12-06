import React from 'react';

export default class DaysInput extends React.Component {

  constructor(props) {
    super();

    this.handleToggle = this.handleToggle.bind(this);
    this.addDay = this.addDay.bind(this);
    this.removeDay = this.removeDay.bind(this);
    this.selected = this.selected.bind(this);
  }

  render() {
    return (
      <div className="days-input">
        {['M', 'T', 'W', 'R', 'F', 'S'].map(day =>
          <button key={day}
            className={'section-day' + this.selected(day)}
            onClick={this.handleToggle}
          >{day}</button>
        )}
      </div>
    )
  }

  handleToggle(event) {
    let day = event.target.innerHTML;
    let add = this.props.days.indexOf(day) == -1;
    this.props.onChange(add ? this.addDay(day) : this.removeDay(day));
  }

  addDay(day) {
    return [...this.props.days, day].sort((day1, day2) => 'MTWRFS'.indexOf(day1)-'MTWRFS'.indexOf(day2));
  }

  removeDay(day) {
    return this.props.days.filter(other => day != other);
  }

  selected(day) {
    return this.props.days.indexOf(day) < 0 ? '' : ' selected';
  }

}
