import styled from "styled-components";

export const CodeStyled = styled.div`
    width: 100%;
    height: 100%;
    opacity: 1;
    background-color: var(--low-color);
    
    :hover {
        .backgroundImage {
            background: url(${props => props.hover});
            background-position: 50%;
            background-size: 100% 100%;
            background-repeat: no-repeat;
            background-clip: border-box;
        }
    }
`

export const Clickable = styled.a`
    cursor: pointer;
`

export const CodeContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    opacity: 1;
`

export const ImageDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 16.5rem;
`

export const BackgroundImg = styled.div`
    box-shadow: 5px 15px 60px 0 var(--dark-color);
    border-radius: 50%;
    height: 13.5rem;
    width: 13.5rem;
    background: url(${props => props.image});
    background-position: 50%;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-clip: border-box;

    @media (max-width: 1100px) {
        height: 11.5rem;
        width: 11.5rem;
    }

    @media (max-width: 500px) {
        height: 10.5rem;
        width: 10.5rem;
    }
`

export const TextHolder = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--dark-color);
    opacity: 1;
    padding: 0 1.25rem 1.25rem 2.5rem;
    text-transform: uppercase;
    z-index: 15;
    background: transparent!important;
`

export const Title = styled.p`
    font-size: 0.75rem;
`
export const CodeName = styled.p`
    font-family: LibreBaskerville-Regular,Palatino Linotype,Times New Roman,serif;
    font-size: 1.05rem;
    font-weight: 400;
    padding-left: 0.65rem;
    line-height: 1.5;
`

export const NumberP = styled.p`
    font-size: 0.65rem;
    transform: rotate(90deg)
`