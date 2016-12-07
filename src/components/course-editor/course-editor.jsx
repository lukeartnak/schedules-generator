import React from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeCourse, deleteCourse, createSection, changeSection, deleteSection} from '../../redux/actions';

import CourseEditorHeader from './course-editor-header';
import CourseEditorSection from './course-editor-section';
import CourseEditorFooter from './course-editor-footer';

class CourseEditor extends React.Component {

  render() {
    return (
      <div className="course-editor" key={this.props.id}>
        <CourseEditorHeader id={this.props.id}
          code={this.props.code}
          name={this.props.name}
          onCourseChange={this.props.changeCourse}
          />
        {this.props.sections.map(section =>
          <CourseEditorSection key={section.id} {...section}
            onSectionChange={this.props.changeSection.bind(this, this.props.id)}
            onSectionDelete={this.props.deleteSection.bind(this, this.props.id)}
          />
        )}
        <CourseEditorFooter id={this.props.id}
          onCourseDelete={this.props.deleteCourse}
          onSectionCreate={this.props.createSection}
          onCourseChange={this.props.changeCourse}
          />
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeCourse, deleteCourse, createSection, changeSection, deleteSection}, dispatch);
}

export default connect(null, mapDispatchToProps)(CourseEditor)
