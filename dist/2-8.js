"use strict";
function getData(data) {
    if (typeof data === 'string') {
        console.log(data.length);
    }
    else if (typeof data === 'number') {
        console.log(data.toString().length);
    }
    else {
        const check = data;
    }
}
getData('1');
getData(1);
