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
                            <Field name='fullName' type='text' placeholder='Nome Completo' />
                            {errors.fullName && (
                                <spam style={{ color:'red' }}>Campo obrigatótio</spam>
                            )}
                            <Field name='email' type='text' placeholder='E-Mail' />
                            <Field name='phone' type='text' placeholder='Telefone' />
                            <C.InputTextArea name='message' type='text' placeholder='Digite sua menssagem' />
                        </C.Container>
                    </Form>
                )}
            </Formik>
        </C.Section>
    )
}
export default Contacts;