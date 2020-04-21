import React from 'react';
import './PostModal.css'
import UserApi from '../../api/UserApi';

class UpdateModal extends React.Component {
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
    UserApi.postUpdate(this.props.post._id, {
      title: document.getElementById('title').value,
      body: document.getElementById('body').value
    })
    .then(res => {
      this.props.update();
      this.onClose();
    })
    
  }
  render() {
    if(!this.props.inUpdate){
        return null;
    };
    return (
      <div class="modal" id="modal">
        <div id="fields">
          <form className="ui form" onSubmit={this.onSubmit}> 
            <h2>Update a Post!</h2>
            <div className="field">
              <label>Title</label>
              <input id="title" defaultValue={this.props.post.title} name="title" type="text" placeholder="Title"/>
            </div>
            <div className="field">
              <label>Body</label>
              <textarea id="body" defaultValue={this.props.post.body} name="body" rows="2" placeholder="This city is..."></textarea>
            </div>
            <button className="ui primary button" onClick={this.onSubmit}> Update </button>
            <button className="ui button" onClick={() => {this.onClose()}}> Close </button>
          </form>
        </div>
      </div>
    )
  }
}

export default UpdateModal;