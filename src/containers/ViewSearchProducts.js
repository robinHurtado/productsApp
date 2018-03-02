import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  TextField
} from 'react-md';

import { requestViewMode } from '../modules/viewMode';
import { filterByName } from '../modules/products';

class ViewSearchProducts extends PureComponent{

  handleChange(arg){
    this.props.dispatch(requestViewMode());
    this.props.changeView(arg);
  }

  filterName(name){
    console.log(name);
    //this.props.dispatch(filterByName(name));
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
        <h5>Showing 10 products - Hidden: 5</h5>
        <TextField
          id="floating-center-title"
          label="Search"
          value=""
          onChange={this.filterName.bind(this)}
          className="md-cell md-cell--bottom field-search"
        />
      </div>
    );
  }
}

const mapStateToProps = ({viewMode}) => ({viewMode});

export default connect(mapStateToProps)(ViewSearchProducts);