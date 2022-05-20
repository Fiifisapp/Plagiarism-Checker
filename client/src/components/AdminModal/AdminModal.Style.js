import styled from "styled-components";


export const LoginHeader = styled.h2`
    margin-top: 0.8em;
    font-size: 2.5em;
    margin-left: 1.2em;
    color: #D65D2D;
`;

export const FormContainer = styled.form`
    border: 3px solid #D65D2D;
    width: 100%;
    height: 60vh;
    margin: 0 auto;
    background-color: white;
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

export const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.9);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 20;
`;

export const ModalContainer = styled.div`
    margin: 10em auto;
    width: 40%;
`;
export const Close = styled.p`
    font-size: 1.8em;
    font-weight: bold;
    color: #D65D2D;
    position: absolute;
    top: 26%;
    left: 67%;

    &:hover{
        cursor: pointer;
    }
`;