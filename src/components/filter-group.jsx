import React from 'react';
import {connect} from 'react-redux';

import Filter from './filter';
import FilterEditor from './filter-editor';

class FilterGroup extends React.Component {

  render() {
    return (
      <div className="filter-group">
        <div className="filter-group-header">
          <span>{this.props.type}</span>
        </div>
        {this.props.filters.map(filter => this.props.editing ? (
          <FilterEditor key={filter.id} type={this.props.type} />
        ) : (
          <Filter key={filter.id} />
        ))}
        <div className="filter">
          {this.props.editing ? (
            <span><i className="fa fa-plus"></i> Add {this.props.type} Filter</span>
          ) : (
            <span>Show {this.props.filters.length} Filters</span>
          )}
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterGroup)
