import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    min-height: calc(100vh - 80px);
    position: relative;
    overflow: hidden;
`;

export const Triangles = styled.img(({ position, size }) => `
    position: absolute;
    top: ${position.x}px;
    left: ${position.y}px;
    width: ${size}px;
    transform: rotatex(180deg);
    1
    @media (max-width: 840px) {
        top: calc(${position.x}0px)px;
    }
`);

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 2rem;
    width: 50vw;
    z-index: 5;

    @media (max-width: 840px) {
        margin: 0;
        width: 95vw;
    }
`;

export const Text = styled.p`
    display: block;
    margin-top: 1rem;
    width: 80%;
    font-size: 1.1rem;

    @media (max-width: 840px) {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
`;