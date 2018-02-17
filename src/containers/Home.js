import React, {Component} from 'react';
import { connect } from 'react-redux';

import Filter from '../components/Filter';
import HotelCard from '../components/HotelCard';
import { fetchHotels } from '../modules/hotels';

class Home extends Component {
  componentWillMount(){
    this.props.dispatch(fetchHotels());
  }

  render(){
    const { hotels } = this.props;

    return(
      <div>
        {
          hotels.map((obj) => (
            <HotelCard key={obj.id} {...obj} />
          ))
        }
        <Filter />
      </div>
    );
  }
}

const mapStateToProps = ({hotels}) => ({
  hotels
});

export default connect(mapStateToProps)(Home);