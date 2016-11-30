var moment = require('moment');

console.log(moment().format('DD.MM.YYYY HH:mm:ss'));


// January 1st 1970 @ 10:00am -> 0
// January 1st 1970 @ 10:01am -> 60

// var now = moment();
// console.log('Current timestamp ', now.unix());

// var timestamp = 1480497925;
// var currentMoment = moment.unix(timestamp);
// console.log('current moment ', currentMoment.format());
// console.log('current moment ', currentMoment.format('DD.MM.YYYY HH:MM:SS'));