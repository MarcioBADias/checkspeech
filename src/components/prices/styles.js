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
    color: var(--cor-dark-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    padding: 2rem .5rem;
    width: 25vw;
    
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

    export const SubTitle = styled.h2``;

    export const List = styled.ul``;

    export const Item = styled.li``;

    export const Span = styled.span``;

    export const Price = styled.h1``;

    export const Button = styled.button`
        background: linear-gradient(75deg, var(--cor-light-secondary) 0%, var(--cor-green-primary) 68%);;
        border: none;
        border-radius: 15px;
        cursor: pointer;
        font-size: 1rem;
        font-weight: bold;
        padding: .5rem 2rem;
        margin-top: 1rem;

        :hover{
            color: var(--cor-light-primary);
            font-size: 1.2rem;
        }
    `;
