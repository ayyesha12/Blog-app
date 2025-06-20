import React from 'react';
import { Box, Typography, styled } from '@mui/material';

const FooterContainer = styled(Box)`
  position: static;
  bottom: 0;
  width: 100%;
  background-color: #1976d2; /* primary.main */
  color: white;
  text-align: center;
  padding: 16px 0;
  margin-top: 40px;
`;

const FooterText = styled(Typography)`
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
`;

const Footer = () => {
  return (
    <FooterContainer component="footer">
      <FooterText variant="body2">
        © {new Date().getFullYear()} My Blog App. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
