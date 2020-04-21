import React from 'react';
import './Home.css';
import Login from '../Login/Login';

const Home = (props) => {
    return(
        // if login, remove Wayfarer
        // if signup, remove Wayfarer
        <div className="ui text container">
            <h1 id="homeTitle" className="ui inverted header">
                Sleepy Town
            </h1>
            <h2 id="subheader">Travel to the Cities of Your Dreams!</h2>
        </div> 
    );
}

export default Home;