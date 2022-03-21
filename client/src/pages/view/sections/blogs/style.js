import styled from "styled-components";

export const Section = styled.section`
    display: ${props => (props.display === 'false' ? 'block' : 'none')};
    position: relative;
    max-width: 1170px;
    margin: 0 auto;
    margin-bottom: 3.5rem;

    @media (max-width: 500px) {
        padding: 1rem 0.5rem;
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
    padding: 0 1.5rem;

    @media (max-width: 500px) {
        padding: 0;
    }
`


export const GridHolder = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.5rem;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
`

export const ShowMore = styled.div`
    text-align: center;
    margin-top: 1.25rem;
`

export const ColoredAhref = styled.a`
    cursor: pointer;
    background: transparent;
    color: var(--dark-color);
    position: relative;
    transition: color .35s ease;
    font-size: 1.25rem;

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