import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const url = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
    portfolio: [],
    stocks: [],
    sort: "",
    filter: ""
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(stocks => {
        this.setState({
          stocks
        })
      })
  }

  buy = (id) => {
    //  if stock does not already exist in portfolio, then add it
    if (!this.state.portfolio.find(item => item.id === id)) {
      const stock = this.state.stocks.find(item => item.id === id)
      this.setState({
        portfolio: [...this.state.portfolio, stock]
      })
    } else {
      alert("You already own this stock!");
    }
  }

  sell = (id) => {
    let updatedPortfolio = this.state.portfolio.filter(item => item.id !== id)
    this.setState({
      portfolio: [...updatedPortfolio]
    })
  }

  sortHandler = (value) => {
    this.setState({
      sort: value
    })
  }

  filterHandler = (value) => {
    this.setState({
      filter: value
    })
  }

  render() {
    console.log("rendering Main Container")
    return (
      <div>
        <SearchBar sort={this.state.sort} filter={this.state.filter} sortHandler={this.sortHandler} filterHandler={this.filterHandler} />
        <hr />

          <div className="row">
            <div className="col-8">

            <StockContainer sort={this.state.sort} filter={this.state.filter} buy={this.buy} stocks={this.state.stocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer sell={this.sell} portfolio={this.state.portfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
