import React from "react";
import { useState } from "react";
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import * as C from './styles';

const Prices = () => {
    const [optionsPrice, setOptionsPrice] = useState(true);

    const changeValuesStatus = () => setOptionsPrice(!optionsPrice);

    return(
        <C.Section id="prices">   
            <C.Container>
            <C.Title>
                Conheça nossos preços
            </C.Title>
            </C.Container>
            <C.Container>
                <C.Switch>
                    <C.SwitchWrapper>
                        <C.CheckBox
                            type='checkbox'
                            onChange={changeValuesStatus}
                        />
                        <C.SwitchBtn>
                            <C.SwitchText>
                                {optionsPrice ? 'Mensal' : 'Anual'}
                            </C.SwitchText>
                        </C.SwitchBtn>
                    </C.SwitchWrapper>
                </C.Switch>
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
                <C.Price>R$ {optionsPrice ? 29 : 328} <C.SpanMes>/ mês</C.SpanMes></C.Price>
                <C.Button>Escoler Plano</C.Button>
            </C.PriceBox>
            <C.PriceBox>
                <C.SubTitle>
                    Business
                </C.SubTitle>
                <C.List>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio assíncrono <strong>200 minutos</strong> <C.Span>(R$ 0,15 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio em tempo real <strong>120 minutos</strong> <C.Span>(R$ 0,40 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Identificação de idiomas em áudios <strong>500 minutos</strong> <C.Span>(R$ 0,03 / min. excedente)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Análise de sentimento a partir do áudio <strong>200 minutos</strong> <C.Span>(R$ 0,35 / min. excedente)</C.Span></C.Item>
                </C.List>
                <C.Price>R$ {optionsPrice ? 44 : 499} <C.SpanMes>/ mês</C.SpanMes></C.Price>
                <C.Button>Escoler Plano</C.Button>
            </C.PriceBox>
            <C.PriceBox>
                <C.SubTitle>
                    Enterprise
                </C.SubTitle>
                <C.List>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio assíncrono <strong>+200 minutos</strong> <C.Span>(A combinar)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Transcrição de áudio em tempo real <strong>+120 minutos</strong> <C.Span>(A combinar)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Identificação de idiomas em áudios <strong>+500 minutos</strong> <C.Span>(A combinar)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Análise de sentimento a partir do áudio <strong>+200 minutos</strong> <C.Span>(A combinar)</C.Span></C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Preços especiais para grandes volumes</C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Prioridade no suporte técnico</C.Item>
                    <C.Item><IoIosArrowDroprightCircle/> Gestor de conta dedicada</C.Item>
                </C.List>
                <C.Price>A combinar</C.Price>
                <C.Button>Escoler Plano</C.Button>
            </C.PriceBox>
            </C.Container>
        </C.Section>
    )
}
export default Prices;