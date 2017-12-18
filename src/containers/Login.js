import React from 'react';
import { Redirect } from 'react-router';

class Login extends React.Component {
	state = {
    username: '',
    psw:'',
    msg: ''
  }

  handleSubmit(e){
		e.preventDefault();
    fetch('/api/login',{
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(response => response.json())
    .then(json => {
      if(json.data){
        this.setState({msg:"success"});
      } else {
        this.setState({msg:"User does not exist, try again."});
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
										 placeholder="Username"
										 name="username"
										 value={this.state.username}
										 onChange={this.onChangeInput.bind(this)}
										 required />
									</div>
								</div>
								<div className="form-group">
									<div className="col-sm-8 col-sm-offset-2">
										<input type="password"
										 className="form-control"
										 placeholder="Password"
										 name="psw"
										 value={this.state.psw}
                     onChange={this.onChangeInput.bind(this)}
										 required />
										{this.state.msg === "success" ? <Redirect to="/home" push /> :
                     <span style={{color:"red"}}>{this.state.msg}</span>}
									</div>
								</div>
								<div className="text-center button-form-container row">
									<button className="btn btn-success btn-primary col-md-4 col-md-offset-4">
										Login
									</button>
								</div>
								<div className="text-center form-footer link-form-container row">							
									<a href="/forgot-password">Forgot password?</a>
								</div>
							</form>
						</div>
					</div>
					<span className="col-sx-offset-2 col-md-offset-4">Don't have an account? <a href="/create-account">Signup</a></span>	
				</div>
			</div>
		);
	}
}

export default Login;