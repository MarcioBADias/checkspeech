import styled from "styled-components";

export const Section = styled.section`
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    justify-content: center;
    min-height: 100vh;
`;

export const LoadingLogo = styled.img`
    height: 500px;
    width: 500px;
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
`;