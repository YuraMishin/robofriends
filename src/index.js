import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'
import Card from "./components/Card";
import {robots} from "./robots";

ReactDOM.render(
    <React.StrictMode>
        <Card
            id={robots[0].id}
            name={robots[0].name}
            email={robots[0].email}
        />
    </React.StrictMode>,
    document.getElementById('root')
);
