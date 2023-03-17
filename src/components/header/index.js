import React from "react";
import miniLogo from '../../img/miniLogo_c.svg';

const Header = () => {
    return(
        <nav>
            <img src={miniLogo} alt='Logo Checkspeech' />
            <ul>
                <li>
                Soluções
                </li>
                <li>
                Clientes
                </li>
                <li>
                Preços
                </li>
                <li>
                Contatos
                </li>
            </ul>
        </nav>
    )
}

export default Header;