import styled from "styled-components";


export const LogoContainer = styled.div`
    width: 30%;
    margin: 2em auto;

`;
export const Logo = styled.img`

`;
export const LoginHeader = styled.h2`
    padding-top: 0.8em;
    padding-bottom: 0.4em;
    font-size: 2.5em;
    color: white;
    text-align: center;
`;

export const FormContainer = styled.form`
    border-radius: 10px;
    width: 40%;
    height: 70vh;
    margin: 0 auto;
    background-color: #EEA40E;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
`;



export const Input = styled.input`
    width: 80%;
    height: 8vh;
    border-radius: 8px;
    margin: 1em 2.5em;
    padding: 0.4em;
    color: #EEA40E;
    font-size: 1.2em;
    border: none;
    outline: none;


    &::placeholder{
        color: #EEA40E;
        padding: 0.4em;
        font-size: 1em;
    }
`;

export const ErrorMessage = styled.p`
    color: #D65D2D;
    margin-left: 3em;
`;

export const Button = styled.button`
    width: 25%;
    height: 8vh;
    border: none;
    margin-left: 2.2em;
    margin-top: 0.8em;
    background-color: black;
    font-size: 1.3em;
    font-weight: bold;
    border-radius: 8px;
    color: white;

    &:hover{
        cursor: pointer;
        background-color: white;
        color: #EEA40E;
    }
`;