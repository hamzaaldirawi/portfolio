import styled from "styled-components";

export const BlogStyled = styled.div`
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: var(--white-color);
    box-shadow: 10px 0 15px -5px var(--on-color);
`

export const Clickable = styled.a`
    cursor: pointer;
`

export const BlogContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    opacity: 1;
`

export const ImageHolder = styled.img`
    width: 100%;
    min-height: 13.5rem;

    @media (max-width: 800px) {
        min-height: 10.5rem;
    }

    @media (max-width: 500px) {
        min-height: 14.5rem;
    }
`

export const TextHolder = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--dark-color);
    opacity: 1;
    padding: 0.5rem 1.25rem 1.25rem 1.25rem;
    z-index: 15;
    background: transparent!important;
`

export const Title = styled.p`
    font-size: 0.75rem;
`
export const BlogName = styled.p`
    font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
    font-size: 1.05rem;
    font-weight: 400;
    padding-left: 0.65rem;
    line-height: 1.5;
`

export const BlogText = styled.p`
    font-size: 0.85rem;
    padding-top: 0.75rem;
    color: var(--font-color);
`