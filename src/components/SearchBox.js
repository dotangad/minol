import styled from 'styled-components'

const SearchBox = styled.input`
  display: block;
  position: relative;
  top: 60px;
  width: 80%;
  max-width: 300px;
  margin: 30px auto;
  padding: 15px 25px;
  font-size: 1rem;
  background: #f8f8f8;
  border: none;
  border-radius: 50px;
  &:focus {
    outline: none;
  }
`

export default SearchBox
