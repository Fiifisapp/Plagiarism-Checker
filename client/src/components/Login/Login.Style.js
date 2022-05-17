import styled from "styled-components";


export const LogoContainer = styled.div`
    width: 30%;
    margin: 2em auto;

`;
export const Logo = styled.img`

`;
export const LoginHeader = styled.h2`
    margin-top: 0.8em;
    font-size: 2.5em;
    margin-left: 1.2em;
    color: #D65D2D;
`;

export const FormContainer = styled.form`
    border: 3px solid #D65D2D;
    width: 40%;
    height: 60vh;
    margin: 0 auto;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
`;

export const Input = styled.input`
    width: 80%;
    height: 13%;
    border: 3px solid #D65D2D;
    margin: 1em 2.5em;
    padding: 0.4em;
    color: #D65D2D;
    font-size: 1.2em;


    &::placeholder{
        color: #E5BDA5;
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
    height: 15%;
    border: none;
    margin-left: 2.2em;
    margin-top: 0.8em;
    background-color: #D65D2D;
    font-size: 1.3em;
    font-weight: bold;
    color: white;

    &:hover{
        cursor: pointer;
        background-color: #E5BDA5;
        color: #D65D2D;
    }
`;