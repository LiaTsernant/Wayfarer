import React from 'react';
import axios from 'axios';
import "./UploadPhoto.css"


class UploadPhoto extends React.Component {

  state = {
    success: false,
    url: ""
  };

  handleChange = (ev) => {
    this.setState({ success: false, url: "" });

  }  // Perform the upload
  handleUpload = (ev) => {
    let file = this.uploadInput.files[0];
    // Split the filename to get the name and type
    let fileParts = this.uploadInput.files[0].name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    axios.post("http://localhost:4000/api/v1/sign_s3", {
      fileName: fileName,
      fileType: fileType
    }).
      then(response => {
        var returnData = response.data.data.returnData;
        var signedRequest = returnData.signedRequest;
        var url = returnData.url;
        this.setState({ url: url })
        // Put the fileType in the headers for the upload
        var options = {
          headers: {
            'Content-Type': fileType
          },
          withCredentials: false,
        };
        axios.put(signedRequest, file, options)
          .then(result => {
            this.setState({ success: true });
          })
          .catch(error => {
            alert("ERROR " + JSON.stringify(error));
          })
      })
      .catch(error => {
        alert(JSON.stringify(error));
      })
  };

  render() {
    const Success_message = () => {
      this.props.setNewProfileLink(this.state.url);

      return (
        <div>
          <h5 style={{ color: 'green' }}>SUCCESSFUL UPLOAD</h5>
        </div>
      );
    }
    return (
      <div className="upload">
        <center>
          <h5>UPLOAD A FILE</h5>
          {this.state.success ? <Success_message /> : null}
          <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file" />
          <br />
          <button onClick={this.handleUpload}>UPLOAD</button>
        </center>
      </div>
    );
  }
} export default UploadPhoto;