import {combineReducers} from 'redux';

import data from '../data';

function courses(courses = data, action) {

  switch(action.type) {
    case 'CREATE_COURSE':
      return [...courses, {id: nextId(courses), code: 'ABC 101', name: 'Course Name', editing: true, sections: []}]
    case 'CHANGE_COURSE':
      return courses.map(course => action.course == course.id ? Object.assign(course, action.changes) : course)
    case 'DELETE_COURSE':
      return courses.filter(course => action.course != course.id)
    case 'CREATE_SECTION':
    case 'CHANGE_SECTION':
    case 'DELETE_SECTION':
      return courses.map(course => action.course == course.id ? section(course, action) : course)
    default:
      return courses;
  }

}

function section(course, action) {
  switch(action.type) {
    case 'CREATE_SECTION':
      return Object.assign(course, {sections: [...course.sections, {id: nextId(course.sections), name: nextName(course), days: 'MWF', start: 690, finish: 750, active: true}]})
    case 'CHANGE_SECTION':
      return Object.assign(course, {sections: course.sections.map(section => action.section == section.id ? Object.assign(section, action.changes) : section)})
    case 'DELETE_SECTION':
      return Object.assign(course, {sections: course.sections.filter(section => action.section != section.id)})
  }
}

function schedules(schedules = [], action) {

  switch(action.type) {
    case 'SAVE_SCHEDULE':
      return [...schedules, action.schedule]
    case 'REMOVE_SCHEDULE':
      return schedules.filter(schedule => schedule.id != action.id)
    default:
      return schedules;
  }

}

function nextId(items) {
  return items.reduce((max, item) => Math.max(max, item.id), 0)+1;
}

function nextName(course) {
  let highest = String.fromCharCode(64);
  course.sections.forEach(section => {
    if (section.name > highest) {
      highest = section.name;
    }
  });
  return String.fromCharCode(highest.charCodeAt() + 1);
}

export default combineReducers({courses, schedules})
