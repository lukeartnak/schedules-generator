import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {saveSchedule, removeSchedule} from 'redux/actions';
import {getFilteredSchedules, getValidSchedules} from 'redux/selector';

import Schedule from 'components/schedule';

class ScheduleList extends React.Component {

  constructor() {
    super();

    this.state = {page: 0};
    this.handlePageSelect = this.handlePageSelect.bind(this);
    this.handlePageDecrease = this.handlePageDecrease.bind(this);
    this.handlePageIncrease = this.handlePageIncrease.bind(this);
    this.handleScheduleSave = this.handleScheduleSave.bind(this);
    this.handleScheduleRemove = this.handleScheduleRemove.bind(this);
  }

  render() {
    return (
      <div className="generator-section">
        {this.renderPagination()}
        <div>
          {this.props.pages[this.state.page].map((schedule, i) =>
            <Schedule key={schedule.id} {...schedule}
              name={this.state.page*20+i+1}
              saved={this.props.saved.indexOf(schedule.id) > -1}
              onSave={this.handleScheduleSave.bind(this, schedule)}
              onRemove={this.handleScheduleRemove.bind(this, schedule.id)}
              />
          )}
        </div>
        {this.renderPagination()}
      </div>
    )
  }

  renderPagination() {
    let pages = [];
    for (let i = 1; i <= this.props.pages.length; i++) {
      pages.push(
        <button key={i}
        className={'page' + (this.state.page == i-1 ? ' selected' : '')}
        value={i-1}
        onClick={this.handlePageSelect}>{i}</button>
      )
    }
    return (
      <div className="page-list">
        <button className="page" onClick={this.handlePageDecrease}><span className="fa fa-angle-left"></span></button>
        {pages}
        <button className="page" onClick={this.handlePageIncrease}><span className="fa fa-angle-right"></span></button>
      </div>
    )
  }

  handlePageSelect(event) {
    this.setState({page: event.target.value});
  }

  handlePageDecrease() {
    this.setState({page: this.state.page > 0 ? this.state.page-1 : 0})
  }

  handlePageIncrease() {
    this.setState({page: this.state.page < this.props.pages.length-1 ? this.state.page+1 : this.state.page})
  }

  handleScheduleSave(schedule) {
    this.props.saveSchedule(schedule);
  }

  handleScheduleRemove(id) {
    this.props.removeSchedule(id);
  }

}

function mapStateToProps(state) {
  let schedules = getValidSchedules(state);
  let pages = [];
  for (let i = 0; i < schedules.length; i++) {
    pages.push(schedules.splice(i, 20));
  }
  return {pages, saved: state.schedules.map(schedule => schedule.id)}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({saveSchedule, removeSchedule}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleList)
