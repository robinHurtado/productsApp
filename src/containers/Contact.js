import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  TextField,
  Button
} from 'react-md';

import { sendData } from '../modules/contact';

class Contact extends PureComponent {
  state = {
    firtName: '',
    lastName: '',
    email: '',
    subject: ''
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(sendData(this.state));
  }

  handleChange(val,{target}){
    this.setState({[target.name]: val});
  }

  render(){
    return(
      <div>
        <center>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <TextField
              id="floating-center-title"
              label="First Name"
              name="firtName"
              lineDirection="center"
              placeholder="Your name…"
              maxLength={225}
              value={this.state.firtName}
              onChange={this.handleChange.bind(this)}
              error={false}
              errorText="Please write down your first name"
              className="md-cell md-cell--bottom"
              required
            />
            <TextField
              id="floating-center-title"
              label="Last Name"
              name="lastName"
              lineDirection="center"
              placeholder="Your last name…"
              maxLength={225}
              value={this.state.lastName}
              onChange={this.handleChange.bind(this)}
              error={false}
              errorText="Please write down last first name"
              className="md-cell md-cell--bottom"
              required
            />
            <TextField
              id="floating-center-title"
              label="Email"
              name="email"
              lineDirection="center"
              placeholder="Your email address…"
              maxLength={225}
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              error={false}
              errorText="Don’t forget to tell us what your email address is"
              className="md-cell md-cell--bottom"
              required
            />
            <TextField
              id="floating-center-title"
              label="Subject"
              name="subject"
              lineDirection="center"
              placeholder="Let us know your concerns!"
              maxLength={500}
              value={this.state.subject}
              onChange={this.handleChange.bind(this)}
              error={false}
              errorText="Don’t forget to write something to use!"
              className="md-cell md-cell--bottom"
              required
            />
            <Button type="submit" raised primary>SUBMIT</Button>
          </form>
        </center>
      </div>
    );
  }
}

export default connect()(Contact);