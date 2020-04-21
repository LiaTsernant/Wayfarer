import React from 'react';
import './Signup.css';
import userApi from '../../api/UserApi';
import { withRouter } from 'react-router-dom';
class Signup extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        city: ''
    }
    validateFields = () => {
        let keys = []
        // Puts state keys in keys array
        Object.keys(this.state).map(key => keys.push(key));
        let valid = true
        keys.map(key => {
            let field = document.getElementById(key);
            field.classList.remove('error');
            if (this.state[key] === '') {
                valid = false;
                // add class error to fields
                field.classList.add('error');
            }
        })
        return valid;
    }
    passwordValid = (password) => {
        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%\^&\*])(?=.{8,})")
        return (strongRegex.test(password)) && (password.length >= 8) ? true : false
    }
    emailValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
    register = () => {
        userApi.signup(this.state)
        .then(res => {
            // call function handler
            this.props.loggedIn(res.data.user);
            // Redirect to profile
        });
    }
    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (!this.validateFields())
            return
        // validate password and email
        if (!this.passwordValid(this.state.password)) {
            let field = document.getElementById('password');
            field.classList.add('error');
            if (!this.emailValid(this.state.email)) {
                let field = document.getElementById('email');
                field.classList.add('error');
                return
            }
            return
        }
        if (!this.emailValid(this.state.email)) {
            let field = document.getElementById('email');
            field.classList.add('error');
            return
        }
        else 
            this.register()
    }
    render() {
        return(
            <>
            <h2 id="formTitle">Sign-Up</h2>
            <form onSubmit={this.onSubmit} className="ui form signupForm">
                <div className="two fields">
                    <div id="email" className="field">
                        <label>Email</label>
                        <input onInput={this.updateState} name="email" id="email" type="text" placeholder="Email"/>
                    </div>
                    <div id="password" className="field">
                        <label>Password</label>
                        <input onInput={this.updateState} name="password" id="password" type="password"/>
                    </div>
                </div>
                <div className="two fields">
                    <div id="firstName" className="field">
                        <label>First name</label>
                        <input onInput={this.updateState} name="firstName" type="text" placeholder="First Name"/>
                    </div>
                    <div id="lastName" className="field">
                        <label>Last name</label>
                        <input name="lastName" onInput={this.updateState} name="lastName" type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div id="city" className="field">
                    <label>City</label>
                    <input onInput={this.updateState} name="city" type="text" placeholder="City"/>
                </div>
                <button className="ui submit black button submitButton">Sign Up</button>
            </form>
            </>
        );
    }
}

export default withRouter(Signup);