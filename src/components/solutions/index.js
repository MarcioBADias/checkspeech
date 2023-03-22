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
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                            time={4}
                        />
                        <C.Text>
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                            time={3}
                        />
                        <C.Text>
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                            time={5}
                        />
                        <C.Text>
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                            time={2.5}
                        />
                        <C.Text>
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                </C.SolutionsContainer>
            </C.Container>
        </C.Section>
    )
}
export default Solutions;