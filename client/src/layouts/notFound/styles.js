import styled from "styled-components";
import { Link } from "react-router-dom";
export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: var(--first-color);
    z-index: 26;
`

export const Heading = styled.h3`
    font-size: 2.5rem;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 1.5rem;
    }
`

export const BackHome = styled(Link)`
    font-size: 1.85rem;

    @media (max-width: 500px) {
        font-size: 1.2rem;
    }
`