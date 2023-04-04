import styled from "styled-components";

export const Nav = styled.nav`
    align-items: center;
    background: rgb(24,77,30);
    background: linear-gradient(90deg, var(--cor-green-secondary) 0%, var(--cor-dark-secondary) 58%);
    color: var(--cor-green-primary);
    display: flex;
    min-height: 200px;
    justify-content: space-between;
    padding: 0 2rem;
    width: 100vw;
    z-index: 99;

    @media(max-width: 840px){
      align-items: center;
      height: 100%;
      flex-direction: column;
      justify-content: center;
    }
`;

export const Logo = styled.img`
    width: 150px;
    cursor: pointer;
`;

export const Menu = styled.ul`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    height: 100%;
    margin-top: -1.5rem;
`;

export const ItemMenu = styled.li`
    margin: .2rem 1rem;
    font-size: 1rem;
    text-align: center;

    :hover{
        color:var(--cor-light-primary);
        cursor: pointer;
        font-size: 1.2rem;
    }
`;

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 840px) {
    padding-top: 1rem;
  }
`;

export const Title = styled.h1`
    margin-bottom: 2rem;

    @media (max-width: 840px){
        margin-top: 1rem;
    }
`;

export const Text = styled.p`
  width: 80%;
  text-align: center;
`;

export const SocialIcons = styled.i`
    svg {
    height: 40px;
    margin: 0 .5rem;
    width: 40px;  
  }
  :hover{
      color: var(--cor-light-primary);
      cursor: pointer;
    }
`;