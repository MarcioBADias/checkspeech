import React from "react";
import * as C from './styles';

const Solutions = () => {
    return(
        <C.Section id="solutions">    
            <C.Container>
                <C.Title>
                    Soluções do <span style={{ color: 'var(--cor-green-primary)' }}>checkspeech</span>
                </C.Title>
            </C.Container>  
            <C.Container>
                <C.SolutionsContainer>
                    <C.SolutionsBox>1</C.SolutionsBox>
                    <C.SolutionsBox>2</C.SolutionsBox>
                    <C.SolutionsBox>3</C.SolutionsBox>
                    <C.SolutionsBox>4</C.SolutionsBox>
                    <C.SolutionsBox>5</C.SolutionsBox>
                </C.SolutionsContainer>
            </C.Container>
        </C.Section>
    )
}
export default Solutions;