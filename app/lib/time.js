export function getPossibleTimes(term = '') {
  let times = [];
  for (let t = 0; t <= 1435; t+=5) {
    times.push(toTime(t));
  }
  return times.sort().filter(time => time.toLowerCase().indexOf(term.toLowerCase()) == 0);
}

export function toTime(minutes) {
  let h = Math.floor(minutes / 60);
  let m = minutes % 60;
  if (minutes >= 720) {
    return (h > 12 ? h-12 : h)+':'+(m < 10 ? '0'+m : m)+' PM';
  } else {
    return (h == 0 ? 12 : h)+':'+(m < 10 ? '0'+m : m)+' AM';
  }
}

export function toMinutes(time) {
  let parts = time.match(/(\d+):(\d+) (AM|PM)/i);
  let h = parseInt(parts[1]);
  let m = parseInt(parts[2]);
  if (parts[3].toUpperCase() == 'PM') {
    return h*60 + m + (h < 12 ? 720 : 0);
  } else {
    return (h == 12 ? 0 : h*60) + m;
  }
}
