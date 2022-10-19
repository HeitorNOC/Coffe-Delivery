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

  .circle {
    display: flex;
    position: absolute;
    margin-left: 190px;
    margin-top: -45px;
    align-items: center;
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
    background-color: #C47F17;
    border-radius: 9999px;
    font-size: 12px;
    font-family: 'Baloo 2';
    color: white;
  }
`