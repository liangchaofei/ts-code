"use strict";
function getStuobj(stuobj) {
    console.log(stuobj.username, stuobj.age);
}
// 函数解构
function getStuobj2({ username, age }) {
    console.log(username, age);
}
