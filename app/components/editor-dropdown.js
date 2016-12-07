import React from 'react';

export default class FilterEditor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {dropdown: false, filter: props.defaultValue || props.options[0]};

    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
  }

  handleFilterChange(event) {
    this.handleDropdownToggle();
    this.setState({filter: event.target.innerText});
  }

  handleDropdownToggle() {
    this.setState({dropdown: !this.state.dropdown});
  }

  render() {
    return (

      <div className="editor-dropdown">
        <span className="dropdown-selected" onClick={this.handleDropdownToggle}>{this.state.filter} <span className="fa fa-angle-down"></span></span>
        {this.state.dropdown ? (
          <div className="dropdown-options">
            {this.props.options.map(option =>
              <span key={option} className="dropdown-option" onClick={this.handleFilterChange}>{option}</span>
            )}
          </div>
        ) : null}
      </div>

    )
  }


}
