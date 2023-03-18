import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    height: calc(100vh - 80px);
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
`);

export const Container = styled.div(({ size }) => `
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    justify-content: center;
    padding: 0 2rem;
    width: ${size}vw;
    z-index: 5;
`);

export const LoadingLogo = styled.img(({ size }) => `
    height: ${size}px;
    width: ${size}px;
    pointer-events: none;
    animation: App-logo-spin infinite 5s linear;

    @keyframes App-logo-spin {
        from {
            transform: rotatey(0deg);
        }
        to {
            transform: rotatey(180deg) scalex(-1);
        }
    }
`);