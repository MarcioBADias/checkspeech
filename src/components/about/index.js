import React, { useState } from 'react';
import blur from '../../img/blur.svg';
import triangles from '../../img/triangles-design.svg';

import * as C from './styles';
const About = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    return(
        <C.Section id='about'>
            <C.Blur 
                src={blur}  
                size={1000}
                position={{x:50,y:-400}} 
                alt="efeito de blur no background"
            />

            <C.Triangles 
                src={triangles}  
                size={800}
                position={windowWidth < 840 ? {x:-250,y:320} : {x:-200,y:1100}} 
                alt="efeito de blur no background"
            />

            <C.Container>
                <C.Title
                    style={{
                        color:'var(--cor-light-primary)',
                        marginLeft: windowWidth < 840 ? -100 : -280
                    }}    
                >
                    Mais sobre nossa
                </C.Title>
                <C.Title
                    style={{
                        color:'var(--cor-green-primary)',
                        marginLeft: windowWidth < 840 ? 200 : 50,
                        marginTop: 5,
                        marginBottom: 10
                    }}
                >
                    ferramenta
                </C.Title>
                <C.Text>
                    Nós da CheckSpeech AI investimos mais de 500.000 horas em treinamento, transcrevendo uma variedade de áudios de diferentes nacionalidades, sotaques e níveis de instruções. Isso significa que nosso algoritmo é capaz de reconhecer as nuances da fala humana com a maior precisão possível.
                </C.Text>
                <C.Text>
                    O melhor de tudo? Nossa API é comercializada no modelo SAAS (software as a service), o que significa que você pode acessá-la facilmente a partir de qualquer dispositivo, em qualquer lugar do mundo. Com o CheckSpeech AI, você nunca mais vai perder uma única palavra ou sentimento em suas interações com os clientes.
                </C.Text>
                <C.Text>
                    Experimente o CheckSpeech AI hoje mesmo e descubra como nossa solução pode transformar sua empresa.
                </C.Text>
            </C.Container>
        </C.Section>
    )
}

export default About;