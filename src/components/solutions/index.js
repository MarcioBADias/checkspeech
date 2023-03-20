import React from "react";
import waveSong from '../../img/wavetop.svg'
import * as C from './styles';

const Solutions = () => {
    return(
        <C.Section id="solutions">
            <C.WaveSVG src={waveSong} alt='effeito de onda sonora' />       
        </C.Section>
    )
}
export default Solutions;