import React from "react";
import APC from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
import Tile from "../../assets/title-card.png";
import book from "../../assets/fundamental 1.png";
import {
  LogoContainer,
  Logo,
  HeroSection,
  HeroAvatar,
  AvatarImage,
  HeroText,
  BoldText,
  Button,
  SourceSection,
  TitleTextContainer,
  SourceText,
  SourceImage,
  TileCard,
  BookContainer,
  BookImage,
} from "./LandingPage.Style";

const LandingPage = () => {
  return (
    <div>
      <LogoContainer className="logo-container">
        <Logo src={APC} alt="" />
      </LogoContainer>

      <HeroSection className="hero-section">
        <HeroAvatar className="avatar">
          <AvatarImage src={Avatar} alt="" />
        </HeroAvatar>

        <HeroText className="hero-text">
          If there is an issue with <BoldText>plagiarism</BoldText> , then we
          can <BoldText>pinpoint exactly </BoldText> who from and where from...
        </HeroText>

        <Button>let's find out</Button>
      </HeroSection>

      <SourceSection className="source-section">
        <TitleTextContainer className="title-text-container">
          <SourceText className="source-text">source</SourceText>
          <SourceImage className="source-image">
            <TileCard src={Tile} alt="" />
          </SourceImage>
        </TitleTextContainer>
        <BookContainer className="book-container">
          <BookImage src={book} alt="" />
        </BookContainer>
      </SourceSection>

      <div className="percentage-section">
        <div className="percentage-text-wrapper">
          <h1>
            Many <span>dislike literacy </span>, so they look for
            <span>shortcuts </span> and don't see anything wrong with
            <span>borrowing </span> someone <span>else's words </span> to
            express themselves.
          </h1>
        </div>
        <div className="card-container">
          <div className="image-text-container">
            <img src="" alt="" />
            <h3>Plagiarised Content</h3>
          </div>
          <div className="image-text-container">
            <img src="" alt="" />
            <h3>non-Plagiarised Content</h3>
          </div>
        </div>
      </div>

      <footer>
        <h3 className="footer-text">
          Used daily by individuals, teams, and companies of all sizes
        </h3>
        <div className="footer-image">
          <img src="" alt="" />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
