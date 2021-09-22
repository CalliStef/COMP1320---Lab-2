var readlineSync = require('readline-sync');
const imporT =  require('./lab2.js');

imporT.makeCalendar("2021", 1, 0);

console.log("What year, month, date would you like to search the day for? Please enter below: ");
getDayOfTheWeekForUserDate();
function getDayOfTheWeekForUserDate(){
    var userYear = readlineSync.question("year: ");
    var userMonth = readlineSync.question("Month: ");
    var userDay = readlineSync.question("Date: ");

    imporT.getDayOfTheWeek(userYear, userMonth, userDay);

    console.log(userMonth + ", " + userDay + " " + userYear + " is " + imporT.answer);
}
