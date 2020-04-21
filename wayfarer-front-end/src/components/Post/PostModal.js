import React from 'react';
import './PostModal.css'
import UserApi from '../../api/UserApi';

class PostModal extends React.Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  };

  validateFields = () => {
    // Puts state keys in keys array
    let keys = ['title','body']
    let valid = true
    keys.map(key => {
        let field = document.getElementById(key);
        field.classList.remove('error');
        if (field.value === '') {
            valid = false;
            // add class error to fields
            field.parentElement.setAttribute('class', 'field error');
        }
    })
    return valid;
}
  onSubmit = (e) => {
    e.preventDefault();
    // validate forms
    if (this.validateFields()) {
      UserApi.postCreate({
        title: document.getElementById('title').value,
        body: document.getElementById('body').value,
        user: this.props.user._id,
        city: this.props.cityId,
      })
      .then(res => {
        this.props.update();
        this.onClose();
      });
    }
  }
  render() {
    if(!this.props.show){
        return null;
    };
    return (
      <div className="modal" id="modal">
        <div id="fields">
          <form className="ui form" onSubmit={this.onSubmit}> 
            <h2>Create a Post!</h2>
            <div className="field">
              <label>Title</label>
              <input id="title" name="title" type="text" placeholder="Title"/>
            </div>
            <div className="field">
              <label>Body</label>
              <textarea id="body" name="body" rows="2" placeholder="This city is..."></textarea>
            </div>
            <button className="ui primary button" onClick={this.onSubmit}> Submit </button>
            <button className="ui button profile" onClick={() => {this.onClose()}}> Close </button>
          </form>
        </div>
      </div>
    )
  }
}

export default PostModal;