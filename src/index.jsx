import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// const element = React.createElement('h1', {
//         style: {
//             color: 'red'
//         }
//     },
//     React.createElement('ul', {},
//         React.createElement('li', {}, 'Item 1'),
//         React.createElement('li', {}, 'Item 2')
//     )
// )

const element = (
    <h1 style={{ color: 'red', textDecoration: 'underline' }}>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </h1>
)

// const element2 = React.createElement('h2', {}, 'Goodbye')
const element2 = <h2>Goodbye</h2>

ReactDOM.render(
    <App />,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();