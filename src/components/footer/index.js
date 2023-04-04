import React from "react";
import { Link } from "react-scroll";
import miniLogo from '../../img/miniLogo_c.svg';

import {
    AiFillGithub,
    AiFillLinkedin
} from "react-icons/ai";

import { RiWhatsappFill } from "react-icons/ri";


import * as C from './styles'

const Footer = () => {

    return(
        <C.Nav>
            <C.Container>
                <Link 
                        style={{textDecoration:'none', display:'flex'}} 
                        to='home' 
                        spy={true} 
                        smooth={true} 
                        offset={-80} 
                        duration={800}>
                    <C.Logo src={miniLogo} alt='Logo Checkspeech' />
                </Link>
                <C.Text>
                    Temos uma das melhores soluções para reconhecimento de fala do mundo!
                </C.Text>
            </C.Container>

            <C.Container>
            <C.Container>
                <div>
                    <C.SocialIcons>
                        <a style={{color:'inherit'}} href='https://github.com/MarcioBADias'>
                            <AiFillGithub/>
                        </a>
                    </C.SocialIcons>
                    <C.SocialIcons>
                        <a style={{color:'inherit'}} href='https://www.linkedin.com/in/marciobadias/'>
                            <AiFillLinkedin/>
                        </a>
                    </C.SocialIcons>
                    <C.SocialIcons>
                        <a style={{color:'inherit'}} href='https://web.whatsapp.com/send?phone=5522999424224'>
                            <RiWhatsappFill/>
                        </a>
                    </C.SocialIcons>
                </div>
            </C.Container>
        <C.Container>
            <C.Title>Links Úteis</C.Title>
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
        </C.Container>
        </C.Container>

        <C.Container>
        <C.Container>
            <C.Title>
                Contato
            </C.Title>
            <C.Container
                style={{
                    marginTop: '-2.5rem'
                }}
            >
            <C.Text>+55 (99) 99999-9999</C.Text>
            <C.Text>contato@Checkspeechai.com</C.Text>
            <C.Text>Rua Desembargador Edésio Fernandes, 148 Conj 208 Estoril - Belo Horizonte/MG - Brasil CEP: 30494-450</C.Text>
            </C.Container>
        </C.Container>
        
        <C.Container>
            <C.Text
                style={{
                    fontSize:'.8rem'
                }}
            >Copyright * 2023 Checkspeech Ai. All Rights Reserved.</C.Text>
            <C.Text
                style={{
                    fontSize:'.8rem',
                    marginBottom:'1rem'
                }}
            >By Marcio Dias</C.Text>
        </C.Container>
        </C.Container>
        </C.Nav>
    )
}

export default Footer;