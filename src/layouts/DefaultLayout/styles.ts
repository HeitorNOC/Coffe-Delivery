import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  background: ${(props) => props.theme['background']};
  
  display: flex;
  flex-direction: column;
`
