import React, { Component } from 'react';
import axios, { post } from 'axios';
import { browserHistory } from 'react-router';



class Main extends Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null,
      hash:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data.hash);
      this.setState({ hash: response.data.hash});
      this.directUser()
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }
  directUser(){

    //return <Redirect to='http://localhost:8080/ipfs/' + this.state.hash />
    //const path = `/repos/${this.state.hash}`
    window.location.assign('http://localhost:8080/ipfs/' + this.state.hash);

    console.log(this.state.hash);
  }
  fileUpload(file){
    const url = '/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
        <form class="bottom-form" onSubmit={this.onFormSubmit}>

        <input id="choose-file" class="col align-self-center" type="file" onChange={this.onChange} />
        <button class="col align-self-center" type="submit">Upload Project</button>
      </form>
   )
  }
}

export default Main
