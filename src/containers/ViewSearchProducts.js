import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Button,
  TextField
} from 'react-md';

import { requestViewMode } from '../modules/viewMode';
import { filterByName } from '../modules/products';

class ViewSearchProducts extends PureComponent{
  static propTypes = {
    viewMode: PropTypes.object.isRequired,
    showing: PropTypes.number.isRequired,
    totalProducts: PropTypes.number.isRequired
  }

  state = {
    text: ""
  }

  handleChange(arg){
    this.props.dispatch(requestViewMode());
    this.props.changeView(arg);
  }

  handleTextChange(text, e){
    this.setState({ text: e.target.value })
    this.props.dispatch(filterByName(text));
  }

  render(){
    const { viewMode } = this.props;
    return(
      <div>
        <Button
          icon
          forceIconSize
          forceIconFontSize
          disabled={viewMode.list}
          onClick={this.handleChange.bind(this,"block")}
        >
          view_list
        </Button>
        <Button
          icon
          forceIconSize
          forceIconFontSize
          disabled={viewMode.block}
          onClick={this.handleChange.bind(this,"list")}
        >
          view_module
        </Button>
        <h5>
          Showing {this.props.showing} products -
          Hidden: {this.props.totalProducts - this.props.showing}
        </h5>
        <TextField
          id="floating-center-title"
          label="Search"
          value={this.state.text}
          onChange={this.handleTextChange.bind(this)}
          className="md-cell md-cell--bottom field-search"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ viewMode, totalProducts }) => ({ viewMode, totalProducts });

export default connect(mapStateToProps)(ViewSearchProducts);