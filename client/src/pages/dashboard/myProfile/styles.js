import styled from 'styled-components';

export const AdminContainer = styled.div`
    display: block;
    width: 100%;
    font-size: 1.2rem;
    padding: 1.2rem;
    box-shadow: 5px 0 15px 0 var(--on-color);

    @media (max-width: 800px) {
        font-size: 0.9rem;
    }
`

export const NameAndEmailHolder = styled.div`
    display: flex;

`
export const LabelHolder = styled.p`
    padding-left: 1.2rem;
    margin-bottom: 1.2rem;

    @media (max-width: 800px) {
        padding-left: 0.9rem;
    }
`
export const ButtonsHolder = styled.div`
    display: flex;
    justify-content: end;
`