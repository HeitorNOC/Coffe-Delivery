import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 94px;
`

export const Left = styled.div`
  padding: 0 79px 0 0 ;
`

export const Right = styled.div`
  img {
    padding-top: 1rem;
  }
`

export const TextDiv = styled.div`
  p:nth-child(1) {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    
  }
  p:nth-child(2) {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    padding: 1rem 0 4.125rem 0;
  }
`

export const IconsDiv = styled.div`
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap; 
    gap: 1.25rem 2.5rem;
    align-items: center;
  }
  div:nth-child(3) {
    margin-right: -6px;
  }
`

export const CoffeWrapper = styled.div`
  margin-top: 8.75rem;
  margin-bottom: 5rem;

  h1 {
    margin-bottom: 3.375rem;
  }
`

export const DivDown = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`