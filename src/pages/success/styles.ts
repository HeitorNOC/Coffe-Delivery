import styled from "styled-components";

export const SuccessContainer1 = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;

    h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 32px;
        color: ${(props) => props.theme['yellow-dark']};
    }

    p {
        font-size: 20px;
        color: ${(props) => props.theme['base-subtitle']};
    }
`

export const SuccesContainerMain = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2.5rem;
`

export const Left = styled.div`
    padding: 40px;
    border-radius: 6px 36px;
    border-image: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
    border: 1px solid; 


`

export const Right = styled.div`
    margin-left: 6.375rem;
`

export const BoxDetails = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2rem;

    p:nth-child(1) {
        margin-bottom: 2px;
    }
    
    .icon1 {
        padding: 0.5rem;
        background: ${(props) => props.theme['purple']};
        border-radius: 999px;
        margin-right: 0.75rem;
    }
    .icon2 {
        padding: 0.5rem;
        background: ${(props) => props.theme['yellow']};
        border-radius: 999px;
        margin-right: 0.75rem;
    }
    .icon3 {
        padding: 0.5rem;
        background: ${(props) => props.theme['yellow-dark']};
        border-radius: 999px;
        margin-right: 0.75rem;
    }

    
`