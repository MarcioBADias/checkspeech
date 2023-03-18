import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    min-height: calc(100vh - 80px);
    position: relative;
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
    animation: App-logo-spin infinite 5s linear;

    /*@keyframes App-logo-spin {
        from {
            transform: rotatey(0deg);
        }
        to {
            transform: rotatey(180deg) scalex(-1);
        }
    }*/
`);

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10% 0 0 30%;
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