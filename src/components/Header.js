import React from 'react'
import styled from 'styled-components'

const HeaderDiv = styled.div`
  background: #2977f5;
  position: fixed;
  z-index: 100000001;
  display: flex;
  top: 0;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  -webkit-box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.17);
  -moz-box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.17);
  box-shadow: 0px 3px 16px 1px rgba(0, 0, 0, 0.17);
`

const HeaderText = styled.div`
  color: white;
  font-size: 1.2rem;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
`

const Header = () => (
  <HeaderDiv>
    <HeaderText>Minol</HeaderText>
  </HeaderDiv>
)

export default Header
