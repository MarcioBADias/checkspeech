import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    background: var(--cor-dark-primary);
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    ::before{
        position: absolute;
        content: '';
        height: 60vh;
        width: 28vw;
        top: 20%;
        right: 0;
        background: var(--cor-green-primary);

        @media (max-width: 840px) {
            top: 0%;
            height: 18vh;
        }
    }
`;

export const Container = styled.div`
    align-items: center;
    background: linear-gradient(90deg, var(--cor-green-secondary) 0%, var(--cor-green-primary) 58%);
    border-radius: 15px 0 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    padding: 2rem .5rem;
    width: 40vw;
`;

export const Title = styled.h1`
    font-size: 2rem;
    padding-bottom: 1rem;
`;

