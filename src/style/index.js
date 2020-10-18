import styled from "styled-components"
export const WrapUI = styled.div`
  color: red;
`
export const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`

export const TomatoButton = styled(Button)`
  background: tomato;
`

const padding = "3em"

export const Section = styled.section`
  color: white;

  /* Pass variables as inputs */
  padding: ${padding};

  /* Adjust the background from the properties */
  background: ${props => props.background};
`
