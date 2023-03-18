import React from 'react';
import logo from '../../img/logo.svg';

import * as C from './styles';
const Home = () => {
    return(
        <C.Section>
            <C.LoadingLogo src={logo} alt="logo em movimento" />
            <p>
            Projeto em construção...
            </p>
        </C.Section>
    )
}

export default Home;