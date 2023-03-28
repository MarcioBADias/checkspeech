import React from "react";
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import * as C from './styles';

const Prices = () => {

    return(
        <C.Section id="prices">   
            <C.Container>
            <C.Title>
                Conheça nossos preços
            </C.Title>
            </C.Container>
            <C.Container>
                <C.SelectPlan>
                    <C.Option>
                        Mensal
                    </C.Option>
                    <C.Option>
                        Anual
                    </C.Option>
                </C.SelectPlan>
            </C.Container>
            <C.Container>
            <C.PriceBox>
                <C.SubTitle>
                    Beguinner
                </C.SubTitle>
                <C.List>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio assíncrono <strong>120 minutos</strong> <C.Span>(R$ 0,20 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio em tempo real <strong>90 minutos</strong> <C.Span>(R$ 0,40 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Identificação de idiomas em áudios <strong>200 minutos</strong> <C.Span>(R$ 0,05 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Análise de sentimento a partir do áudio <strong>120 minutos</strong> <C.Span>(R$ 0,40 / min. excedente)</C.Span></C.Item>
                </C.List>
                <C.Price>R$29,90</C.Price>
                <C.Button>Escoler Plano</C.Button>
            </C.PriceBox>
            <C.PriceBox>
                <C.SubTitle>
                    Beguinner
                </C.SubTitle>
                <C.List>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio assíncrono <strong>120 minutos</strong> <C.Span>(R$ 0,20 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio em tempo real <strong>90 minutos</strong> <C.Span>(R$ 0,40 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Identificação de idiomas em áudios <strong>200 minutos</strong> <C.Span>(R$ 0,05 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Análise de sentimento a partir do áudio <strong>120 minutos</strong> <C.Span>(R$ 0,40 / min. excedente)</C.Span></C.Item>
                </C.List>
                <C.Price>R$29,90</C.Price>
                <C.Button>Escoler Plano</C.Button>
            </C.PriceBox>
            <C.PriceBox>
                <C.SubTitle>
                    Beguinner
                </C.SubTitle>
                <C.List>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio assíncrono <strong>120 minutos</strong> <C.Span>(R$ 0,20 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio em tempo real <strong>90 minutos</strong> <C.Span>(R$ 0,40 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Identificação de idiomas em áudios <strong>200 minutos</strong> <C.Span>(R$ 0,05 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Análise de sentimento a partir do áudio <strong>120 minutos</strong> <C.Span>(R$ 0,40 / min. excedente)</C.Span></C.Item>
                </C.List>
                <C.Price>R$29,90</C.Price>
                <C.Button>Escoler Plano</C.Button>
            </C.PriceBox>
            </C.Container>
        </C.Section>
    )
}
export default Prices;