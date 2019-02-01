import React from 'react'
import styled from 'styled-components'

import { Link } from './Helpers'

const Footer = styled.div`
  background: #2977f5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  position: absolute;
  bottom: 0;
`

export default () => (
  <Footer>
    &copy;
    <Link
      style={{ padding: '0 5px', color: 'white' }}
      href="//twitter.com/dotangad"
    >
      Angad Singh
    </Link>
    2018
  </Footer>
)
