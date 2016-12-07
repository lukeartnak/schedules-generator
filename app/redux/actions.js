export function createCourse() {
  return {
    type: 'CREATE_COURSE'
  }
}

export function changeCourse(course, changes) {
  return {
    type: 'CHANGE_COURSE', course, changes
  }
}

export function deleteCourse(course) {
  return {
    type: 'DELETE_COURSE', course
  }
}

export function createSection(course) {
  return {
    type: 'CREATE_SECTION', course
  }
}

export function changeSection(course, section, changes) {
  return {
    type: 'CHANGE_SECTION', course, section, changes
  }
}

export function deleteSection(course, section) {
  return {
    type: 'DELETE_SECTION', course, section
  }
}

export function saveSchedule(schedule) {
  return {
    type: 'SAVE_SCHEDULE', schedule
  }
}

export function removeSchedule(id) {
  return {
    type: 'REMOVE_SCHEDULE', id
  }
}
