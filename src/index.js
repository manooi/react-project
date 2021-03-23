import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />, document.getElementById('root')
);


var numbers = [3, 56, 2, 48, 1];


function myFilter(x) {
    if (x > 5) {
        return true
    } else {
        return false
    }
}

var filtered = numbers.filter(myFilter);

var filtered2 = numbers.filter(function (x) {
    return x > 2;
});

var filtered3 = numbers.filter(x => { return x < 50 });

console.log(filtered);
console.log(filtered2);
console.log(filtered3);







