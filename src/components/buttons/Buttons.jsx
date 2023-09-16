import styled from 'styled-components'

export const Button = styled.button`
  width: ${(props) => {
    return props.width ? props.width : '55px'
  }};
  height: 50px;
  font-size: 25px;
  font-weight: 900;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 600px) {
    width: ${(props) => {
      return props.width ? props.width : '80px'
    }};
  }
`
