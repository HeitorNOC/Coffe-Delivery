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
  h2.right {
    margin-right: 18rem;
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
    display: flex;
    max-width: 640px;
    padding: 40px 0 32px 0;
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
  div.LeftDown {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 32px;
    padding: 40px 0;

    div.upper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 0px;
      gap: 8px;

      div.upperText {
        h4 {
          margin-bottom: 2px;
          color: ${(props) => props.theme['base-subtitle']};
          font-weight: 400;
        }
      } 
    }

    div.down {
      display: flex;
      gap: 12px;
      align-items: center;
      justify-content: center;
      div {
        display: flex;
        padding: 16px;
        gap: 12px;
        align-items: center;
      }
    } 
  }
`

export const Right = styled.div`
  max-width: 448px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 24px;
  margin-top: -5.5rem;

  div.rightDown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    
    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 368px;
    }

    div.rightDownUp {
      p {
        font-size: 0.875rem;
        margin-bottom: 0.75rem;
      }
      span {
        font-size: 1rem;
      }
    }
    div.rightDownMid {
      p {
        font-size: 0.875rem;
        margin-bottom: 10px;
      }
      span {
        font-size: 1rem;
      }
    }
    div.rightDownDown {
      font-weight: 700;
      font-size: 20px;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 1.5rem;
    }
  } 
`

export const ConfirmButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  width: 368px;
  height: 46px;
  background: ${(props) => props.theme['yellow']};
  border-radius: 6px;
  border: none;

  

  color: ${(props) => props.theme['white']};
  font-size: 0.875rem;
  font-weight: 700;

  cursor: pointer;


`