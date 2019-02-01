import React from 'react'
import styled from 'styled-components'

const BeerCard = styled.div`
  width: 80%;
  max-width: 500px;
  border: none;
  border-radius: 10px;
  margin: 20px auto;
  // background: #f8f8f8;
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

export default () => (
  <BeerCard>
    <BeerImg
      src="https://www.telegraph.co.uk/content/dam/Food%20and%20drink/2015-09/01sep/beer-craft.jpg?imwidth=450"
      alt="pint glass of beer"
    />
    <BeerDetails>
      <BeerName>Random Beer</BeerName>
      <BeerDetailsTable>
        <tbody>
          <tr>
            <td>ABV</td>
            <td>0.2</td>
          </tr>
          <tr>
            <td>IBU</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td>ID</td>
            <td>1289</td>
          </tr>
          <tr>
            <td>Style</td>
            <td>American Pale Ale (APA)</td>
          </tr>
          <tr>
            <td>Ounces</td>
            <td>15</td>
          </tr>
        </tbody>
      </BeerDetailsTable>
    </BeerDetails>
  </BeerCard>
)
