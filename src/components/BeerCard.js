import React from 'react'
import styled from 'styled-components'

const BeerCard = styled.div`
  width: 80%;
  max-width: 500px;
  border: none;
  border-radius: 10px;
  margin: 20px auto;
  -webkit-box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.13);
  -moz-box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.13);
  box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.13);
`

const BeerImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`

const BeerDetails = styled.div`
  padding: 20px;
`

const BeerName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
`

const BeerDetailsTable = styled.table`
  border: none;
  border-collapse: collapse;
`

const Buttons = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
`

const Button = styled.a`
  text-transform: uppercase;
  font-size: 0.9rem;
  width: 50%;
  height: 100%;
  background: #2977f5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ({ beer, inCart, handleCart }) => (
  <BeerCard>
    <BeerImg
      src="https://www.telegraph.co.uk/content/dam/Food%20and%20drink/2015-09/01sep/beer-craft.jpg?imwidth=450"
      alt="pint glass of beer"
    />
    <BeerDetails>
      <BeerName>{beer.name}</BeerName>
      <BeerDetailsTable>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{beer.id}</td>
          </tr>
          <tr>
            <td>Style</td>
            <td>{beer.style}</td>
          </tr>
          <tr>
            <td>Ounces</td>
            <td>{beer.ounces}</td>
          </tr>
          <tr>
            <td>ABV</td>
            <td>{beer.abv}</td>
          </tr>
          {beer.ibu ? (
            <tr>
              <td>IBU</td>
              <td>{beer.ibu}</td>
            </tr>
          ) : (
            ''
          )}
        </tbody>
      </BeerDetailsTable>
    </BeerDetails>
    <Buttons>
      <Button
        style={{ borderRadius: '0 0 0 10px' }}
        onClick={() => handleCart(beer.id)}
      >
        {inCart ? (
          <>
            <i
              style={{
                marginRight: '5px',
                fontsize: '0.8rem'
              }}
              className="fas fa-shopping-cart"
            />
            Add to cart
          </>
        ) : (
          <>
            <i
              style={{
                marginRight: '5px',
                fontsize: '0.8rem'
              }}
              className="fas fa-times"
            />
            Remove from cart
          </>
        )}
      </Button>
      <Button
        style={{
          borderRadius: '0 0 10px 0',
          background: '#3281FF'
        }}
      >
        More Info
        <i
          style={{
            marginLeft: '5px',
            fontSize: '1rem'
          }}
          className="fas fa-angle-right"
        />
      </Button>
    </Buttons>
  </BeerCard>
)
