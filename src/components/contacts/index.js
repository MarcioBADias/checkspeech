import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import * as C from './styles';

const schema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().required(),
    phone: Yup.number().min(11).required()
});

const Contacts = () => {
    return(
        <C.Section id="contacts">      
            <Formik
                validationSchema={schema}
                initialValues={{
                    fullName:'',
                    email:'',
                    phone:'',
                    message:''
                }}
            >
                {( { errors })=>(
                    <Form>
                        <C.Container>
                            <Field 
                                style={{
                                    background: 'var(--cor-dark-secontary)',
                                    border: '2px var(--cor-dark-primary) solid',
                                    color: 'var(--cor-light-primary)',
                                    borderRadius: 5,
                                    padding: '0.5rem',
                                    marginBottom: '1rem',
                                    width: '60%'
                                }}
                                name='fullName' 
                                type='text' 
                                placeholder='Nome Completo' />
                            {errors.fullName && (
                                <C.ErrorMessage >Campo obrigatótio</C.ErrorMessage>
                            )}
                            <Field 
                                style={{
                                    background: 'var(--cor-dark-secontary)',
                                    border: '2px var(--cor-dark-primary) solid',
                                    color: 'var(--cor-light-primary)',
                                    borderRadius: 5,
                                    padding: '0.5rem',
                                    marginBottom: '1rem',
                                    width: '60%'
                                }}
                                name='email' 
                                type='text' 
                                placeholder='E-Mail' />
                            {errors.email && (
                                <C.ErrorMessage >Campo obrigatótio</C.ErrorMessage>
                            )}
                            <Field 
                                style={{
                                    background: 'var(--cor-dark-secontary)',
                                    border: '2px var(--cor-dark-primary) solid',
                                    color: 'var(--cor-light-primary)',
                                    borderRadius: 5,
                                    padding: '0.5rem',
                                    marginBottom: '1rem',
                                    width: '60%'
                                }}
                                name='phone' 
                                type='text' 
                                placeholder='Telefone' />
                            {errors.phone && (
                                <C.ErrorMessage >Campo obrigatótio</C.ErrorMessage>
                            )}
                            <C.InputTextArea name='message' type='text' placeholder='Digite sua menssagem' />
                        </C.Container>
                    </Form>
                )}
            </Formik>
        </C.Section>
    )
}
export default Contacts;