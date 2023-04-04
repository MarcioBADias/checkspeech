import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import axios from 'axios';
import * as Yup from 'yup';
import * as C from './styles';

const schema = Yup.object().shape({
    fullName: Yup.string().required(),
    email: Yup.string().email().required(),
    phone: Yup.number().min(11).required()
});


const Contacts = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        const fetchCountries = async () => {
            const response = await axios.get('https://countryapi.gear.host/v1/Country/getCountries');
            setCountries(response.data.Response);
        };
        fetchCountries();
    }, []);

    console.log(countries);

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
                            <C.Title>
                                Fale Conosco
                            </C.Title>  
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
                            <C.Input
                                name='phone' 
                                type='text' 
                                placeholder='Telefone' />
                            {errors.phone && (
                                <C.ErrorMessage >Campo obrigatótio</C.ErrorMessage>
                            )}
                            <C.InputTextArea name='message' type='text' placeholder='Digite sua menssagem' />
                            <C.Button>
                                Enviar
                            </C.Button>
                        </C.Container>
                    </Form>
                )}
            </Formik>
        </C.Section>
    )
}
export default Contacts;