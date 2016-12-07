import React from 'react';

const Schedule = ({name, courses, saved, onSave, onRemove}) => (
  <div className="schedule">
    <div className="schedule-header">
      <span className="schedule-name">Schedule #{name}</span>
      <span className={'fa fa-star' + (saved ? ' saved' : '')} onClick={saved ? onRemove : onSave}></span>
    </div>
    {courses.map(({code, name, days, start, finish}, i) => (
      <div className="schedule-course" key={i}>
        <span className="schedule-course-name">{code} - {name}</span>
        <span className="schedule-course-time">{days} {toTime(start)} - {toTime(finish)}</span>
      </div>
    ))}
  </div>
)

function toTime(minutes) {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  if (minutes >= 720) {
    return (h > 12 ? h-12 : h)+':'+(m < 10 ? '0'+m : m)+' PM';
  } else {
    return (h == 0 ? 12 : h)+':'+(m < 10 ? '0'+m : m)+' AM';
  }
}

export default Schedule;
