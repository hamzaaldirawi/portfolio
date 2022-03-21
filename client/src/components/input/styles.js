import styled from 'styled-components';

export const InputHolder = styled.div`
    position: relative;
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1rem;
    letter-spacing: 2px;
    
    :before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--first-color);
        transition: 0.45s width;
        transition-delay: 0.10s;
        z-index: 10;
    }

    :hover:before {
        width: 100%;   
    }

    :after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: var(--second-color);
        transition: 0.45s width;
        transition-delay: 0.20s;
        z-index: 10;
    }

    :hover:after {
        width: 100%;
    }
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
    position: absolute;
    top: -1.15rem;
    left: 0;
    font-size: 0.6rem;
    letter-spacing: 2px;
`