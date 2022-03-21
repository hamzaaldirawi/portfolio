import styled, { keyframes } from "styled-components";
import { NavLink } from 'react-router-dom';
import { fadeInDown, fadeInLeft } from "react-animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ExpStyled = styled.div`
    width: 85%;
    margin-bottom: 5.5rem;

    &:nth-child(2n + 1) {
        transform: translateX(12%);
    }
 
    &:nth-child(2n +2) {
        transform: translateX(5%);
    }
    
    @media (max-width: 500px) {
        width: 90%;
        margin: 0 auto;
        margin-bottom: 4.25rem;
        transform: none!important;
    }
`

export const ClickableDiv = styled(NavLink)`
    cursor: pointer;
`

export const ExpContainer = styled.div`
    display: block;
    position: relative;
    width: 95%;
    height: 100%;
    opacity: 1;
    width: 100%;
    height: 29.375rem;
    background: url(${props => props.image});
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 5px 5px 40px 5px var(--dark-color);

    :before {
        content: " ";
        display: block;
        width: 100%;
        height: 100%;
        opacity: 0.4;
        position: absolute;
        background-color: var(--dark-color);
        left: 0;
        top: 0;
        transition: opacity .35s ease;
        z-index: 5;
    }

    :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0.5;
        background-color: var(--second-color);
        transform-origin: right;
        transition: transform 0.35s ease;
    }

    :hover {
        background: url(${props => props.hover});
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;

        .numberHolder {
            display: block;
        }
    } 

    :hover:after {
        transform: scaleX(1);
        transform-origin: left;
        background: linear-gradient(270deg, var(--first-color), var(--hover-color));
    }

    @media (max-width: 1100px) {
        height: 26.875rem;
    }

    @media (max-width: 800px) {
        height: 22.5rem;
    }

    @media (max-width: 500px) {
        height: 14.5rem;
    }
`

export const TextHolder = styled.div`
    position: absolute;
    left: 15%;
    bottom: 15%;
    color: var(--white-color);
    opacity: 1;
    transition: transform 0.45s, opacity 0.25s;
    font-size: 1.6rem;
    z-index: 15;

    @media (max-width: 800px) {
        font-size: 1.10rem;
    }

    @media (max-width: 500px) {
        font-size: 0.95rem;
    }
`

export const Heading = styled.h3`
    margin-bottom: 0.55rem;
    line-height: 1.01;
    text-transform: uppercase;
`

export const SubHeading = styled.h5`
    font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 0.85rem;
    font-size: 1.35rem;
    line-height: 1.5;

    @media (max-width: 800px) {
        font-size: 0.95rem;
    }

    @media (max-width: 500px) {
        font-size: 0.75rem;
    }
`

const Animate = keyframes`${fadeInDown}`;
export const NumberHolder = styled.p`
    display: none;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    font-size: 9.5rem;
    font-weight: 900;
    transform: translateY(-30%);
    color: var(--low-color);
    z-index: 15;
    animation: 0.25s ${Animate};
    transition: animation 0.25s;

    @media (max-width: 800px) {
        font-size: 6.5rem;
    }

    @media (max-width: 500px) {
        font-size: 5.5rem;
    }
`

export const HeadingButton = styled.div`
    cursor: pointer;
    font-size: 1.2rem;
    position: relative;
    
    :hover {
        & div {
            margin-right: 0.2rem;
        }
    }
    @media (max-width: 815px) {
        font-size: 1rem;
    }
`

const fadeInLeftAnimation = keyframes({fadeInLeft});
export const ButtonMask = styled.div`
    display: inline-block;
    cursor: pointer;
    background: var(--second-color);
    color: var(--button-font-color);
    position: relative;
    padding: 0.65rem 1.3rem;
    transition: color .35s ease;
    z-index: 5;
    animation: 1.5s ${fadeInLeftAnimation}; 

    :after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 100%;
        top: 0;
        left: 0;
        background-color: var(--second-color);
        transform-origin: bottom right;
        transition: transform 0.35s ease;
    }  
        
    :hover:after {
        transform: scaleX(1);
        transform-origin: bottom left;
        background-color: var(--hover-color);
    }
        
`

export const ButtonText = styled.div`
    position: relative;
    z-index: 10;
`

export const ButtonArrow = styled(FontAwesomeIcon)`
    position: relative;
    z-index: 10;
    margin-left: -0.2rem;
    animation: 1.5s ${fadeInLeftAnimation}; 
`