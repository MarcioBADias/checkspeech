import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    background: var(--cor-light-primary);
    position: relative;
`;

export const WaveSVG = styled.img`
    position: absolute;
    min-width: 100vw;

    svg{
        color: var(--cor-green-primary);
    }
`