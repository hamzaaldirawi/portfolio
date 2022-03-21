import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link as Scroll} from 'react-scroll'
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { fadeInLeft } from 'react-animations';

export const LogoCustom = styled(Logo)`
    width: 3.5rem;
    height: 3.5rem;

    & g {
        fill: var(--logo-color);
    }

    @media (max-width: 815px) {
        width: 2.5rem;
        height: 2.5rem;
    }
`
export const BigHeaderContainer = styled.div`
    display: ${props => (props.display === 'false' ? 'flex' : 'none')};
    width: 100%;
    height: 6.25rem;
    background: var(--first-color);
    transition: background 0.35s ease;

    @media (max-width: 800px) {
        height: 5.25rem;
    } 
`

export const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem 0;
    display: flex;
    justify-content: space-between;
    max-width: 1170px;
`

export const LogoContainer = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 27;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`   

export const LinksContainer = styled.div`
    font-family: 'Spartan', sans-serif;
    font-weight: 800;
    font-size: 1.2rem;
    padding: 1rem 1.5rem;

    @media (max-width: 815px) {
        font-size: 0.8rem;
    }

    @media (max-width: 715px) {
        display: none;
    }
`

export const LinkContainer = styled.a`
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    color: var(--font-color);
    position: relative;
    margin-right: 2rem;
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
        display: flex;
        flex-direction: column;
    }
`

export const LinkContainerScroll = styled(Scroll)`
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    color: var(--font-color);
    position: relative;
    margin-right: 2rem;
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
        display: flex;
        flex-direction: column;
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

export const LinkContainerMobile = styled.a`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 4.5rem;
    text-transform: uppercase;
    background: transparent;
    color: var(--font-color);
    position: relative;
    transition: color .35s ease;
    z-index: 26;
    animation: 1.5s ${fadeInLeftAnimation};

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
`

export const LinkContainerMobileScroll = styled(Scroll)`
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
`

export const LinksMobile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`