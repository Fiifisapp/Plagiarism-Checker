import React from "react";
import {
  CheckerContainer,
  HeaderText,
  TextArea,
  ButtonContainer,
  LocalButton,
  WebButton,
} from "./Checker.Style";

const Checker = () => {
  return (
    <>
      <HeaderText>Checker</HeaderText>
      <CheckerContainer className="checker-container">
        <TextArea
          placeholder="Please insert your text to check for plagiarism either against the web or the local corpus"
          name="text"
          id=""
          cols="30"
          rows="10"
        ></TextArea>
        <ButtonContainer className="button-container">
          <LocalButton>local check</LocalButton>
          <WebButton>web check</WebButton>
        </ButtonContainer>
      </CheckerContainer>
    </>
  );
};

export default Checker;
