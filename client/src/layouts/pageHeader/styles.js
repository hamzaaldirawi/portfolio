import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const LogoCustom = styled(Logo)`
    width: 2.5rem;
    height: 2.5rem;

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
    height: 4.25rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 25;

    @media (max-width: 800px) {
        height: 3.25rem;
    } 
`

export const HeaderContainer = styled.div`
    display: ${props => props.height === 'false' ? 'flex' : 'none'};
    width: 90%;
    margin: 0 auto;
    padding: 1.5rem 0;
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
    font-weight: 400;
    font-size: 0.85rem;

    @media (max-width: 815px) {
        font-size: 0.65rem;
    }

    @media (max-width: 715px) {
        display: block;
    }
`

export const LinkContainer = styled.a`
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    color: var(--on-color);
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
        margin-right: 0;
    }
`

export const LinkContainerScroll = styled(NavLink)`
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    color: var(--on-color);
    position: relative;
    margin-right: 2rem;
    transition: color .35s ease;
    z-index: 26;
    font-weight: 600;
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