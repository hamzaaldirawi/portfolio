import styled, { keyframes } from 'styled-components';
import { fadeInLeft, fadeInRight } from 'react-animations';

export const SocialIconsContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (max-width: 715px) {
        flex-direction: row;
        justify-content: center;
    }
`

const fadeInLeftAnimation = keyframes(fadeInLeft);
const fadeInRightAnimation = keyframes(fadeInRight);
export const SocialIconContainer = styled.a`
    cursor: pointer;
    background: transparent;
    position: relative;
    transition: color .35s ease;
    z-index: 26;
    will-change: z-index;
    animation: 1.5s ${fadeInRightAnimation};
    font-size: 2rem;

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
        margin-right: 1.5rem;
        animation: 4s ${fadeInLeftAnimation};

        &:last-child {
            margin-right: 0;
        }
    }
`

