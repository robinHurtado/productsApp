import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterHoltes } from '../modules/hotels';

class HotelName extends Component {
  constructor(){
    super();
    this.state = {
      hotelName: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.onChangeInput =  this.onChangeInput.bind(this)
  }

  handleClick(){
    this.props.dispatch(filterHoltes(this.state));
  }

  onChangeInput(e){
    const target = e.target;
    const name = target.name;
    this.setState({[name]: target.value});
  }

  render(){
    return(
      <div
        className="card"
        style={{marginBottom: '1%'}}
      >
        <div className="card-body">
          <h4>Nombre de hotel</h4>
          <div className="input-group">
            <input
              type="text"
              name="hotelName"
              className="form-control"
              placeholder="Ingrese nombre del hotel"
              value={this.state.hotelName}
              onChange={this.onChangeInput}
              required
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleClick}
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(HotelName);