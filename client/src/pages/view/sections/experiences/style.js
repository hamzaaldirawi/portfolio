import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Section = styled.section`
    display: ${props => (props.display === 'false' ? 'block' : 'none')};
    position: relative;
    max-width: 1170px;
    margin: 0 auto;
    margin-bottom: 2rem;

    @media (max-width: 500px) {
        padding: 1rem 0;
    }
`

export const HeadingContainer = styled.div`
    padding: 2rem;
    padding-top: 4.5rem;
    text-align: center;
    margin-bottom: 3.5rem;

    @media (max-width: 800px) {
        padding: 0.85rem;
        padding-top: 2.5rem;
        margin-bottom: 2.25rem;
    }
`

export const Head = styled.h4`
    font-size: 1.25rem;
    letter-spacing: 0.15rem;
    color: var(--special-color);
    margin-bottom: 1.5rem;
    text-transform: uppercase;

    @media (max-width: 800px) {
        font-size: 1rem;
    }
`

export const SubHead = styled.p`
    font-size: 2.25rem;
    font-family: Sparten, Helvetica, Arial, sans-serif;
    font-weight: 700; 
    color: var(--on-color);

    @media (max-width: 800px) {
        font-size: 1.85rem;
    }
`   

export const Holder = styled.div`
    position: relative;
`

export const Pagination = styled.div`
    display: flex;
    justify-content: center;
    margin: -1.25rem 0; 
    width: 100%;  
    font-size: 1.8rem;

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }
`

export const PreviousButtonStyle = styled(FontAwesomeIcon)`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    color: ${props => props.visible === 'true' ? 'var(--on-color)' : 'var(--low-color)'};
    cursor: ${props => props.visible === 'true' ? 'pointer': 'none'};
    pointer-events: ${props => props.visible === 'true' ? 'visible': 'none'};
`

export const NextButtonStyle = styled(FontAwesomeIcon)`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    color: ${props => props.visible === 'true' ? 'var(--on-color)': 'var(--low-color)'};
    cursor: ${props => props.visible === 'true' ? 'pointer': 'none'};
    pointer-events: ${props => props.visible === 'true' ? 'visible': 'none'};
`