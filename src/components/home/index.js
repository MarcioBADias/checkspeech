import React from 'react';
import logo from '../../img/logo.svg';
import blur from '../../img/blur.svg';
import triangles from '../../img/triangles-design.svg';

import * as C from './styles';
const Home = () => {
    return(
        <C.Section>
            <C.Blur 
                src={blur}  
                size={600}
                position={{x:-200,y:1100}} 
                alt="efeito de blur no background"
            />
            <C.Triangles 
                src={triangles}  
                size={800}
                position={{x:150,y:-180}} 
                alt="efeito de blur no background"
            />
            <C.Container
                size={40}
            >
                <C.LoadingLogo 
                    src={logo}
                    size={500} 
                    alt="logo em movimento" />
            </C.Container>
            <C.Container
                size={60}
            >
                <p>
                    Bem-vindo ao CheckSpeech AI - a solução de conversão de fala em texto que vai revolucionar a forma como você interage com seus clientes! Com nossa tecnologia de ponta, você pode transformar facilmente áudios e gravações em textos claros e precisos, além de identificar o sentimento dominante em cada uma dessas interações.
                </p>
            </C.Container>
        </C.Section>
    )
}

export default Home;