import React from "react";

import { Formik, Form, Field } from "formik";

import * as C from './styles';

const Contacts = () => {
    return(
        <C.Section id="contacts">      
            <Formik>
                {()=>(
                    <Form>
                        <C.Container>
                            <C.Input name='name' type='text' placeholder='Nome Completo' />
                            <C.Input name='email' type='text' placeholder='E-Mail' />
                            <C.Input name='phone' type='text' placeholder='Telefone' />
                            <C.InputTextArea name='message' type='text' placeholder='Digite sua menssagem' />
                        </C.Container>
                    </Form>
                )}
            </Formik>
        </C.Section>
    )
}
export default Contacts;