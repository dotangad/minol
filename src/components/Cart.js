import React from 'react'
import styled from 'styled-components'

const CartDiv = styled.div`
  height: 600px;
  position: fixed;
  top: calc(100% - 60px);
  width: 100%;
  max-width: 500px;
  z-index: 10000000001;
  transition: top 0.5s ease;
`

const CartHeader = styled.div`
  height: 60px;
  width: 100%;
  border-radius: 20px 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: #2977f5;
  color: white;
  font-size: 0.9rem;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
`

const CartContents = styled.div`
  height: 480px;
  background: white;
  padding: 20px 0;
`

const MoveToCheckout = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-family: 'Montserrat', sans-serif;
  font-weight: light;
  background: #2977f5;
  color: white;
  text-transform: uppercase;
`

const CartItem = styled.div`
  margin: 0 auto;
  margin-bottom: 10px
  width: 80%;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.13);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  overflow-y: auto;
`

export default class Cart extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <CartDiv
        style={{
          top: this.state.open ? 'calc(100% - 600px)' : 'calc(100% - 60px)'
        }}
      >
        <CartHeader
          onClick={() => this.setState(({ open }) => ({ open: !open }))}
        >
          <div>Cart</div>
          <div>
            <i
              style={{
                transform: `rotate(${this.state.open ? '180' : '0'}deg)`,
                transition: 'transform 0.5 ease'
              }}
              className="fas fa-arrow-up"
            />
          </div>
        </CartHeader>
        <CartContents>
          {this.props.cart.map(c => (
            <CartItem onClick={() => this.props.handleRemove(c.id)}>
              <div>{c.name}</div>
              <i className="fas fa-times" />
            </CartItem>
          ))}
        </CartContents>
        <MoveToCheckout>
          Checkout
          <i
            style={{ marginLeft: '5px', fontSize: '0.8rem' }}
            className="fas fa-arrow-right"
          />
        </MoveToCheckout>
      </CartDiv>
    )
  }
}
