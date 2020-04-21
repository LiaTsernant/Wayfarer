import React from 'react';
import {Link} from 'react-router-dom';
import './CityList.css';

const CityList = (props) => {
    // let counter = 0;
    let cityList = props.cities.map(function(city, index) {
        return (<Link className="item" key={index} to={{
            pathname:`/cities/${city.name.replace(/\s+/g,'-').toLowerCase()}`
        }}>
                <img className="ui avatar image" src={city.photo} alt={city.name}/>
                <div className="content">
                <div className="header">{city.name}</div>
                </div>
            </Link>)})
    return(
        <div className="ui middle aligned selection massive list" id="cityList">
            {cityList}
        </div>
    );
}

export default CityList;