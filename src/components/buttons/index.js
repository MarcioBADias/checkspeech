import React from "react";
import { Link } from "react-scroll";

import * as C from './styles';

const DirectButton = ({ title,point }) => {
    return (
        <C.Container>
            <Link 
                style={{textDecoration:'none', display:'flex'}} 
                to={point} 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={800}
            >
                <C.Button>
                    {title}
                </C.Button>
            </Link>
        </C.Container>
    )
}

export default DirectButton;