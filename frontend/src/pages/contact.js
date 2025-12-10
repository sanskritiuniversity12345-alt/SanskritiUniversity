import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
  background-color: white;
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #1a237e;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 1.75rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #3949ab;
  border-bottom: 2px solid #3949ab;
  padding-bottom: 0.25rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 0.5rem;
`;

const LinkStyled = styled.a`
  color: #1e88e5;
  text-decoration: underline;
  &:hover {
    color: #1565c0;
  }
`;

const Address = styled.address`
  font-style: normal;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555;
`;


const Contact = () => {
  return (
    <Container>
      <Title>Contact Info</Title>
      <Address>
        28 K. M. Stone, Mathura - Delhi Highway, Chhata, Mathura Uttar Pradesh (U.P.) Pin - 281401
      </Address>

      <Section>
        <SectionTitle>For Admissions Enquiry</SectionTitle>
        <Paragraph>+91 7386812345</Paragraph>
        <Paragraph>
          <LinkStyled href="mailto:sanskritiuniversity12345@gmail.com">sanskritiuniversity12345@gmail.com</LinkStyled>
        </Paragraph>
      </Section>


      <Section>
        <SectionTitle>Grievance Redressal Portal</SectionTitle>
        <Paragraph>
          Students of the university and the teaching as well as non-teaching staff, including those belonging to the SC/ST/OBC category, can use this page to lodge complaints/grievances on this portal.
        </Paragraph>
      </Section>

      
    </Container>
  );
};

export default Contact;
