import React from 'react';
import userApi from '../../api/UserApi';
import { withRouter } from 'react-router-dom';
import './Login.css';
class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    login = () => {
        userApi.login(this.state)
        .then(res => {
            this.props.loggedIn(res.data.user);
            // this.props.history.push('/profile');
        });
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
                // add label
            }
        })
        return valid;
    }

    updateState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.validateFields())
            this.login()
    }

    render() {
        return(
            <>
            <h2 id="formTitle">Login</h2>
            <form onSubmit={this.onSubmit} className="ui form loginForm">
                    <div id="email" className="field">
                        <label>Email</label>
                        <input onInput={this.updateState} name="email" type="text" placeholder="Email"/>
                        </div>
                        <div id="password" className="field">
                        <label>Password</label>
                        <input onInput={this.updateState} name="password" type="password"/>
                    </div>
            <button className="ui submit black button submitButton">Login</button>
        </form>
        </>
        );
    }
}

export default withRouter(Login);