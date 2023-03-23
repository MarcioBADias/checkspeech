import styled from "styled-components";
import { Field } from "formik";

export const Section = styled.section`
    min-height: 100vh;
    background: var(--cor-dark-primary);
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    ::before{
        position: absolute;
        content: '';
        height: 60vh;
        width: 28vw;
        top: 20%;
        left: 0;
        background: var(--cor-green-primary);

        @media (max-width: 840px) {
            top: 0%;
            height: 18vh;
        }
    }
`;

export const Container = styled.div`
    align-items: center;
    background: linear-gradient(90deg, var(--cor-green-primary) 0%, var(--cor-green-secondary) 58%);
    border-radius: 0 15px 15px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 60vh;
    padding: 2rem .5rem;
    width: 40vw;
`;

export const Title = styled.h1`
    font-size: 2rem;
    padding-bottom: 1rem;
`;

export const Input = styled(Field)`
    background: var(--cor-dark-secontary);
    border: 1px var(--cor-dark-primary) solid;
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
    border: 1px var(--cor-dark-primary) solid;
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
    border: 1px var(--cor-dark-primary) solid;
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
    border: 1px var(--cor-dark-primary) solid;
    border-radius: 5px;
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