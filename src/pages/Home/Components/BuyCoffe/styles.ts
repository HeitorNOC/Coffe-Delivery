import styled from "styled-components";

export const Container = styled.div`
  max-width: 16rem;
  max-height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    align-self: center;
    padding-bottom: 0.75rem
  }

  span.sub {
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;
    text-transform: uppercase;
    padding: 4px 8px;
  } 

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    margin: 1rem 0 0.5rem 0;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    text-align: center;
    flex-wrap: wrap;
    
  }
`

export const Wrapper = styled.div`
  margin-top: 33px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  p {
    color: ${(props) => props.theme['base-text']};
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    

    span {
      color: ${(props) => props.theme['base-text']};
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;
    }
  }

  div {
    margin-left: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  }

  span.text {
    color: ${(props) => props.theme['base-title']};
  } 

  span.shop {
    padding: 8px;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-dark']};
    display: flex;
    margin-left: 0.5rem;
  } 
`