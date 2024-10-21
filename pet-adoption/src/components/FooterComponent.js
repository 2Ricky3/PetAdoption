import React from 'react';
import styled from 'styled-components';

const FooterComponent = () => {
  return (
    <FooterWrapper>
      <p>This is a demo website - Location: South Africa</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #343a40;
  color: #ffffff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 14px;
`;

export default FooterComponent;
