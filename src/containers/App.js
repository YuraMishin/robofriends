import React from 'react';
import './App.css';
import CardList from '../components/CardList';
import {robots} from "../robots";
import SearchBox from "../components/SearchBox";

const App = () => {
    return (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox/>
            <CardList robots={robots}/>
        </div>
    )
}

export default App;
