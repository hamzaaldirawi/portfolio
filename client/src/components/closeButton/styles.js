import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { rotateIn } from "react-animations";

export const CloseDiv = styled.div`
    display: flex;
    justify-content: end;
    padding: 1.5rem 1rem 1rem 1rem;
    font-size: 2.5rem;
    color: var(--second-color);
    cursor: pointer;
`

const rotateInAnimation = keyframes`${rotateIn}`
export const FontIcon = styled(FontAwesomeIcon)`
    animation: 4s ${rotateInAnimation};
`