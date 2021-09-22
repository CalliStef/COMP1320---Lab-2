var dday;
var leapyear;
var mCode;

function getDayOfTheWeek(year, month, date){
    isLeapYear(year);
    var check = year.substr(0, 2);
    if (leapyear == true && month == "January" || month == "February"){
        monthCode(month);
        mCode -= 1;
    } if (check == "16" || check == "20") {
        monthCode(month);
        mCode += 6;
    } else if (check == "17" || check == "21") {
        monthCode(month);
        mCode += 4;
    } else if (check == "18"){
        monthCode(month);
        mCode += 2;
    } else {
        monthCode(month);
    }
    var twoDigitsFromTheBackOfYear = year.substr(2, 4);
    parseInt(year);
    var numOfTwelves = Math.trunc(twoDigitsFromTheBackOfYear / 12);
    var numRemainder = twoDigitsFromTheBackOfYear - numOfTwelves * 12;
    var numOfFours = Math.trunc(numRemainder / 4);
    var numDay = Math.trunc((numOfTwelves + numRemainder + numOfFours + parseInt(date) + mCode) % 7);
    tday(numDay);
    module.exports.answer = dday;
}

function tday(numDay){
    switch(numDay){
        case 0:
            dday = "Saturday";
            break;
        case 1:
            dday = "Sunday";
            break;
        case 2:
            dday = "Monday";
            break;
        case 3:
            dday = "Tuesday";
            break;
        case 4:
            dday = "Wednesday";
            break;
        case 5:
            dday = "Thursday";
            break;
        case 6:
            dday = "Friday";
            break;   
        
        
    }
}

function monthCode(month){
    switch(month){
        case "January":
            mCode = 1 ;
            break;
        case 1:
            mCode = 1 ;
            break;
        case "February":
            mCode = 4 ;
            break;
        case 2:
            mCode = 4;
            break;
        case "March":
            mCode = 4;
            break;
        case 3:
            mCode = 4;
            break;
        case "April":
            mCode = 0 ;
            break;
        case 4:
            mCode = 0;
            break;
        case "May":
            mCode = 2 ;
            break;
        case 5:
            mCode = 2;
            break;
        case "June":
            mCode = 5 ;
            break;
        case 6:
            mCode = 5;
            break;
        case "July":
            mCode = 0 ;
            break;
        case 7:
            mCode = 0 ;
            break;
        case "August":
            mCode = 3 ;
            break;
        case 8:
            mCode = 3 ;
            break;
        case "September":
            mCode = 6 ;
            break; 
        case 9:
            mCode = 6 ;
            break; 
        case "October":
            mCode = 1 ;
            break;
        case 10:
            mCode = 1 ;
            break;
        case "November":
            mCode = 4 ;
            break;
        case 11:
            mCode = 4 ;
            break;
        case "December":
            mCode = 6 ;
            break;
        case 12:
            mCode = 6 ;
            break;
        /*default: 
            console.log("please enter the appropriate answers over again.");
            getDayOfTheWeekForUserDate(); */
    }
}

function isLeapYear(year){
    if (year == 1996 || 2000 || 2012){
        leapyear == true;
    }
}


function makeCalendar(year, month, date){
    for (let n = 0; n < 365; n++){
        date += 1;
        getDayOfTheWeek(year, month, date);
        console.log(month + " - " + date + " - " + year + " is a " + dday);
        if (date == 31 && month == 1){
            month = 2;
            date = 0;
        }
        if (date == 29 && month == 2){
            month = 3;
            date = 0;
        }
        if (date == 31 && month == 3){
            month = 4;
            date = 0;
        }
        if (date == 30 && month == 4){
            month = 5;
            date = 0;
        }
        if (date == 31 && month == 5){
            month = 6;
            date = 0;
        }
        if (date == 30 && month == 6){
            month = 7;
            date = 0;
        }
        if (date == 31 && month == 7){
            month = 8;
            date = 0;
        }
        if (date == 30 && month == 8){
            month = 9;
            date = 0;
        }
        if (date == 31 && month == 9){
            month = 10;
            date = 1;
        }
        if (date == 30 && month == 10){
            month = 11;
            date = 0;
        }    
        if (date == 31 && 11){
            month = 12;
            date = 0;
        }
        if (date == 31 && 12){
            break;
        }
    }
    
}

module.exports = {getDayOfTheWeek, makeCalendar};