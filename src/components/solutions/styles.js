import styled from "styled-components";

export const Section = styled.section`
    background: var(--cor-light-primary);
    color: var(--cor-dark-primary);
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    padding: 0 10%;
    position: relative;
    overflow: hidden;

    :before{
        position: absolute;
        content: '';
        height: 20vh;
        width: 100vw;
        top: 20%;
        background: var(--cor-green-primary);
    }
`;

export const Container = styled.div`
    position: absolute;
    top: 8%;
    z-index: 5;
`;

export const Title = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
`;

export const SolutionsContainer = styled.div`
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`;

export const SolutionsBox = styled.div`
    background: var(--cor-green-secondary);
    min-height: 80vh;
    min-width: 15vw;
`;
