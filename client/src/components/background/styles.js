import styled from "styled-components";

export const BackgroundFull = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100vh - 6.25rem);
    left: 0;
    top: 0;

    @media (max-width: 800px) {
        height: calc(100vh - 5.25rem);
    }

    @media (max-width: 500px) {
        display: none;
    }
`