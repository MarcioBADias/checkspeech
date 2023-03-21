import React, { useEffect, useState } from 'react';
import MarkL from '../../img/mark-L.svg';
import MarkR from '../../img/mark-R.svg';
import triangles from '../../img/triangles-design.svg';
import logoCli1 from '../../img/logos-clients/Terra-Color.svg';
import logoCli2 from '../../img/logos-clients/Trace-Color.svg';
import logoCli3 from '../../img/logos-clients/U-Turn-Color.svg';
import logoCli4 from '../../img/logos-clients/Umbrella-Color.svg';
import logoCli5 from '../../img/logos-clients/Vertigo-Color.svg';
import logoCli6 from '../../img/logos-clients/Vision-Color.svg';
import logoCli7 from '../../img/logos-clients/Volume-Color.svg';
import logoCli8 from '../../img/logos-clients/Waveless-Color.svg';

import * as C from './styles';
const Clients = () => {
    const [responsiveWidth, setResponsiveWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setResponsiveWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const logosCli = [logoCli1, logoCli2, logoCli3, logoCli4, logoCli5, logoCli6, logoCli7, logoCli8];
      //const logosCLiBotton = [logoCli5, logoCli6, logoCli7, logoCli8];

    return(
            <C.Section id='clients'>
            
            <C.Triangles 
                src={triangles}  
                size={800}
                position={responsiveWidth < 840 ? {x:10,y:-500} : {x:10,y:-530}} 
                alt="efeito de blur no background"
            />

            <C.Container
                style={{
                    minHeight: '100vh'
                }}
            >
                <C.Container
                    style={{
                        position: 'absolute',
                        top: 10
                    }}
                >
                    <C.Title
                        style={{
                            color:'var(--cor-light-primary)',
                            marginLeft: -30
                        }} 
                    >
                        Veja quem já usa o
                    </C.Title>
                    <C.Title
                        style={{
                            color:'var(--cor-green-primary)',
                            marginLeft: 170
                        }}
                    >
                        Checkspeech na sua empresa
                    </C.Title>
                </C.Container>
                <C.ClietsArea>
                    <C.LogosContainer>
                        {logosCli.map(logo => (
                        <C.LogosCli 
                            src={logo}
                            alt='Logo Cliente'
                        />
                        ))}
                    </C.LogosContainer>
                </C.ClietsArea>

            </C.Container>

            <C.Container
                style={{
                    background: 'var(--cor-light-primary',
                    color: 'var(--cor-dark-primary)'
                }}    
            > 
                <C.Container>
                    <C.Title
                        style={{
                            color:'var(--cor-dark-primary)',
                            marginLeft: -200
                        }}    
                    >
                        Depoimentos
                    </C.Title>
                    <C.Title
                        style={{
                            color:'var(--cor-green-primary)',
                            marginLeft: 100
                        }}
                    >
                        de nossos clientes
                    </C.Title>
                </C.Container> 
                <C.TextArea>
                <C.Mark 
                    src={MarkL}
                    size={80}
                    alt="Simbulo de aspas"
                />
                <C.Text>
                    "O CheckSpeech AI é incrível! A transcrição é precisa e a interpretação de sentimentos ajuda muito em nossa comunicação com os clientes."
                </C.Text>
                </C.TextArea>
                <C.TextArea>
                <C.Text>
                    "O CheckSpeech AI nos permitiu transcrever facilmente nossas conversas com os clientes e analisar seus sentimentos para melhorar nossa comunicação. É uma ferramenta essencial!"
                </C.Text>
                <C.Mark 
                    src={MarkR}
                    size={80}
                    alt="Simbulo de aspas"
                />
                </C.TextArea>
                <C.TextArea>
                <C.Mark 
                    src={MarkL}
                    size={80}
                    alt="Simbulo de aspas"
                />
                <C.Text>
                    "O CheckSpeech AI é muito preciso na transcrição e na interpretação de sentimentos, o que é muito útil em minhas pesquisas acadêmicas."
                </C.Text>
                </C.TextArea>
                <C.TextArea>
                <C.Text>
                    "O CheckSpeech AI é fácil de usar e nos deu insights valiosos sobre a opinião do consumidor. É uma ferramenta essencial para o marketing."
                </C.Text>
                <C.Mark 
                    src={MarkR}
                    size={80}
                    alt="Simbulo de aspas"
                />
                </C.TextArea>
            </C.Container>
        </C.Section>
    )
}

export default Clients;