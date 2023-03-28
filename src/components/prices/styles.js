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
    border: 5px var(--cor-green-primary) solid;
    border-radius: 15px;
    color: var(--cor-dark-primary);
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 1rem;
    padding: 2rem .5rem;
    width: 25vw;
    
    @media (max-width: 840px) {
        margin-top: 2rem;
        width: 80vw;
    }
    `;

    export const Title = styled.h1`
        font-size: 2rem;
        margin-top: 1rem;
        padding-bottom: 1rem;
        text-transform: uppercase;
    `;
    
    export const SelectPlan = styled.select`
        border: 5px var(--cor-green-primary) solid;
        border-radius: 15px;
        font-size: 1rem;
        font-weight: bold;
        padding: .5rem 8rem;
    `;

    export const Option = styled.option``;

    export const SubTitle = styled.h2`
    `;

    export const List = styled.ul`
        list-style: none;
        padding: 0 1rem;
        margin-top: 1rem;

        svg{
            color: var(--cor-green-primary);
        }
    `;

    export const Item = styled.li`
        font-size: 1rem;
        margin-top: .5rem;
    `;

    export const Span = styled.span`
        font-size: .8rem;
    `;

    export const SpanMes = styled.span`
        font-weight: lighter;
    `;

    export const Price = styled.h1`
        margin-top: 1rem;
    `;

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
