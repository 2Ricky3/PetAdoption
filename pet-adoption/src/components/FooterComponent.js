import React from 'react';
import styled from 'styled-components';

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <FooterText>This is a demo website - Location: South Africa</FooterText>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #222; /* Darker background to match neon theme */
  color: #ffffff;
  text-align: center;
  padding: 20px 0;
  width: 100%;
  font-size: 14px;
  box-shadow: 0px -2px 10px rgba(255, 255, 255, 0.1); /* Subtle top shadow for depth */
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    box-shadow: 0px -2px 20px rgba(255, 255, 255, 0.3); /* Slight neon glow on hover */
  }
`;

const FooterText = styled.p`
  color: #ffffff;
  text-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5); /* Subtle neon effect */
  font-weight: bold;
  margin: 0;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0px 0px 8px #ffffff, 0px 0px 16px #ffffff; /* Enhanced glow on hover */
  }
`;

export default FooterComponent;
