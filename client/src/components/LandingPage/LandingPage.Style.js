import styled from "styled-components";

export const LogoContainer = styled.div`
    width: 8%;
    height: 7vh;
    margin-left: 2em;
    margin-top: 2em;
`;

export const Logo = styled.img`
    max-height: 100%;
`;

export const HeroSection = styled.div`
    width: 100%;
    height: 100vh;
`;
export const HeroAvatar = styled.div`
    width: 20%;
    height: 100%;
    position: absolute;
    top: 20%;
    left: 16%;
`;
export const AvatarImage = styled.img`
    max-height: 100%;
    z-index: 20;
`;

export const HeroText = styled.h1`
    position: absolute;
    top: 20%;
    left: 35%;
    width:55%;
    font-weight: lighter;
    font-size: 3em;

`;
export const BoldText = styled.span`
    font-weight: bold;
    font-size: 1.5em;
    color: #EEA40E;
`;

export const Button = styled.button`
    position: absolute;
    top: 68%;
    left: 35%;
    width: 18%;
    height: 10vh;
    background-color: #EEA40E;
    color: white;
    border: none;
    font-weight: bold;
    font-size: 1.2em;

    &:hover{
        color: #EEA40E;
        background-color: white;
        cursor: pointer;
    }
`;


export const SourceSection = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #EEA40E;
    display: flex;
    flex-direction: row;
`;

export const TitleTextContainer = styled.div`
    width: 40%;
    height: 90%;
    margin-left: 9em;
    margin-top: 2.5em;
`;

export const SourceText = styled.h1`
    font-size: 5em;
    text-align: center;
`;

export const SourceImage = styled.div`
    width: 80%;
    height: 80%;
    margin: 2em 8em;
`;

export const TileCard = styled.img`

`;

export const BookContainer = styled.div`
`;

export const BookImage = styled.img`
    max-height: 100%;
    margin-top: 4em;
`;