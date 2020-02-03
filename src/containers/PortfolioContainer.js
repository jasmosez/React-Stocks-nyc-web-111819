import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log("rendering portfolio container")
    let portfolio = this.props.portfolio.map((item, index) => <Stock 
      clickAction={this.props.sell} 
      key={index} 
      {...item} />)

    //map array of objects to array of components

    return (
      <div>
        <h2>My Portfolio</h2>
          { portfolio }
      </div>
    );
  }

}

export default PortfolioContainer;
