import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup';
import * as C from './styles';

const schema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
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
                            <C.Input
                                name='fullName' 
                                type='text' 
                                placeholder='Nome Completo' />
                            {errors.fullName && (
                                <C.ErrorMessage >Campo obrigatótio</C.ErrorMessage>
                            )}
                            <C.Input
                                name='email' 
                                type='text' 
                                placeholder='E-Mail' />
                            {errors.email && (
                                <C.ErrorMessage >Campo obrigatótio</C.ErrorMessage>
                            )}
                            <div style={{ display:'flex'}}>
                                <div 
                                    style={{
                                        display:'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <C.Input
                                        name='phone' 
                                        type='text' 
                                        placeholder='Telefone' />
                                    {errors.phone && (
                                        <C.ErrorMessage >Campo obrigatótio</C.ErrorMessage>
                                    )}
                                </div>
                                <div 
                                    style={{
                                        display:'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <C.Select>
                                        <C.Option></C.Option>
                                        <C.Option>Brasil</C.Option>
                                        <C.Option>Argentina</C.Option>
                                        <C.Option>EUA</C.Option>
                                    </C.Select>
                                </div>
                            </div>
                            <C.InputTextArea name='message' type='text' placeholder='Digite sua menssagem' />
                        </C.Container>
                    </Form>
                )}
            </Formik>
        </C.Section>
    )
}
export default Contacts;