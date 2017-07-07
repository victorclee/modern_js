var moment = require("moment");

console.log("Go ahead... Make my day");

var timedate = moment().startOf('day').fromNow(); 
console.log(timedate);

var array = [10,20,30];

for (num of array) {
  var double = num * 2;
  console.log(double);
}

console.log('I am a golden retriever')