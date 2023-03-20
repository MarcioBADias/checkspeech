import React from "react";
import { Link } from "react-scroll";
import miniLogo from '../../img/miniLogo_c.svg';
import * as C from './styles'

const Footer = () => {

    return(
        <C.Nav>
            <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                <C.Logo src={miniLogo} alt='Logo Checkspeech' />
            </Link>
            <C.Menu
            >
                <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                    <C.ItemMenu>
                        Início
                    </C.ItemMenu>
                </Link>
                <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='about' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                    <C.ItemMenu>
                        Sobre
                    </C.ItemMenu>
                </Link>
                <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='solutions' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                    <C.ItemMenu>
                        Soluções
                    </C.ItemMenu>
                </Link>
                <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='clients' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}>
                    <C.ItemMenu>
                        Clientes
                    </C.ItemMenu>
                </Link>
                <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='prices' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}
                >
                    <C.ItemMenu>
                        Preços
                    </C.ItemMenu>
                </Link>
                <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='contacts' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}
                >
                    <C.ItemMenu>
                        Contato
                    </C.ItemMenu>
                </Link>
            </C.Menu>
        </C.Nav>
    )
}

export default Footer;