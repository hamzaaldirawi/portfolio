import styled from "styled-components";

export const ViewContainer = styled.div`
    height: ${props => (props.height === 'false' ? 'calc(100vh - 6.25rem)' : '100vh')};
    position: relative;
    background: var(--first-color);
    transition: background 0.35s ease;

    @media (max-width: 800px) {
        height: ${props => (props.height === 'false' ? 'calc(100vh - 5.25rem)' : '100vh')};
    }
`
