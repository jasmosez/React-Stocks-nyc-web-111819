import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  compare = (a, b) => {
    if (a > b) {
      return 1
    }
    if (b > a) {
      return -1
    }
    return 0
  }

  render() {
    // make a copy of array of objects in state
    let stockList = [...this.props.stocks]
    
    //run filters and sorting
    if (this.props.sort === "Alphabetically") {
      stockList = stockList.sort((a, b) => this.compare(a.name.toLowerCase(), b.name.toLowerCase()))
    }
    if (this.props.sort === "Price") {
      stockList = stockList.sort((a, b) => this.compare(a.price, b.price))
    }
    if (this.props.filter) {
      stockList = stockList.filter(stock => stock.type === this.props.filter)
    }
    
    //map array of objects to array of components
    let displayStocks = stockList.map(stock => 
      <Stock clickAction={this.props.buy} key={stock.id} {...stock} />
    )

    return (
      <div>
        <h2>Stocks</h2>
        {displayStocks}
      </div>
    );
  }

}

export default StockContainer;
