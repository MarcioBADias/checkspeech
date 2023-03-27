import styled from "styled-components";

export const Section = styled.section`
    background: var(--cor-dark-primary);
    align-items: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

export const Container = styled.div`
    background: var(--cor-dark-primary);
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    width: 100vw;

    @media (max-width: 840px) {
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;


export const PriceBox = styled.div`
    align-items: center;
    background: linear-gradient(90deg, var(--cor-light-secondary) 0%, var(--cor-light-primary) 58%);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    padding: 2rem .5rem;
    width: 30vw;
    
    @media (max-width: 840px) {
        margin-top: 2rem;
        width: 90vw;
    }
    `;

    export const Title = styled.h1`
        font-size: 2rem;
        padding-bottom: 1rem;
    `;
    
    export const SelectPlan = styled.select``;

    export const Option = styled.option``;
