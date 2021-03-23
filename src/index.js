import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />, document.getElementById('root')
);


var numbers = [3, 56, 2, 48, 1];
var newNumbers = [];

function double(x) {
    newNumbers.push(x * 2);
}

function doubleReturn(x) {
    return x * 2;
}

// Normal forEach
// numbers.forEach(function (element) {
//     console.log(element);
// });

////// Using forEach

// Option 1
numbers.forEach(function (x) {
    double(x)
});

// Option 2
// numbers.forEach(double);


////// Using Map

// Option 3
var myNumbers = numbers.map(function (x) {
    return x * 2;
})
// Option 4
var myNumbers2 = numbers.map(doubleReturn)

console.log(myNumbers);
console.log(myNumbers2);








