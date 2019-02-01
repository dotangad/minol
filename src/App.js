import React, { Component } from 'react'
import styled from 'styled-components'

import Header from './components/Header'
import SearchBox from './components/SearchBox'
import BeerCard from './components/BeerCard'

const Content = styled.div`
  position: relative;
  /* top: calc(120px + 1rem);*/
  top: 80px;
  z-index: 100000000;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      beers: {}
    }
  }

  async componentWillMount() {
    // Fetch data from API
    const data = await (await fetch('/beercraft')).json()
    this.setState({
      loading: false,
      beers: data
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox type="text" placeholder="Search" />
        <Content>
          {this.state.loading ? (
            <p>loading...</p>
          ) : (
            this.state.beers.map(beer => <BeerCard beer={beer} />)
          )}
        </Content>
      </div>
    )
  }
}

export default App
