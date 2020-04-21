import React from 'react';
import PostContainer from '../../containers/PostContainer/PostContainer';
import './City.css';

const City = (props) => {

  // props => city { _id , name, country, photo}
  return (
    <div className="ui raised segment city" id="cityCard">
      <div className="cityText">
      <h2 id="cityName">{props.city.name}</h2>
      <h3>{props.city.country}</h3>
      </div>
      <img className="ui bordered image" style={{display: "block"}} src={props.city.photo} alt=""/>
      {<PostContainer cityId={props.city._id} user={props.user}/>}
    </div>
  );
}

export default City;