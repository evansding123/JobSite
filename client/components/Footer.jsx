import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const FooterBackground = styled.div`
  background-color: #192A34;
  width: 100%;
  height: 150px;
  margin-left: 2%;
`;

const StyledDiv = styled.div`
  font-family: Helvetica;
  font-size: 17px;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
  margin-right: -5%;
  padding-top: 2%;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1%;
  margin-left: 5%;
  padding-bottom: 2%;
`;

const Icon = styled.a`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  text-decoration: none;
  color: white;
  &:hover ${Icon} {
    color: #799469;
    border: none;
  }
`;

const FooterText = styled.div`
  display: flex;
  font-size: 11px;
  font-family: Helvetica;
  text-decoration: none;
  color: white;
  &:hover ${Icon} {
    color: #799469;
    border: none;
  }
  padding-left: 15%;
`;

const Footer = (props) => (
  <FooterBackground>
    <StyledDiv>
      Follow us
    </StyledDiv>
    <IconList>
      <Icon href="https://www.facebook.com/" target="_blank">
      <FacebookIcon />
      </Icon >
      <Icon href="https://www.twitter.com/" target="_blank">
      <TwitterIcon />
      </Icon>
      <Icon href="https://www.instagram.com/" target="_blank">
      <InstagramIcon />
      </Icon>
      <Icon href="https://www.youtube.com/" target="_blank">
      <YouTubeIcon />
      </Icon>
      <Icon href="https://www.linkedin.com/" target="_blank">
      <LinkedInIcon />
      </Icon>
      <Icon href="https://www.github.com/" target="_blank">
      <GitHubIcon />
      </Icon>
    </IconList>
    <br></br>
    <FooterText>
      © 2021 JobSite
      Do Not Sell My Personal Information
      Accessibility at Indeed
      Privacy Center
      Cookies
      Privacy
      Terms
    </FooterText>
  </FooterBackground>
)

export default Footer;