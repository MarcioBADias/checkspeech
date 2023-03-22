import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    background: var(--cor-dark-primary);
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Container = styled.div`
    align-items: center;
    background: linear-gradient(90deg, var(--cor-green-primary) 0%, var(--cor-green-secondary) 58%);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    width: 60vw;
`;

export const Input = styled.input`
    background: var(--cor-dark-secontary);
    border: 2px var(--cor-dark-primary) solid;
    color: var(--cor-light-primary);
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 60%;

    ::placeholder{
        color: var(--cor-light-primary);
    }
`;

export const InputTextArea = styled.textarea`
    background: var(--cor-dark-secontary);
    border: 2px var(--cor-dark-primary) solid;
    color: var(--cor-light-primary);
    font-size: 1rem;
    padding: .5rem;
    height: 200px;
    width: 60%;

    ::placeholder{
        color: var(--cor-light-primary);
    }
`;

export const ErrorMessage = styled.span`
    color: red;
    margin-top: -1rem;
    padding: .5rem;
`;