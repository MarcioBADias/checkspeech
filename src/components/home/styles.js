import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
`;

export const Blur = styled.img(({ position, size }) => `
    position: absolute;
    top: ${position.x}px;
    left: ${position.y}px;
    transform: rotatey(180deg);
    width: ${size}px;
`);

export const Triangles = styled.img(({ position, size }) => `
    position: absolute;
    top: ${position.x}px;
    left: ${position.y}px;
    width: ${size}px;

    @media (max-width: 840px) {
        top: calc(${position.x}0px)px;
    }
`);

export const LoadingLogo = styled.img(({ position, size }) => `
    height: ${size}px;
    width: ${size}px;
    pointer-events: none;
    position: absolute;
    top: ${position.x}px;
    left: ${position.y}px;
    animation: App-logo infinite 10s ease-out;

    @keyframes App-logo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`);

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 40vh auto;
    margin-left: 35vw;
    padding: 0 2rem;
    width: 55vw;
    z-index: 5;

    @media (max-width: 840px) {
        margin: 0;
        margin-top: 550px;
        width: 100vw;
    }
`;

export const Text = styled.p`
    display: block;
    margin-top: 1rem;
    width: 80%;
    font-size: 1.5rem;

    @media (max-width: 840px) {
        font-size: 1.3rem;
        margin-bottom: 2rem;
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

    :hover{
        background: var(--cor-green-primary);
        font-size: 1.3rem;
    }
`;