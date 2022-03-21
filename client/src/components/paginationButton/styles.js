import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.8rem 0;

    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`

export const PreviousButtonStyle = styled(FontAwesomeIcon)`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    color: ${props => props.visible === 'true' ? 'black': 'grey'};
    cursor: ${props => props.visible === 'true' ? 'pointer': 'none'};
    pointer-events: ${props => props.visible === 'true' ? 'visible': 'none'};
`

export const NextButtonStyle = styled(FontAwesomeIcon)`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    color: ${props => props.visible === 'true' ? 'black': 'grey'};
    cursor: ${props => props.visible === 'true' ? 'pointer': 'none'};
    pointer-events: ${props => props.visible === 'true' ? 'visible': 'none'};
`

const CurrentButton = css`
    border: 1px solid ${props => props.visible === 'true' ? 'black': 'grey'};
    color: ${props => props.visible === 'true' ? 'black': 'grey'};
    cursor: ${props => props.visible === 'true' ? 'pointer': 'none'};
    pointer-events: ${props => props.visible === 'true' ? 'visible': 'none'};
`

export const ButtonsHolder = styled.div`
    display: block;
`

export const NumberButton = styled.button`
    height: 1.8rem;
    width: 1.8rem;
    margin: 0 0.5rem;
    border-radius: 50%;
    background: transparent;
    font-size: 1rem;
    border: 1px solid black;
    cursor: pointer;
    pointer-events: visible;
    
    ${CurrentButton};

    @media (max-width: 500px) {
        height: 1.2rem;
        width: 1.2rem;
        font-size: 0.8rem;
    }
`