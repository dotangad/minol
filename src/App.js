import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import SearchBox from './components/SearchBox'
import BeerCard from './components/BeerCard'
import Cart from './components/Cart'

const Content = styled.div`
  position: relative;
  /* top: calc(120px + 1rem);*/
  top: 80px;
  z-index: 100000000;
  padding-bottom: 120px;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      cart: [],
      beers: []
    }
  }

  async componentWillMount() {
    // Fetch data from API
    const data = await (await fetch('/beers.json')).json()

    this.setState({
      loading: false,
      rawBeers: data,
      beers: data
    })
  }

  handleCart = id => {
    // Remove from cart if product is already there
    // Add if not
    const f = this.state.cart.findIndex(b => b.id === id)
    if (f !== -1) {
      this.setState(({ cart }) => {
        cart.splice(f, 1)
        return { cart }
      })
    } else {
      this.setState(({ cart, rawBeers }) => ({
        cart: [...cart, rawBeers.find(b => b.id === id)]
      }))
    }
  }

  handleRemove = id => {
    this.setState(({ cart }) => {
      cart.splice(cart.findIndex(b => b.id === id), 1)
      return { cart }
    })
  }

  handleSearch = e => {
    const searchTerm = e.target.value
    this.setState(ps => ({
      beers:
        searchTerm === ''
          ? ps.rawBeers
          : ps.rawBeers.filter(b =>
              b.name
                .toLowerCase()
                .replace(' ', '')
                .includes(searchTerm.toLowerCase().replace(' ', ''))
            )
    }))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox
          onChange={this.handleSearch}
          type="text"
          placeholder="Search"
        />
        <Content>
          {this.state.loading ? (
            <p>loading...</p>
          ) : (
            this.state.beers.map(beer => (
              <BeerCard
                beer={beer}
                inCart={this.state.cart.indexOf(beer.id)}
                handleCart={this.handleCart}
              />
            ))
          )}
        </Content>
        <Cart cart={this.state.cart} handleRemove={this.handleRemove} />
      </div>
    )
  }
}

export default App
