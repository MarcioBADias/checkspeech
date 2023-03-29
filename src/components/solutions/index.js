import React from "react";
import * as C from './styles';

import Spin from '../../img/wavesongColor.svg'

const Solutions = () => {
    return(
        <C.Section id="solutions">    
            <C.Container>
                <C.Title>
                    Soluções do <C.TitleSpan>checkspeech</C.TitleSpan>
                </C.Title>
            </C.Container>  
            <C.Container
                style={{
                    top:140
                }}
            >
                <C.SolutionsContainer>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                            time={2}
                        />
                        <C.Text>
                        Transcrição de Áudio Assíncrono (áudio pré-gravado): API de transcrição de voz assíncrona para áudio pré-gravado. Temos uma das melhores engines de reconhecimento de fala do mundo! O recurso speech-to-text assíncrono é um parceiro estratégico para o seu negócio. Esteja você extraindo insights de áudio ou transcrevendo conteúdo em escala.
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                            time={4}
                        />
                        <C.Text>
                        Transcrição de Áudio em tempo real (streaming): O recurso live-speech-to-text de transcrição ao vivo possibilita o uso de legendas em tempo real para o seu negócio. Nossas legendas garantem que as palestras e treinamentos ao vivo sejam acessíveis e possam ser arquivadas para uso futuro.
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                            time={3}
                        />
                        <C.Text>
                        Identificação de Idiomas em áudios: Obtendo fala e insights a nível global. Nossa solução tem suporte a 52 idiomas.
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                            time={5}
                        />
                        <C.Text>
                        Análise de sentimento a partir do áudio (áudio pré-gravado): Encontre os momentos mais importantes em trechos de falas, diferencie falas positivas e negativas e tome decisões de negócios mais assertivas com uma compreensão mais profunda.
                        </C.Text>
                    </C.SolutionsBox>
                </C.SolutionsContainer>
            </C.Container>
        </C.Section>
    )
}
export default Solutions;