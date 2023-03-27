import React from "react";
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

            </C.PriceBox>
            <C.PriceBox>

            </C.PriceBox>
            <C.PriceBox>

            </C.PriceBox>
            </C.Container>
        </C.Section>
    )
}
export default Prices;