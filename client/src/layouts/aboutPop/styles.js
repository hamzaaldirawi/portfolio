import styled, { keyframes } from 'styled-components';
import CloseButton from '../../components/closeButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fadeInUp, fadeInDown } from 'react-animations';

export const PopContainer = styled.div`
    display: ${props => (props.display === 'false' ? 'none' : 'block')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 30;
    opacity: 0.9;
    background: rgba(0, 0, 0, 0.5);

    @media (max-width: 800px) {
        height: 200vh;
    }
`

export const PopHolder = styled.div`
    position: relative;
    width: 62.5rem;
    height: 80%;
    top: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    
    @media (max-width: 800px) {
        width: 100%;
        height: 200vh;
        top: 0;
        flex-direction: column-reverse;
    }
`
export const TextHolder = styled.div`
    position: absolute;
    top: 50%;
    padding: 3.5rem;
    transform: translateY(-50%);
    width: 100%;

    @media (max-width: 500px) {
        padding: 0.5rem;
    }
`

export const TextHeading = styled.h3`
    margin-top: 1rem;
    font-size: 2rem;
`

export const TextSolgan = styled.h4`
    font-size: 1.2rem;

    @media (max-width: 500px) {
        font-size: 0.9rem;
    }
`

const fadeInDownAnimation = keyframes(fadeInDown);
export const LeftPop = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--white-color);
    overflow: hidden;
    animation: 1.5s ${fadeInDownAnimation};
    color: var(--dark-color);
`

export const AboutDiv = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 13rem;
    font-weight: 900;
    color: rgba(0,0,0, 25%);
    opacity: 0.5;
`

export const AboutParagraph = styled.p`
    margin-top: 0.7rem;
    font-size: 0.9rem;
    line-height: 1.7rem;
`

export const IconsHolder = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1.5rem;
    width: 100%;
`

export const IconWithTextHolder = styled.div`
    width: 22.75%;
    margin-right: 3%;
    position: relative;
    text-align: center;

    :hover {
        & div {
            opacity: 1;
        }
    }
`

export const LabelBelowIcon = styled.div`
    position: absolute;
    bottom: -1.5rem;
    left: 0;
    width: 100%;
    transform: translateY(-0.1rem);
    font-size: 0.8rem;
    opacity: 0;
    transition: 0.3s opacity;
`

export const IconSvg = styled(FontAwesomeIcon)`
    font-size: 2rem;
`

const fadeInUpAnimation = keyframes(fadeInUp);
export const RightPop = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--on-color);
    overflow: hidden;
    animation: 1.5s ${fadeInUpAnimation};
    color: var(--white-color);
`

export const ContactDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: 13rem;
    font-weight: 900;
    color: rgba(0,0,0, 25%);
    opacity: 0.5;
`

export const CloseButtonCustom = styled(CloseButton)`
    position: absolute;
    width: 100%;
    padding: 1rem;
    @media (max-width: 500px) { 
        padding: 0.5rem;
    }
`