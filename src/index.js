import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
    <App />, document.getElementById('root')
);

var numbers = [3, 56, 2, 48, 1];

var sum = numbers.reduce(function (acc, num) {
    return acc + num;
})

console.log(sum);