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

        @media (max-width: 840px) {
            top: 0%;
            height: 18vh;
        }
    }

    @media (max-width:840px) {
        height: 120vh;
    }

`;

export const Container = styled.div`
    position: absolute;
    top: 8%;
    z-index: 5;

    @media (max-width:840px) {
        top:5%;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;

    @media (max-width:840px) {
        margin-left: 4rem;
    }
    
`;

export const TitleSpan = styled.span`
    color: var(--cor-green-primary);

    @media (max-width:840px) {
        color: var(--cor-light-primary);
        margin-left: 4rem;
    }
`;

export const SolutionsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media (max-width: 840px){
        flex-wrap: wrap;
        margin-top: 1rem;
        margin-left: 1rem;
    }
`;

export const SolutionsBox = styled.div`
    width: 20vw;
    margin: 0 1rem;

    @media (max-width:840px){
        width: 40vw;
        justify-content: space-around;
    }
`;

export const Spin = styled.img(({ time }) => `
    height: 100px;
    margin-left: 3rem;
    margin-bottom: 2rem;
    width: 100px;
    animation: spin ${time}s infinite ease;

    @keyframes spin {
        from {
        transform: rotateX(0deg)
        }
        to {
        transform: rotateX(360deg);
        }
    }

    @media (max-width:840px){
        margin: 0 0 0 1.2rem;
    }
`);

export const Text = styled.p`
    flex-wrap: wrap;
    width: 80%;

    @media (max-width:840px){
        font-size: .7rem;
    }
`;

export const Button = styled.button`
    background: none;
    border: 5px solid var(--cor-green-primary);
    border-radius: 25px;
    color: var(--cor-green-primary);
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    margin-top: 1rem;
    padding: .5rem 2rem;
    position: absolute;
    bottom: 50px;
    right: 30px;
    z-index: 5;

    :hover{
        background: var(--cor-green-primary);
        color: var(--cor-light-primary);
    }
`;