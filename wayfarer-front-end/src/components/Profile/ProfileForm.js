import React from 'react';
import './Profile.css';

class ProfileForm extends React.Component {
    state = {
        userProfile: '',
    }

    onChange = (event) => {
        this.setState({
            user: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const updProfile = this.props.user;
              updProfile = this.state.user;
        this.props.updateProfile(updProfile);
        this.setState({ userProfile: '' });
        this.props.toggleBodyForm();
    }

    render() {
        return(
            <div style={this.props.style} className="ui form">
                <div className="field">
                {/* <form onSubmit={ this.onSubmit }>
                    <input
                        autoFocus={this.props.autoFocus}
                        onChange={ this.onChange }
                        type='text'
                        value={this.props.firstName} />
                        <input
                        autoFocus={this.props.autoFocus}
                        onChange={ this.onChange }
                        type='text'
                        value={this.props.lastname} />
                        <input
                        autoFocus={this.props.autoFocus}
                        onChange={ this.onChange }
                        type='text'
                        value={this.props.city} />
                    <button type='submit'>Save</button>
                </form> */}
                </div>
            </div>
        )
    }
}

export default ProfileForm;