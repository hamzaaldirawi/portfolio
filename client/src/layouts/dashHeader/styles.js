import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeInLeft } from 'react-animations';

export const BigHeaderContainer = styled.div`
    display: block;
    width: 20%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--first-color);
    transition: background 0.35s ease;
    box-shadow: 0px 10px 15px 0px var(--on-color);

    @media (max-width: 715px) {
        height: 4.5rem;
        width: 100%;
    } 
`

export const HeaderContainer = styled.div`
    margin: 0 auto;
    padding: 1rem;

    @media (max-width: 715px) {
        padding: 1.5rem;
    }
`

export const NavbarContainer = styled.div`
    display: block;
    position: relative;
    
    @media (max-width: 715px) {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
`   

export const LinksContainer = styled.div`
    position: absolute;
    top: 15vh;
    display: flex;
    flex-direction: column;
    font-family: 'Spartan', sans-serif;
    font-weight: 800;
    font-size: 1.2rem;

    @media (max-width: 800px) {
        font-size: 0.8rem;
    }

    @media (max-width: 715px) {
        display: none;
    }
`
export const AhrefLinkContainerTheme = styled.a`
    cursor: pointer;
    background: transparent;
    color: var(--font-color);
    position: absolute;
    right: 0;
    transition: color .35s ease;
    z-index: 26;

    :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 3px;
        bottom: -5px;
        left: 0;
        background-color: var(--hover-color);
        transform-origin: bottom right;
        transition: transform 0.35s ease;
    }  
        
    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
        background-color: var(--second-color);
    }

    @media (max-width: 715px) {
        margin-right: 5rem;
    }
`

export const LinkContainer = styled(Link)`
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    color: var(--font-color);
    position: relative;
    margin: 1.25rem 0;
    transition: color .35s ease;
    z-index: 26;

   :hover {
       color: var(--second-color);
   }
`



export const AhrefLinkContainer = styled.a`
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    color: var(--font-color);
    transition: color .35s ease;
    margin: 1.25rem 0;
    z-index: 26;

   :hover {
       color: var(--second-color);
   }
`

export const MobileContainer = styled.span`
    display: block;
    width: 3rem;
    height: 1.5rem;
    
    @media (min-width: 715px) {
        display: none;
    }
`

export const MobileBar = styled.li`
    display: block;
    height: 3px;
    background-color: var(--second-color);
    margin-bottom: 6px;
    position: relative;
    float: right;
`

const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
export const MobileMenu = styled.div`
    display: ${props => (props.display === 'false' ? 'none' : 'block')};
    position: fixed;
    padding: 0 1.5rem;
    top: 0;
    left: 0;
    height: 100vh;
    width: 60vw;
    z-index: 26;

    :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 99%;
        z-index: 24;
        background-color: var(--first-color);
        animation: 2s ${fadeInLeftAnimation};
    }

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 24;
        background-color: var(--second-color);
        animation: 1.5s ${fadeInLeftAnimation};
    }

    @media (max-width: 500px) {
        width: 100vw;
    }
`

export const LinksContainerMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LinkContainerMobile = styled(Link)`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1.5rem;
    text-transform: uppercase;
    background: transparent;
    color: var(--font-color);
    position: relative;
    transition: color .35s ease;
    z-index: 26;
    animation: 1.5s ${fadeInLeftAnimation};

    &:first-child {
        margin-top: 4.5rem;
    }

    &:last-child {
        margin-bottom: 4.5rem;
    }

    :hover {
        color: var(--second-color);
    }
`

export const AhrefLinkContainerMobile = styled.a`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1.5rem;
    text-transform: uppercase;
    background: transparent;
    color: var(--font-color);
    position: relative;
    transition: color .35s ease;
    z-index: 26;
    animation: 1.5s ${fadeInLeftAnimation};

    &:first-child {
        margin-top: 4.5rem;
    }

    &:last-child {
        margin-bottom: 4.5rem;
    }

    :hover {
        color: var(--second-color);
    }
`