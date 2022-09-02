import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;

  input {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
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

  label {
    font-size: 12px;
    color: ${(props) => props.theme['base-label']};
    font-style: italic;
    padding: 0.75rem 0;
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

export const RuaInput = styled(BaseInput)`
  width: 560px;
  height: 42px
`

export const ComplInput = styled(BaseInput)`
  width: 348px;
  height: 42px;
`
export const BairInput = styled(BaseInput)`
  width: 200px;
  height: 42px;
`
export const CidInput = styled(BaseInput)`
  width: 276px;
  height: 42px;
`
export const UFInput = styled(BaseInput)`
  width: 60px;
  height: 42px;
`
