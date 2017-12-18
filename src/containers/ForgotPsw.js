import React from 'react';
import { Redirect } from 'react-router';

class ForgotPsw extends React.Component {
  state = {
    psw: '',
    confirmPsw: '',
    email: '', 
    msg: ''
  }

  handleSubmit(e){
    e.preventDefault();
    const isValid = this.validatePsws();
    isValid && this.handleRequest();
  }

  validatePsws(){
    const {psw, confirmPsw } = this.state;
    if (psw !== confirmPsw) {
      this.setState({msg:'Passwords do not match'});
      return false;
    }
    return true;
  }

  handleRequest(){
    fetch('/api/change-password',{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(json => {
      if(json.success){
        this.setState({msg:"success"});
      } else {
        this.setState({msg:json.data.message});
      } 
    });
  }

  onChangeInput(e){
    const target = e.target;
    const name = target.name;
    this.setState({[name]: target.value});
  }
  
  render(){
    return(
      <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-4 col-md-offset-4">
            <div className="panel panel-default margin-top custom-panel">
              <div className="panel-body custom-panel-body">
                <form className="form-horizontal form" onSubmit={this.handleSubmit.bind(this)}>
                  <div className="form-group">
                    <div className="col-xs-8 col-xs-offset-2">
                      <input type="text" 
                        className="form-control"
                        placeholder="Type your Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeInput.bind(this)}
                        required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-xs-8 col-xs-offset-2">
                      <input type="password"
                      className="form-control"
                      placeholder="Type New Password"
                      name="psw"
                      value={this.state.psw}
                      onChange={this.onChangeInput.bind(this)}
                      required />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-2">
                      <input type="password"
                      className="form-control"
                      placeholder="Confirm New Password"
                      name="confirmPsw"
                      value={this.state.confirmPsw}
                      onChange={this.onChangeInput.bind(this)}
                      required />
                      {this.state.msg === "success" ? <Redirect to="/home" push /> :
                      <span style={{color:"red"}}>{this.state.msg}</span>}
                    </div>
                  </div>
                  <div className="text-center button-form-container row">
                    <button className="btn btn-success btn-primary col-md-4 col-md-offset-4">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ForgotPsw;