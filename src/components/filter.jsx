import React from 'react';


export default class Filter extends React.Component {

  constructor() {
    super();

    this.handleEnableEditing = this.handleEnableEditing.bind(this);
  }

  handleEnableEditing() {
    this.props.onFilterChange(this.props.id, {editing: true})
  }

  render() {
    return (
      <div className="filter">
        <span>Filter</span>
      </div>
    )
  }

}
