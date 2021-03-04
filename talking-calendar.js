const talkingCalendar = function(date) {
  const monthsObj = {'01': "January", '02': 'February', '03': 'March', '04': 'April', '05': 'May', '06': 'June', '07': 'July', '08': 'August', '09': 'September', '10': 'October', '11': 'November', '12': 'December'}

  const monthNum = date.slice(5,7);
  const month = monthsObj[monthNum];
  const day = date.slice(8,10);
  const th = function(day) {
    if (day === '01' || day === '21' || day === '31') {
      return 'st'
    } else if (day === '02' || day === '22') {
      return 'nd'
    } else {
      return 'th'
    }
  }
  const year = date.slice(0,4);
  const dayClean = function(day) {
    const sample = day.slice(0,1);
    if (sample === '0') {
      return day.slice(1,2)
    } else {
      return day
    }
  }

  const outputStr = `${month} ${dayClean(day)}${th(day)}, ${year}`;
  return outputStr;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
