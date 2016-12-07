import React from 'react';

export default class CourseEditorHeader extends React.Component {

  constructor() {
    super();

    this.handleCodeChange = this.handleCodeChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleCodeChange(event) {
    this.props.onCourseChange(this.props.id, {code: event.target.value})
  }

  handleNameChange(event) {
    this.props.onCourseChange(this.props.id, {name: event.target.value})
  }

  render() {
    return (
      <div className="course-editor-header">
        <input className="course-code-form" type="text"
          defaultValue={this.props.code} onChange={this.handleCodeChange} />
        <input className="course-name-form" type="text"
          defaultValue={this.props.name} onChange={this.handleNameChange} />
      </div>
    )
  }

}
