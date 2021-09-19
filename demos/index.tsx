import React from 'mreact';
import ReactDOM from 'mreact-dom';
console.log(React)
ReactDOM.render(
    React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            '123'
        ),
        React.createElement(
            'h1',
            null,
            '123'
        )
    ),
    document.getElementById('app')
)