import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  TextField,
  Button
} from 'react-md';

import { sendData } from '../modules/contact';
import { showLoader } from '../modules/isFetching';

class Contact extends PureComponent {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired
  }

  state = {
    firtName: '',
    lastName: '',
    email: '',
    subject: '',
    disable: true
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.dispatch(showLoader());
    this.props.dispatch(sendData(this.state)); // send data to server
  }

  handleChange(val,{target}){
    this.setState({[target.name]: val});
    // enable or disable submit button depending of the state
    setInterval(() => {
      const {firtName, lastName, email, subject } = this.state;
      if (firtName && lastName && email && subject){
        // enable button
        this.setState({disable: false});
      } else{
        // disable button
        this.setState({disable: true});
      }
    },1000);
  }

  render(){
    const { isFetching } = this.props;
    if (isFetching){
      return(
        <center><div className="loader"></div></center>
      );
    }
    return(
      <div className="form--center-horizontally">
        <div className="form--center-vertically">
          <form
            className="form"
            onSubmit={this.handleSubmit.bind(this)}
          >
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
              className="md-cell md-cell--bottom form__textfield"
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
              className="md-cell md-cell--bottom form__textfield"
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
              className="md-cell md-cell--bottom form__textfield"
              required
            />
            <TextField
              id="floating-center-title"
              label="Subject"
              name="subject"
              lineDirection="center"
              placeholder="Let us know your concerns!"
              maxLength={500}
              rows={5}
              value={this.state.subject}
              onChange={this.handleChange.bind(this)}
              error={false}
              errorText="Don’t forget to write something to use!"
              className="md-cell md-cell--bottom form__textfield"
              required
            />
            <Button
              type="submit"
              raised
              primary
              className="form__button"
              disabled={this.state.disable}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ isFetching }) => ({ isFetching });

export default connect(mapStateToProps)(Contact);