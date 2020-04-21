import React from 'react';
import Routes from '../../config/routes';
import './App.css';
import UserApi from '../../api/UserApi';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';

class App extends React.Component {
  state = {
    loggedIn : false,
    currentUser: {}
  }
  componentDidMount = () => {
    // verify current session
    UserApi.verify()
    .then(res => {
    // if status 200, set loggedIn to true, currentUser to non-null
      this.setState({
          loggedIn: true,
          currentUser: res.data.currentUser
      })
  })
    // if status 200, set loggedIn to true, currentUser to non-null
  }
  loggedIn = (user) => {
    localStorage.setItem('loggedIn', true);
    this.setState({
      loggedIn: true,
      currentUser: user
    })
  }
  logout = () => {
    localStorage.setItem('loggedIn', false);
    this.setState({
      loggedIn: false,
      currentUser: ''
    })
    UserApi.logout();
  }
  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} logout={this.logout}/>
        {/* { routes } */}
        <Routes loggedIn={this.loggedIn} user={this.state.currentUser} />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
