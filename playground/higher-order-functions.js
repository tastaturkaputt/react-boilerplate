// function one (name, location) {
//   console.log(name, location);
// }
//
// function two () {
//   console.log('Args', arguments);
//   one.apply(undefined, arguments);
// }
//
// two('Andrew', 'Phily');

var add = (a, b) => a + b;
var square = (a) => a * a;

var callAndLog = (func) => {
  return function () {
    var res = func.apply(undefined, arguments);
    console.log('Result is ' + res);

    return res;
  }
};

var addAndLog = callAndLog(add);
console.log(addAndLog(44, -3));

var squareAndLog = callAndLog(square);
console.log(squareAndLog(3));
