import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: space-around;
    min-height: calc(100vh - 80px);
    position: relative;
    overflow: hidden;

    @media (max-width: 840px){
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
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
    padding: 1rem;
    width: 50vw;
    z-index: 5;

    @media (max-width: 840px) {
        margin: 0;
        width: 100vw;
    }
`;

export const ClietsArea = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export const TextArea = styled.div`
    display: flex;
    margin-top: 1rem;
`;

export const LogosCli = styled.img`
    height: 200px;
    width: 200px;
`;

export const Mark = styled.img(({ size }) => `
    margin: 0 1rem;
    width: ${size}px;
`);

export const Title = styled.h1`
    margin-top: 2rem;
    text-transform: uppercase;
`;
export const Text = styled.p`
    display: block;
    margin-top: 1rem;
    width: 100%;
    font-size: 1rem;

    @media (max-width: 840px) {
        font-size: 1rem;
        margin-bottom: 2rem;
    }
`;