import React from 'react';
import logo from '../../img/logo.svg';
import blur from '../../img/blur.svg';
import triangles from '../../img/triangles-design.svg';
import { Link } from "react-scroll";

import * as C from './styles';

const Home = () => {
    return(
        <C.Section id='home'>
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

            <C.LoadingLogo 
                position={{x:200,y: 50}} 
                src={logo}
                size={300} 
                alt="logo em movimento" 
            />

            <C.Container>
                <C.Text>
                    Bem-vindo ao CheckSpeech AI - a solução de conversão de fala em texto que vai revolucionar a forma como você interage com seus clientes! Com nossa tecnologia de ponta, você pode transformar facilmente áudios e gravações em textos claros e precisos, além de identificar o sentimento dominante em cada uma dessas interações.
                </C.Text>
                <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='solutions' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}
                >
                    <C.Button>
                        Saiba mais
                    </C.Button>
                </Link>
            </C.Container>
        </C.Section>
    )
}

export default Home;