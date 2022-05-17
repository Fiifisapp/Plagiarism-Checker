import styled from "styled-components";

export const ImageWrapper = styled.div`
    width: 70%;
    height: 50vh;
    margin: 5em auto;
`;
export const SourceImg = styled.img`
    max-height: 100%;
`;
export const SourceTextWrapper = styled.div`
    width: 28em;
    height: 50vh;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 30%;
    left: 14%;
`;
export const SourceText = styled.div`
    width: 80%;
`;

export const QuoteWrapper = styled.div`
`;

export const Quote = styled.h1`
    width: 50%;
    height: 50%;
    font-size: 8em;
    margin-left: 0.2em;
    color: #DD5928;
    font-family: 'Ubuntu', sans-serif;
`;
export const OrangeText = styled.h1`
    margin-top: 1.2em;
    font-weight: lighter;
    color: #DD5928;
`;

export const SourceHighlight = styled.span`
    font-weight: bold;
    color: #6B6D6F;
`;
export const Button = styled.button`
    margin-top: 1em;
    width: 50%;
    height: 10vh;
    border: none;
    background-color: #DD5928;
    color: white;
    font-weight: Bold;
    font-size: 1.2em;

    &:hover{
        background-color: #E5BDA5;
        color: white;
        cursor: pointer;
    }
`;