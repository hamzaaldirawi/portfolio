import styled from "styled-components";

export const FullWidth = styled.div`
    display: block;
    width: 60%;
    font-size: 1.2rem;
    padding: 1.2rem;
    box-shadow: 5px 0 15px 0 var(--on-color);

    @media (max-width: 800px) {
        width: 100%;
        font-size: 0.9rem;
    }
`