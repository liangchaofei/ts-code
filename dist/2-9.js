"use strict";
// 解决多次if、switch的问题
var WeekEnd;
(function (WeekEnd) {
    WeekEnd["Mondy"] = "one";
    WeekEnd["Tuesday"] = "two";
    WeekEnd["Wendesday"] = "three";
    WeekEnd["Thursday"] = "four";
    WeekEnd["Friday"] = "five";
    WeekEnd["Saturday"] = "six";
    WeekEnd["Sunday"] = "seven";
})(WeekEnd || (WeekEnd = {}));
console.log(WeekEnd.Mondy);
var Week;
(function (Week) {
    Week[Week["Mondy"] = 1] = "Mondy";
    Week[Week["Tuesday"] = 2] = "Tuesday";
    Week[Week["Wendesday"] = 3] = "Wendesday";
    Week[Week["Thursday"] = 4] = "Thursday";
    Week[Week["Friday"] = 5] = "Friday";
    Week[Week["Saturday"] = 6] = "Saturday";
    Week[Week["Sunday"] = 7] = "Sunday";
})(Week || (Week = {}));
