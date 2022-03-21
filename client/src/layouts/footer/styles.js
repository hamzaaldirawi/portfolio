import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const FooterHolder = styled.footer`
    display: ${props => (props.display === 'false' ? 'block' : 'none')};
    width: 100%;
    height: 100%;
    background: var(--first-color);
    transition: background 0.35s ease;
    padding: 3rem;
`

export const LogoContainer = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3rem;
`

export const LogoCustom = styled(Logo)`
    height: 8rem;
    width: 8rem;

    & g {
        fill: var(--font-color);
    }
    
    @media (max-width: 800px) {
        height: 5.5rem;
        width: 5.5rem;
    }

    @media (max-width: 500px) {
        height: 3.5rem;
        width: 3.5rem;
    }
`

export const FooterLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 60%;
    margin: 0 auto;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const LinkContainer = styled.a`
    display: flex;
    justify-content: center;
    cursor: pointer;
    text-transform: uppercase;
    background: transparent;
    color: var(--font-color);
    transition: color .35s ease;
    padding-bottom: 3rem;

    @media (max-width: 800px) {
        padding-bottom: 2rem;
        &:nth-child(2n + 1) {
            justify-content: flex-start;
        }

        &:nth-child(2n + 2) {
            justify-content: flex-end;
        }
    }
`

export const LinkName = styled.p`
    position: relative;

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

export const CopyRight = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const Contact = styled.span`
    cursor: pointer;
    position: relative;

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

export const Pargraph = styled.p`
    text-align: center;
    font-size: 0.75rem;
    color: var(--font-color);
    font-family: Times New Roman,serif;
    font-weight: 100;
`