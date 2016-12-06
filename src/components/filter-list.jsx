import React from 'react';
import {connect} from 'react-redux';

import FilterGroup from './filter-group';

class FilterList extends React.Component {

  constructor() {
    super();

    let TIME_RANGE = 'Time Range', CLASS_LOAD = 'Class Load';

    this.types = [TIME_RANGE, CLASS_LOAD];
    this.filters = [{id: 0, type: TIME_RANGE}, {id: 1, type: TIME_RANGE}, {id: 2, type: CLASS_LOAD}, {id: 3, type: CLASS_LOAD}];
  }



  render() {
    return (
      <div className="generator-section">
        <div>
          {this.types.map(type => <FilterGroup editing={true} key={type} type={type} filters={this.filters.filter(filter => filter.type == type)} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(FilterList)
