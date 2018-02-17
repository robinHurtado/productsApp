import React, { Component } from 'react';
import { connect } from 'react-redux';

import { filterHoltesByStars } from '../modules/hotels';
import star from '../Assets/icons/filters/star_yellow.svg';
import startBlack from '../Assets/icons/filters/star.svg';

const StarIcon = () => (
  <img src={star} alt="star_icon" />
);

let clickedBox = false;

class Stars extends Component{
  constructor(){
    super();
    this.state = {
      "allStars": true,
      "5": false,
      "4": false,
      "3": false,
      "2": false,
      "1": false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({[name]: target.checked});
    clickedBox = true;
  }

  render(){
    if (clickedBox) {
      this.props.dispatch(filterHoltesByStars(this.state));
    }
    return(
      <div className="card">
        <div className="card-body">
          <h4>
            <img
              src={startBlack}
              alt="search_icon"
              style={{width:"20px",height:"20px"}}
            />
            Estrellas
          </h4>
          <div>
            <input
              type="checkbox"
              name="allStars"
              checked={this.state["allStars"]}
              onChange={this.handleInputChange}
            />Todas las estrellas
          </div>
          <div>
            <input
              type="checkbox"
              name="5"
              checked={this.state["5"]}
              onChange={this.handleInputChange}
            /><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <div>
            <input
              type="checkbox"
              name="4"
              checked={this.state["4"]}
              onChange={this.handleInputChange}
            /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <div>
            <input
              type="checkbox"
              name="3"
              checked={this.state["3"]}
              onChange={this.handleInputChange}
            /><StarIcon /><StarIcon /><StarIcon />
          </div>
          <div>
            <input
              type="checkbox"
              name="2"
              checked={this.state["2"]}
              onChange={this.handleInputChange}
            /><StarIcon /><StarIcon />
          </div>
          <div>
            <input
              type="checkbox"
              name="1"
              checked={this.state["1"]}
              onChange={this.handleInputChange} /><StarIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Stars);