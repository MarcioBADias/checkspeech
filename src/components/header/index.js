import React, { useState } from "react";
import { Link } from "react-scroll";
import miniLogo from '../../img/miniLogo_c.svg';
import { CgMenuRightAlt, CgCloseR } from "react-icons/cg";
import * as C from './styles'

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return(
        <C.Nav>
            <C.Logo src={miniLogo} alt='Logo Checkspeech' />
            <C.Menu
            showMenu={showMenu}
            >
                <Link 
                    style={{textDecoration:'none', display:'flex'}} 
                    to='home' 
                    spy={true} 
                    smooth={true} 
                    offset={-80} 
                    duration={800}
                    onClick={() => setShowMenu(!showMenu)}>
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
                    duration={800}
                    onClick={() => setShowMenu(!showMenu)}>
                    <C.ItemMenu>
                        Sobre
                    </C.ItemMenu>
                </Link>
                <C.ItemMenu
                onClick={() => setShowMenu(!showMenu)}
                >
                    Soluções
                </C.ItemMenu>
                <C.ItemMenu
                onClick={() => setShowMenu(!showMenu)}
                >
                    Preços
                </C.ItemMenu>
                <C.ItemMenu
                onClick={() => setShowMenu(!showMenu)}
                >
                    Contatos
                </C.ItemMenu>
            </C.Menu>

            <C.ButtonMenu onClick={() => setShowMenu(!showMenu)}>
                <C.IconMenu>
                    {
                    showMenu?
                        <CgCloseR/>:
                        <CgMenuRightAlt>
                            <C.Menu
                            showMenu={showMenu}
                            >
                                <C.ItemMenu>
                                    Início
                                </C.ItemMenu>
                                <C.ItemMenu>
                                    Soluções
                                </C.ItemMenu>
                                <C.ItemMenu>
                                    Preços
                                </C.ItemMenu>
                                <C.ItemMenu>
                                    Contatos
                                </C.ItemMenu>
                            </C.Menu>
                        </CgMenuRightAlt>
                    }
                </C.IconMenu>
            </C.ButtonMenu>
        </C.Nav>
    )
}

export default Header;