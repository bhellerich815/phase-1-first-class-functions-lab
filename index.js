// Code your solution in this file!
//const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
//const firstTwo = drivers.slice(0,2);
//const lastTwo = drivers.slice(-2);

// function returnFirstTwoDrivers() {
//     return firstTwo;
// }
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (integer) {
    return function () {
        return integer * integer
    }
}

let fareDoubler = fare => fare * 2
let fareTripler = fare => fare * 3

function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
}