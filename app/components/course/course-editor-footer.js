import React from 'react';


export default class CourseEditorFooter extends React.Component {

  constructor(props) {
    super();

    this.state = {deleting: false};
    this.handleSectionCreate = props.onSectionCreate.bind(this, props.id);
    this.handleCourseDelete = props.onCourseDelete.bind(this, props.id);
    this.toggleConfirmation = this.toggleConfirmation.bind(this);
    this.handleDoneEditing = this.handleDoneEditing.bind(this);
  }

  handleDoneEditing() {
    this.props.onCourseChange(this.props.id, {editing: false});
  }

  toggleConfirmation() {
    this.setState({deleting: !this.state.deleting});
  }

  render() {
    return (
      <div className="course-editor-footer">
        {this.state.deleting ? (
          <div className="footer-confirmation">
            <span>Are you sure you want to delete this course?</span>
            <button onClick={this.handleCourseDelete}>Yes</button>
            <button onClick={this.toggleConfirmation}>No</button>
          </div>
        ) : (
          <div className="footer-toolbar">
            <span className="footer-button course-delete" onClick={this.toggleConfirmation}>Delete Course</span>
            <span className="footer-button section-add" onClick={this.handleSectionCreate}>Add Section</span>
            <span className="footer-button course-done" onClick={this.handleDoneEditing}>Done Editing</span>
          </div>

        )}
      </div>
    )
  }

}
