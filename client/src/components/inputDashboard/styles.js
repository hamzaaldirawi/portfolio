import styled from 'styled-components';

export const InputHolder = styled.div`
    width: 100%;
    margin-bottom: 2rem;
    font-size: 1rem;
    letter-spacing: 2px;
`

export const InputField = styled.input`
    display: block;
    width: 100%;
    border: 0;
    border-bottom: 2px solid silver;
    border-radius: 0;
    padding: 0.5rem 0.3rem;
    font-size: 0.9rem;
    background: transparent;
    color: silver;
    transition: 0.25s border-color;
    outline: none;
`

export const InputLabel = styled.label`
    font-size: 0.6rem;
    letter-spacing: 2px;
`