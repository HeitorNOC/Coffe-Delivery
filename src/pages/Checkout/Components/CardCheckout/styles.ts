import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 4px;
  gap: 59px;
  
  margin-bottom: 1.5rem;
`

export const Left = styled.div`
  img {
    width: 64px;
    margin-right: -20px;
  }
`

export const Mid = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    color: ${(props) => props.theme['base-subtitle']};
    white-space: nowrap;
    margin-bottom: 1rem;
    font-weight: 400;
  }
  div.MidDown {
    display: flex;    
    gap: 8px;

    span.text {
      color: ${(props) => props.theme['base-title']};
    } 
    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 0.75rem;
    }
  } 
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  span {
    font-weight: 700;
  }
`