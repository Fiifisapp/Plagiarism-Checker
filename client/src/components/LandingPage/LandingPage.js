import React from "react";
import APC from "../../assets/logo.png";
import Avatar from "../../assets/People search-bro.png";
import { useNavigate } from "react-router-dom";
import {
  LogoContainer,
  Logo,
  HeroSection,
  HeroAvatar,
  AvatarImage,
  HeroText,
  BoldText,
  Button
} from "./LandingPage.Style";

const LandingPage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/login")
  }
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

        <Button onClick={handleLogin}>let's find out</Button>
      </HeroSection>

    </div>
  );
};

export default LandingPage;
