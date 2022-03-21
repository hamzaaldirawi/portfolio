import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fadeInLeft } from "react-animations";

export const HeadingButton = styled.a`
    cursor: pointer;
    font-size: 1.2rem;
    position: relative;
    padding: ${props => props.nopadding === 'false' ? '0' : '1.2rem 0 1.2rem 0.7rem'};
    
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