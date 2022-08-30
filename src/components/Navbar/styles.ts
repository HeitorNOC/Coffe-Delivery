import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 0;
`

export const Left = styled.div`
  
`

export const Right  =  styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    padding: 0 20px 0 4px;
    color: ${(props) => props.theme['purple-dark']};
  }
`