import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.section`
    display: ${props => props.height === 'false' ? 'block' : 'none'};
`

export const HeaderHolder = styled.div`
    position: relative;
    min-height: 90vh;
    max-height: 950px;
    width: 100%;
    background: url(${props => props.image});
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
`

export const ExperienceNameDesc = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--dark-color);
    text-align: center;
`

export const ExperienceName = styled.h3`
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    font-size: 2.55rem;
    line-height: 1.15;
    padding-bottom: 0.75rem;
    text-transform: capitalize;
    letter-spacing: 0.30rem;
    text-shadow: 0px 2px 5px var(--second-color);

    @media (max-width: 800px) {
        font-size: 1.95rem;
    }

    @media (max-width: 500px) {
        font-size: 1.75rem;
    }
`

export const ExperienceDesc = styled.h5`
    font-family: League Spartan,Helvetica,Arial,sans-serif;
    font-size: 1.35rem;
    line-height: 0.90;
    text-transform: capitalize;
    letter-spacing: 0.10rem;
    line-height: 1.3;
    text-shadow: 0px 2px 5px var(--second-color);

    @media (max-width: 800px) {
        font-size: 1.15rem;
    }

    @media (max-width: 500px) {
        font-size: 0.95rem;
    }
`

export const ExperienceRuleLink = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    height: 10%;
    color: var(--dark-color);
    font-size: 0.85rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 2.5rem;
    
    @media (max-width: 500px) {
        font-size: 0.70rem;
        padding: 0 1.25rem;
    }
`

export const ExperienceLink = styled.div`
    color: var(--dark-color);
    cursor: pointer;
    background: transparent;
    position: relative;
    transition: color .35s ease;

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

export const ExperienceDetails = styled.div`
    font-size: 3.55rem;
    color: var(--font-color);
    background: var(--first-color);
    padding: 1.15rem 2.5rem 4.5rem 2.5rem;

    @media (max-width: 800px) {
        font-size: 2.55rem;
    }

    @media (max-width: 500px) {
        font-size: 1.55rem;
    }
`

export const TheProject = styled.h2`
    text-align: center;
    margin-bottom: 1.25rem;
`

export const TheDetails = styled.p`
    padding: 1.25rem 13.5rem;
    font-size: 1.55rem;
    line-height: 1.65;
    text-align: justify;
    max-width: 1170px;
    margin: 0 auto;

    @media (max-width: 800px) {
        font-size: 1.25rem;
        padding: 1.25rem 5.5rem;
    }

    @media (max-width: 500px) {
        font-size: 1rem;
        padding: 0.65rem;
    }
`

export const SkillsHolder = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
`

export const SkillsHeader = styled.h3`
    padding: 2.5rem;
    padding-bottom: 1.25rem;
    font-size: 1.75rem;

    @media (max-width: 500px) {
        font-size: 1.25rem;
    }
`

export const UnorderedList = styled.ul`
    padding: 0 2.75rem;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    max-width: 1170px;
`

export const ListItem = styled.li`
    padding: 0.85rem 1.05rem;
    margin-right: 0.45rem;
    margin-top: 0.45rem;
    border: 1px solid var(--on-color);
`

export const ImageHolder = styled.div`
    padding: 3.5rem 2.5rem;
    width: 100%;
`
export const Image = styled.img`
    box-shadow: 10px 0 15px 0 var(--dark-color);
    height: auto;
    max-height: 470px;
    margin: 0 auto;

    @media (max-width: 800px) {
        width: 100%;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`

export const Pagination = styled.div`
    display: flex;
    position: relative;
    width: 100%;  
    max-width: 940px;
    max-height: 470px;
    font-size: 1.8rem;
    margin: 0 auto;

    @media (max-width: 800px) {
        font-size: 1.2rem;
    }
`

export const PreviousButtonContainer = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: ${props => props.visible === 'true' ? 'flex' : 'none'};
    align-items: center;
    background: rgba(0, 0, 0, 20%);

    :hover {
        background: rgba(0, 0, 0, 50%);
    }
`

export const NextButtonContainer = styled.div`
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: ${props => props.visible === 'true' ? 'flex' : 'none'};
    align-items: center;
    background: rgba(0, 0, 0, 20%);

    :hover {
        background: rgba(0, 0, 0, 50%);
    }
`

export const PreviousButtonStyle = styled(FontAwesomeIcon)`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    color: ${props => props.visible === 'true' ? 'var(--on-color)' : 'var(--dark-color)'};
`

export const NextButtonStyle = styled(FontAwesomeIcon)`
    margin: 0 0.5rem;
    padding: 0 0.5rem;
    color: ${props => props.visible === 'true' ? 'var(--on-color)': 'var(--dark-color)'};
`