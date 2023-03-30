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
    
export const Switch = styled.label`
    display:flex;
    margin:0;
`;

export const SwitchWrapper = styled.span`
    display: inline-block;
    width: 60px;
    height: 34px;
    position: relative;
`;

export const CheckBox = styled.input`
    opacity: 0;
    height: 0;
    width: 0;

    :checked{
        background: var(--cor-light-primary);
    }
`;

export const SwitchBtn = styled.span(({ check }) =>`
   position: absolute;
    top: -10px;
    right: 0;
    left: ${check ? '-50px' : '-40px'};
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 40px;
    background: var(--cor-green-primary);
    width: ${check ? '160px' : '140px'};
    height: 50px;
    transition: 1s all ease;

    ::before{
        content: '';
        width: 40px;
        height: 40px;
        position: absolute;
        left: 4px;
        bottom: 4px;
        border-radius: 50%;
        transition: 1s all ease;
        background: var(--cor-light-primary);
        transform: ${check && 'translate(110px)'};
        
    }
`);

export const SwitchText = styled.h3(({ check }) =>`
    position: absolute;
    left: ${check ? '20px' : '50px'};
    bottom: 12px;
    text-transform: uppercase;
    transition: 1s all ease;
`);

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

export const ButtonPlan = styled.button`
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

export const Button = styled.button`
    background: none;
    border: 5px solid var(--cor-green-primary);
    border-radius: 25px;
    box-shadow: 0px 0px 10px 5px var(--cor-green-secondary);
    color: var(--cor-light-primary);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
    padding: .5rem 2rem;
    position: absolute;
    bottom: -60px;
    right: 30px;
    z-index: 5;

    :hover{
        background: var(--cor-green-primary);
        color: var(--cor-light-primary);
        font-size: 1.1rem;
    }
`;
