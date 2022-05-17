import React from "react";
import {
  ImageWrapper,
  SourceImg,
  SourceTextWrapper,
  QuoteWrapper,
  SourceText,
  Quote,
  OrangeText,
  SourceHighlight,
  Button
} from "./LandingPage.Style";
import Source from "../../assets/source1.png";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate()

  return (
    <div>
      <ImageWrapper className="source-image">
        <SourceImg src={Source} alt="source Image" />
      </ImageWrapper>

      <SourceTextWrapper className="source-text-wrapper">
        <QuoteWrapper className="quote-wrapper">
          <Quote>"</Quote>
        </QuoteWrapper>
        <SourceText className="source-text">
          <OrangeText>
            If there is an issue with <SourceHighlight>plagiarism</SourceHighlight>, then we can{" "}
            <SourceHighlight> pinpoint exactly</SourceHighlight>
            who from and where from...
          </OrangeText>
          <Button onClick={() => {
              navigate('/login')
          }}>Let's find out</Button>
        </SourceText>
      </SourceTextWrapper>
    </div>
  );
};

export default LandingPage;
