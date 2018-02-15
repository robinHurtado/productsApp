import React, {Component} from 'react';
import Filter from './Filter';
import HotelCard from './HotelCard';

export default class Home extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('/api/hotels',{
      method: 'get',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(({data}) => {
      this.setState({data})
    });
  }

  render(){
    return(
      <div>
        {
          this.state.data.map((obj) =>(
            <HotelCard key={obj.id} {...obj} />
          ))
        }
        <Filter />
      </div>
    );
  }
}
