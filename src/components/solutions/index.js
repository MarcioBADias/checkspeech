import React from "react";
import * as C from './styles';

import Spin from '../../img/mark-L.svg'

const Solutions = () => {
    return(
        <C.Section id="solutions">    
            <C.Container>
                <C.Title>
                    Soluções do <span style={{ color: 'var(--cor-green-primary)' }}>checkspeech</span>
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
                        />
                        <C.Text>
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                        />
                        <C.Text>
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                        />
                        <C.Text>
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
                        />
                        <C.Text>
                            Temos as qualidades x, y e z para bla bla bla e e tasl
                        </C.Text>
                    </C.SolutionsBox>
                    <C.SolutionsBox>
                        <C.Spin 
                            src={Spin}
                            alt='imagem ilustrativa de spin'
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