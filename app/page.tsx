'use client';

import React from 'react';
import styled from 'styled-components';

// Container with background and font settings
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: url('/images/galaxy-background.jpg') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  scroll-behavior: smooth;
`;

// Navbar with fixed position and subtle background
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4); // subtle shadow
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8); // Darken on hover
  }
`;

// Navbar brand
const NavbarBrand = styled.a`
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  text-decoration: none;
  letter-spacing: 2px;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }
`;

// Navbar links
const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;
`;

// Each Navbar link with hover effects
const NavbarLink = styled.a`
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #00bcd4;
  }
`;

// Hero Section with gradient overlay for readability
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  margin-top: 80px; // To offset the navbar
  padding: 20px;
  position: relative;
`;

// Gradient overlay to make text stand out
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;

// Title with bold and large font, hover effect
const Title = styled.h1`
  font-size: 120px;
  font-weight: 900;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  z-index: 2;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: #00bcd4; // Add color on hover
  }
`;

// Subtitle with increased line height for readability
const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 300;
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 40px;
  z-index: 2;
  opacity: 0.9; // Slightly less opacity for better contrast
`;

// CTA button for encouraging action
const CTAButton = styled.a`
  display: inline-block;
  background-color: #00bcd4;
  color: #fff;
  font-size: 18px;
  padding: 15px 30px;
  border-radius: 50px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 15px rgba(0, 188, 212, 0.5); // Subtle shadow to make the button pop

  &:hover {
    background-color: #0288d1;
    transform: scale(1.05);
    box-shadow: 0 12px 25px rgba(0, 188, 212, 0.7); // Bigger shadow on hover
  }
`;

// Footer section with minimal design
const Footer = styled.footer`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

// Footer Text styling
const FooterText = styled.p`
  font-size: 14px;
  color: #fff;
  font-weight: 300;
  opacity: 0.7; // Slightly faded footer text for a subtle effect
`;

// Landing page component
const LandingPage = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar>
        <NavbarBrand href="/">Neuva</NavbarBrand>
        <NavbarLinks>
          <NavbarLink href="#about">About</NavbarLink>
          <NavbarLink href="#services">Services</NavbarLink>
          <NavbarLink href="#contact">Contact</NavbarLink>
        </NavbarLinks>
      </Navbar>

      {/* Hero Section with Overlay */}
      <HeroSection>
        <Overlay />
        <Title>NEUVA</Title>
        <Subtitle>
          Crafting Stunning Websites. Elevating Your Brand to the Next Galaxy.
        </Subtitle>
        <CTAButton href="#contact">Get in Touch</CTAButton>
      </HeroSection>

      {/* Footer */}
      <Footer>
        <FooterText>© 2025 Neuva. All rights reserved.</FooterText>
      </Footer>
    </Container>
  );
};

export default LandingPage;

