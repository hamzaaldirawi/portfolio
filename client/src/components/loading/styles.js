import styled from "styled-components";

export const LoadingContainer = styled.div`
    height: 100%;
    width: 100%;
    background: var(--first-color);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10000;
    perspective: 1600px;
    perspective-origin: 20% 50%;
    opacity: 1;
    transition: 1.5s ease-out;
`

export const LoadingCircleHolder = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`
export const LoadingCircle = styled.div`
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: var(--second-color);
    animation: spin 2s linear infinite;

    &:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: var(--hover-color);
        animation: spin 3s linear infinite;
    }

    &:after {
        content: "";
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: var(--second-color);
        animation: spin 1.5s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
`

// export const Spinner = styled.div`
//     width: 100%;
//     height: 33%;
//     background: var(--second-color);
//     animation: move 2.5s 0.2s infinite ease-in-out;
//     overflow: hidden;
//     transition: width 0.5s, background 0.5s;
    
//     &:first-child {
//         animation: move 2.5s 0.1s infinite ease-in-out;
//     }

//     &:last-child {
//         animation: move 2.5s 0.3s infinite ease-in-out;
//     }

//     @keyframes move {
//         0% {
//             width: 0;
//         }
//         25% {
//             width: 100%;
//         }
//         50% {
//             width: 0;
//         }
//         75% {
//             background: var(--hover-color);
//             width: 100%;
//         }
//         100% {
//             width: 0;
//         }
//     }
// `