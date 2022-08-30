import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  input {
    background: transparent;
    border: 1px solid #E6E5E5;
    border-radius: 4px;
    background: #EEEDED;
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
    padding: 0 0.75rem;
    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme['yellow-dark']};
    }
    &::placeholder {
      color: ${(props) => props.theme['base-label']}
    }
  }
`

const BaseInput = styled.input`
  background: transparent;
  border: 1px solid #E6E5E5;
  border-radius: 4px;
  background: #EEEDED;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  padding: 0 0.75rem;
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }
  &::placeholder {
    color: ${(props) => props.theme['base-label']}
  }
`

export const CEPInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const RuaInput = styled(BaseInput)`

`

export const ComplInput = styled(BaseInput)`

`
export const BairInput = styled(BaseInput)`

`
export const CidInput = styled(BaseInput)`

`
export const UFInput = styled(BaseInput)`

`
