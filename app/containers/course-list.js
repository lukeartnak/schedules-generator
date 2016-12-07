import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createCourse, changeCourse} from 'redux/actions';

import Course from 'components/course/course';
import CourseEditor from 'components/course/course-editor';

class CourseList extends React.Component {

  render() {
    return (
      <div className="generator-section">
        <div>
          {this.props.courses.map(course => course.editing ? (
            <CourseEditor key={course.id} {...course}/>
          ) :
            <Course key={course.id} onCourseChange={this.props.changeCourse} {...course} />
          )}
        </div>
        <div className="course-add" onClick={this.props.createCourse}>
          <span className="fa fa-plus"></span>
          <span>Add Course</span>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {courses: state.courses}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createCourse, changeCourse}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseList)
