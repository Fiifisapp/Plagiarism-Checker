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
    width: 20%;
    height: 50%;
    font-size: 8em;
    margin-left: 0.2em;
    color: #DD5928;
    font-family: 'Ubuntu', sans-serif;
    border: 1px solid green;
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
    font-size: 1.3em;
    font-weight: bold;

    &:hover{
        background-color: #E5BDA5;
        color: #DD5928;
        cursor: pointer;
    }
`;

export const Title = styled.div`
    width: 60%;
    margin: 10em auto;
`;
export const TitleImage = styled.img`

`;

export const TextImageWrapper = styled.div`
    border: 1px solid red;
    display: flex;
    width: 90%;
    height: 80vh;
    margin: 0 auto;
`;

export const TextWrapper = styled.div`
    border: 1px solid black;
    display: flex;
    width: 80%;
`;
export const Text = styled.h1`
    width: 80%;
    margin-top: 1em;
    margin-left: 1.5em;
    border: 1px solid red;
    font-weight: lighter;
    color: #6B6D6F;
`;
export const TextHighlight = styled.span`
    color: #DD5928;
    font-weight: bold;
`;

