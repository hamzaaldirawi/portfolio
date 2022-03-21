import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`
export const PopContainer = styled.div`
    display: ${props => (props.display === 'false' ? 'none' : 'flex')};
    cursor: pointer;
    flex-direction: column;
    position: fixed;
    z-index: 30;
    background: rgba(0, 0, 0, 0.7);
    padding: 2.5rem;
    padding-top: 1.25rem;
    transition: display 0.35s ease;

    @media (max-width: 800px) {
        padding: 2.5rem 0;
        padding-top: 1.25rem;
    }
`

export const Close = styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 1.25rem;
    padding-right: 1.25rem;
    color: var(--second-color);
    font-size: 1.5rem;
`

export const Image = styled.img`
    height: auto;
    width: auto;
    max-width: 100%;
`

