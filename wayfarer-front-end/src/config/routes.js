import React from 'react';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import Profile from '../components/Profile/Profile';
import CityContainer from '../containers/CityContainer/CityContainer';

const Routes = (props) => {
  function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
  let loggedIn = localStorage.getItem('loggedIn');
  loggedIn = (loggedIn === 'true');
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route 
        path='/profile' 
        render={() => 
          (loggedIn ? 
          (<Profile currentUser={props.user} loggedIn={props.loggedIn}/>) : (<Redirect to="/signup"/>))}/>
      <Route 
        path='/login' 
        render={() => 
          (loggedIn ? 
            (<Redirect to="/profile"/>) :
            (<Login loggedIn={props.loggedIn}/>))}/>
      <Route 
      path='/signup' 
      render={() => 
        (loggedIn ? 
          (<Redirect to="/profile"/>) :
          (<Signup loggedIn={props.loggedIn}/>))}/>
        <Route 
      path='/cities/:id' 
      render={() => 
        (loggedIn ? 
          (<CityContainer user={props.user} />) : 
          (<Redirect to="/signup"/>))}/>
    </Switch>
  );
}

export default Routes;
