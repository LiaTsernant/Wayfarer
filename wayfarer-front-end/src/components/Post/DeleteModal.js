import React from 'react';
import './PostModal.css'
import UserApi from '../../api/UserApi';

class DeleteModal extends React.Component {
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
            field.classList.add('error');
        }
    })
    return valid;
}
  onSubmit = (e) => {
    e.preventDefault();
    // validate forms
    UserApi.postDelete(this.props.post)
    .then(res => {
      this.props.update();
      this.onClose();
    })
    
  }
  render() {
    if(!this.props.show){
        return null;
    };
    return (
      <div class="modal" id="modal">
        <div id="fields">
          <form className="ui form" onSubmit={this.onSubmit}> 
          <h2>Are you sure you want to delete this post?</h2>
            <button className="ui primary button" onClick={this.onSubmit}> Yes, I'm Sure! </button>
              <button className="ui button" onClick={() => {this.onClose()}}> No! </button>
          </form>
        </div>
      </div>
    )
  }
}

export default DeleteModal;