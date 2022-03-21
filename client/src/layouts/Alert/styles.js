import styled, { css } from 'styled-components';

export const AlertContainer = styled.div`
    margin: 1rem;
    bottom: 1.5rem;
    right: 1rem;
    position: fixed;
    min-width: 20%;
    text-align: center;
    z-index: 60;
`

export const AlertP = styled.p`
    padding: 0.8rem;
    background: transparent;
    color: var(--white-color);
    margin-bottom: 0.4rem;
    ${props => props.type === 'danger' && css`
        background: var(--red-color);
    `}
    ${props => props.type === 'warning' && css`
        background: var(--second-color);
    `}
    ${props => props.type === 'success' && css`
        background: var(--green-color);
    `}

`