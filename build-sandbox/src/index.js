import React from 'react';
import ReactDOM from 'react-dom';
import react from './react.png';
import './main.scss';

const App = ({name = "React"}) => (
        <div class='container'>
            <img src={react} alt='hello' />
            <p>Hello, {name}!</p>
        </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

