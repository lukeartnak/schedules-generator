import {createSelector} from 'reselect';

function schedules(state) {
  return getSchedules(state.courses);
}

export const getValidSchedules = createSelector(schedules,
  schedules => schedules.filter(schedule => {
    for (let course1 of schedule.courses) {
      for (let course2 of schedule.courses) {
        if (course1 != course2 && containSameDay(course1, course2)) {
          if (course1.start <= course2.finish && course2.start <= course1.finish) {
            return false;
          }
        }
      }
    }
    return true;
  })
);

export const getFilteredSchedules = createSelector(getValidSchedules,
  schedules => schedules.filter(schedule => {
    schedule.courses.forEach(course => {
      if (course.start < 600) return false;
    })
    return true;
  })
)

function containSameDay(course1, course2) {
  return course1.days.filter(day => course2.days.indexOf(day) > -1).length > 0;
}

function getSchedules(courses, currentSchedule = [], schedules = []) {
  courses[0].sections.filter(section => section.active).forEach(section => {
    let {name, days, start, finish} = section;
    let newSchedule = [...currentSchedule, {code: courses[0].code, name, days, start, finish}];
    if (courses.length > 1) {
      getSchedules(courses.slice(1), newSchedule, schedules);
    } else {
      schedules.push({id: newSchedule.map(course => course.code+course.name).sort().join('').replace(' ', ''), courses: newSchedule});
    }
  })
  return schedules;
}
