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
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const SolutionsBox = styled.div`
    min-height: 70vh;
    width: 15vw;
    margin: 0 1rem;
`;

export const Spin = styled.img`
    height: 100px;
    margin-left: 1.5rem;
    margin-bottom: 2rem;
    width: 100px;
    animation: spin 10s infinite ease-in;

    @keyframes spin {
        0% {
        transform: rotate(0deg)
        }
        100% {
        transform: rotate(360deg);
        }
    }
`;

export const Text = styled.p`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80%;
`;