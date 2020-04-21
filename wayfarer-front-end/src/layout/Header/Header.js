import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

// const Header = () => {
class Header extends React.Component {
    render() {
    let leftLinks = [];
    let rightLinks = [];

    let notLoggedLabels = ['Home', 'About', 'Log In', 'Sign Up'];
    let notLoggedLeftLinks = {
        '/': "item",
        '/about': "item",
    };
    let notLoggedRightLinks = { 
        '/login': "ui inverted button",
        '/signup': "ui inverted button"
    };

    let loggedLabels = ['Home', 'About', 'Profile', 'Cities', 'Sign Out'];
    let loggedLeftLinks = { 
        '/': "item",
        '/about': "item",
        '/profile': "item",
        '/cities/hogsmeade': "item" 
    };
    let loggedRightLinks = { 
        '/': "ui inverted button",
    };

    if (!this.props.loggedIn) {
        //if user not loggedin
        let idx = 0;
        for (let key in notLoggedLeftLinks) {
            leftLinks.push(<Link to={ key } key={ idx } className={ notLoggedLeftLinks[key] }>{notLoggedLabels[idx]}</Link>);
            idx += 1;
        };

        for (let key in notLoggedRightLinks) {
            rightLinks.push(<Link to={ key } key={ idx } className={ notLoggedRightLinks[key] }>{notLoggedLabels[idx]}</Link>);
            idx += 1;
        };
    }
    else {
        // user is loggedin
        let idx = 0;
        for (let key in loggedLeftLinks) {
            leftLinks.push(<Link to={ key } key={ idx } className={ loggedLeftLinks[key] }>{loggedLabels[idx]}</Link>);
            idx += 1;
        };

        for (let key in loggedRightLinks) {
            rightLinks.push(<Link onClick={this.props.logout} to={ key } key={ idx } className={ loggedRightLinks[key] }>{loggedLabels[idx]}</Link>);
            idx += 1;
        };
    }
        return (
            <div className="pusher">
                <div className="ui container">
                    <div className="ui large secondary inverted pointing menu">
                        <a className="toc item">
                        <i className="sidebar icon"></i>
                        </a>
                            {leftLinks}
                        <div className="right item">
                            {rightLinks}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;    