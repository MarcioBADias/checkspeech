import styled from "styled-components";

export const Nav = styled.nav`
    align-items: center;
    background: rgb(24,77,30);
    background: linear-gradient(90deg, rgba(24,77,30) 0%, rgba(134,134,134,1) 58%);
    color: var(--cor-green-primary);
    display: flex;
    height: 200px;
    justify-content: space-between;
    padding: 0 2rem;
    width: 100vw;
    z-index: 99;
`;

export const Logo = styled.img`
    width: 150px;
    cursor: pointer;
`;

export const Menu = styled.ul`
    align-items: center;
    display: block;
    list-style: none;
    margin: 0;
    margin-top: 3rem;
    padding: 0;
    height: 100%;
`;

export const ItemMenu = styled.li`
    margin: .2rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;

    :hover{
        color:var(--cor-light-primary);
        cursor: pointer;
        font-size: 1.2rem;
    }
`;

export const ButtonMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;

  @media (max-width: 840px) {
    display:flex;
  }
`;

export const IconMenu = styled.i`
  svg {
    height: 50px;
    width: 50px;  
  }
  :hover{
      color: var(--cor-primary);
      cursor: pointer;
    }
`;