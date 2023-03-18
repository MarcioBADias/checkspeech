import React from 'react';
import MarkL from '../../img/mark-L.svg';
import triangles from '../../img/triangles-design.svg';

import * as C from './styles';
const Clients = () => {
    return(
        <C.Section id='clients'>
            
            <C.Triangles 
                src={triangles}  
                size={800}
                position={{x:400,y:400}} 
                alt="efeito de blur no background"
            />

            <C.Container
                style={{
                    background: 'var(--cor-light-primary',
                    color: 'var(--cor-dark-primary)'
                }}    
            >
                <C.TextArea>
                <C.Mark 
                    src={MarkL}
                    size={100}
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
                    src={MarkL}
                    size={100}
                    alt="Simbulo de aspas"
                />
                </C.TextArea>
                <C.TextArea>
                <C.Mark 
                    src={MarkL}
                    size={100}
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
                    src={MarkL}
                    size={100}
                    alt="Simbulo de aspas"
                />
                </C.TextArea>
                <C.TextArea>
                <C.Mark 
                    src={MarkL}
                    size={100}
                    alt="Simbulo de aspas"
                />
                <C.Text>
                    "O CheckSpeech AI é uma inovação incrível para a área da saúde mental. A transcrição e a interpretação de sentimentos nos permitem entender melhor as necessidades dos pacientes."
                </C.Text>
                </C.TextArea>
            </C.Container>

            <C.Container>

            </C.Container>

        </C.Section>
    )
}

export default Clients;