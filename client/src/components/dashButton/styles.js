import styled, { keyframes } from "styled-components";
import { fadeInLeft } from "react-animations";

export const HeadingButton = styled.a`
    display: flex;
    justify-content: end;
    cursor: pointer;
    font-size: ${props => (!props.small ? '0.95rem' : '0.85rem')};
    margin-left: 1.2rem;

    @media (max-width: 815px) {
        font-size: ${props => (!props.small ? '0.85rem' : '0.75rem')};
    }

    @media (max-width: 500px) {
        font-size: ${props => (!props.small ? '0.75rem' : '0.45rem')};
    }
`

const fadeInLeftAnimation = keyframes({fadeInLeft});
export const ButtonMask = styled.div`
    display: inline-block;
    cursor: pointer;
    background: var(--second-color);
    color: var(--button-font-color);
    padding: 0.65rem 1.3rem;
    transition: color .35s ease;
    animation: 1.5s ${fadeInLeftAnimation}; 
    text-align: center;
    height: 100%;

    :hover {
        background: var(--button-font-color);
        color: var(--second-color);
    }

    @media (max-width: 500px) {
        padding: 0.25rem 0.65rem;
    }
`
