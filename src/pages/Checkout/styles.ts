import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;
`

export const TextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Wrapper = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-left: 2.5rem;
  }
  
`

export const Left = styled.div`
  div.LeftUpper {
    margin-bottom: 2rem;
    display: flex;
    max-width: 640px;
    padding: 40px;
    div.LeftUpperText {
      margin-left: 0.5rem;
      h4 {
        font-size: 1rem;
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 400;
        margin-bottom: 2px;
      }
      p {
        font-size: 0.875rem;
        color: ${(props) => props.theme['base-text']};
      }
    } 
  }
`

export const Right = styled.div`
  max-width: 448px;
  padding: 40px;
`