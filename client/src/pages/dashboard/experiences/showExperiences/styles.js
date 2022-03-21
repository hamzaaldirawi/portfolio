import styled from "styled-components";

export const FullWidth = styled.div`
    display: block;
    width: 100%;
    height: auto;
    padding: 0.8rem;
    box-shadow: 5px 0 15px 0 var(--on-color);
`
export const TableHeader = styled.li`
    border-radius: 0.3rem;
    padding: 0.5rem 0.8rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.35rem;
    background-color: var(--table-color);
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;

    @media (max-width: 500px) {
        font-size: 0.45rem;
    }
`

export const TableRow = styled.li`
    border-radius: 0.3rem;
    padding: 0.5rem 0.8rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
    font-size: 0.8rem;
    letter-spacing: 0.03em;
    background-color: var(--white-color);
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);

    @media (max-width: 500px) {
        font-size: 0.45rem;
    }
`

export const TableColumn = styled.div`
    align-self: center;

    &:first-child {
        flex-basis: 50%;
    }

    &:nth-child(2),
    &:nth-child(3) {
        flex-basis: 25%;
    }

    &:nth-child(4) {
        flex-basis: 25%;
    }

    &:last-child {
        flex-basis: 15%;
    }
` 

export const Thead = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.3rem;
    border: 0.03rem solid;

`

export const ButtonsHolder = styled.div`
    display: flex;
    justify-content: end;
`