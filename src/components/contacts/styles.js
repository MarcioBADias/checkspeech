import styled from "styled-components";
import { Field } from "formik";

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
    height: 60vh;
    padding: 2rem .5rem;
    width: 40vw;
`;

export const Input = styled(Field)`
    background: var(--cor-dark-secontary);
    border: 2px var(--cor-dark-primary) solid;
    color: var(--cor-light-primary);
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 80%;

    ::placeholder{
        color: var(--cor-light-primary);
    }
`;

export const Select = styled.select`
    background: var(--cor-dark-secontary);
    border: 2px var(--cor-dark-primary) solid;
    color: var(--cor-light-primary);
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 80%;

    ::placeholder{
        color: var(--cor-light-primary);
    }
`;

export const Option = styled.option`
    background: var(--cor-dark-secontary);
    border: 2px var(--cor-dark-primary) solid;
    color: var(--cor-dark-primary);
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    width: 80%;

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
    width: 80%;

    ::placeholder{
        color: var(--cor-light-primary);
    }
`;

export const ErrorMessage = styled.span`
    color: red;
    margin-top: -1rem;
    padding: .5rem;
`;