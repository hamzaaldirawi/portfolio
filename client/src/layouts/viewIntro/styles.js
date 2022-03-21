import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link as Scroll} from 'react-scroll'
import { fadeInLeft, fadeInUp } from 'react-animations';

export const IntroContainer = styled.div`
    display: ${props => (props.display === 'false' ? 'block' : 'none')};
    padding: 0 1.5rem;
    margin: 0 auto;
    overflow: hidden;
    width: 90%;
    
    @media (max-width: 500px) {
        width: 100%;
        padding-left: 0.5rem;
    }
`

export const LeftContainer = styled.div`
    position: absolute;
    padding-left: 2rem;
    top: 45%;
    transform: translateY(-45%);
    z-index: 23;
    overflow: hidden;
    
    @media (max-width: 500px) {
        padding-left: 1.5rem;
    }
`

const fadeInLeftAnimation = keyframes(fadeInLeft);
export const NameHeading = styled.h1`
    position: relative;
    font-size: 2.8rem;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--font-color);
    margin-bottom: 1rem;

    :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        background: var(--font-color);
        width: 100%;
        height: 100%;
        transform: translateX(-120%);
        animation: 3s disappear;
    }

    @media (max-width: 815px) {
        font-size: 1.9rem;
    }

    @media (max-width: 500px) {
        font-size: 1.4rem;
    }

    @keyframes disappear {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-120%);
        }
    }
}
`

const fadeInUpAnimation = keyframes(fadeInUp);
export const SolganHeading = styled.h3`
    font-size: 1.1rem;
    padding-left: 0.7rem;
    font-weight: 600;
    color: var(--font-color);
    font-style: italic;
    margin-bottom: 1.5rem;
    animation: 1.5s ${fadeInUpAnimation};

    @media (max-width: 815px) {
        font-size: 0.85rem;
    }
`

export const ButtonArrow = styled(FontAwesomeIcon)`
    position: relative;
    z-index: 10;
    margin-left: -0.2rem;
    animation: 1.5s ${fadeInLeftAnimation}; 
`

export const LogoContainer = styled.div`
    position: absolute;
    padding-left: 2rem;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -55%);
    z-index: 22;
    opacity: 0.3;

    @media (min-width: 1200px) {
        top: 42%;
        left: 45%;
        transform: translate(-42%, -45%);
    }

    @media (max-width: 800px) {
        top: 45%;
        left: 55%;
        transform: translate(-45%,-55%);
    }

    @media (max-width: 500px) {
        top: 45%;
        left: 65%;
        transform: translate(-45%,-65%);
    }
`

export const LogoBelow = styled(Logo)`
    height: 20rem;
    width: 20rem;

    & g {
        fill: var(--font-color);
    }
    
    @media (max-width: 800px) {
        height: 12rem;
        width: 12rem;
    }

    @media (max-width: 500px) {
        height: 8rem;
        width: 8rem;
    }
`

export const SocialIconContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    padding: 0 1.5rem;

    @media(max-width: 715px) {
        display: none;
    }
`

export const ToWork = styled(Scroll)`  
    display: ${props => (props.display === 'false' ? 'block' : 'none')};
    cursor: pointer;
    position: absolute;
    bottom: 0;
    height: 4.2rem;
    width: 100%;  
    text-align: center;
    overflow: hidden;
    color: var(--font-color);

    & svg {
        transform: rotateY(260deg) scale(1);
    }

    :hover {
        & svg {
            transform: rotateY(0deg) scale(0.6);
        }
    }
`