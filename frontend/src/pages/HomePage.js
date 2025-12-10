// src/pages/HomePage.js

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import SUReviews from './SUReviews';
import TopHighlights from '../components/sections/home/TopHighlights';
import LatestAnnouncements from '../components/sections/home/LatestAnnouncements';
import Collaborations from '../components/sections/home/Collaborations';
import EventsAndLife from '../components/sections/home/EventsAndLife';

// Import base components from App.js
import {
  Section,
  SectionTitle,
  HeroSlider,
  HeroSlide,
  StatNumber,
  StatText,
  RecruiterLogoSlide,
} from '../App';

const FlexSection = styled.section`
  display: flex;
  gap: 2rem;
  margin: 1rem 0;
  padding: 0px 90px;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 10px;
  }
`;

const FlexChild = styled.div`
  flex: 1;
`;

const MainWrapper = styled.div`
  background: #1a2c5a;
  min-height: 100vh;
  width: 100%;
  color: white;
`;

const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem;
  padding: 1rem 0;
`;

const StatsGridItem = styled.div`
  text-align: center;
  flex: 1;
  min-width: 200px;
`;

const FeatureCard = styled.div`
  position: relative;
  display: flex;
  width: 1400px;
  padding: 40px;
  height: 300px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const FeatureContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: white;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  button {
    background: #f7b500;
    color: #0a183d;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    margin-top: 1rem;
    cursor: pointer;
    font-weight: bold;
  }
`;

const Card = styled.div` background: linear-gradient(145deg,rgb(96, 133, 227), #0e1a3d); border-radius: 10px; padding: 25px 20px; text-align: center; border: 1px solid #2a3f7a; margin-bottom: 20px; `;
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  ${Card} {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HomePage = () => {
  const recruiterSliderSettings = { dots: false, infinite: true, speed: 500, slidesToShow: 3, slidesToScroll: 1, autoplay: true, arrows: true };
  const heroSliderSettings = {
    nav: true,
    arrows: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    infinite: true
  };

  return (
    <MainWrapper>
      <div>
        <HeroSlider style={{maxwidth:'100%',height:'100%',paddingTop:'1px'}} {...heroSliderSettings}>
          {/* Slide 1 */}
          <HeroSlide bg="/images/home1.webp">

          </HeroSlide>

          <HeroSlide bg="/images/sanskriti.webp">
          </HeroSlide>
        
          {/* Slide 2*/}
          <HeroSlide bg="/images/home2.webp">
          </HeroSlide>
            <HeroSlide bg="/images/home3.webp">
          </HeroSlide>
        </HeroSlider>

        <TopHighlights />

        <FlexSection>
          <FlexChild>
            <LatestAnnouncements />
          </FlexChild>
          <Section>
            <SectionTitle>OUR SUCCESS</SectionTitle>
            <StatsGrid >
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '40px',textAlign: 'center' , background: 'linear-gradient(135deg, #1a2c5a 50%, #0b1e4f 50%)',borderRadius: '15px', }}><StatNumber  style={{  color:'white' , fontSize:'35px', fontWeight:'lighter'}}>85%</StatNumber><StatText  style={{  color:'white'}}>Student Placed on highest package</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '40px',textAlign: 'center', borderRadius: '15px',background: '#1a2c5a'}}><StatNumber  style={{  color:'rgb(229, 207, 42)', fontSize:'35px', fontWeight:'lighter' }}>2500+</StatNumber><StatText  style={{  color:'white'}}>Research Papers</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '40px',textAlign: 'center',borderRadius: '15px', background: '#1a2c5a'}}><StatNumber  style={{  color:'rgb(229, 207, 42)', fontSize:'35px', fontWeight:'lighter'}}>6.20 Lakhs</StatNumber><StatText  style={{  color:'white'}}>Average Package offered by 200+ Companies</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '40px',textAlign: 'center' , borderRadius: '15px', background: 'linear-gradient(122deg, #1a2c5a 50%, #0b1e4f 50%)'}}><StatNumber  style={{  color:'white', fontSize:'35px', fontWeight:'lighter',marginTop:'35px'}}>2700+</StatNumber><StatText  style={{  color:'white'}}>Patents</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '40px',textAlign: 'center',borderRadius: '15px', background: 'linear-gradient(125deg, #1a2c5a 50%, #0b1e4f 50%)' }}><StatNumber  style={{  color:'white', fontSize:'35px', fontWeight:'lighter'}}>54 Lakhs</StatNumber><StatText  style={{  color:'white'}}>Highest Package</StatText></Card>
              <Card style={{ flex: 1 , border: '2px dotted #ccc', padding: '40px',textAlign: 'center',borderRadius: '15px' ,background: '#1a2c5a' }}><StatNumber style={{  color:'rgb(229, 207, 42)', fontSize:'35px', fontWeight:'lighter'}}>200+</StatNumber><StatText  style={{  color:'white'}}>Companies visited campus for Placement</StatText></Card>
            </StatsGrid>
          </Section>
        </FlexSection>



        <Section>
          <SectionTitle>OUR PLACEMENTS</SectionTitle>
          <Slider {...recruiterSliderSettings}>
            <RecruiterLogoSlide> <img src="/images/tcs.jpeg" alt="TCS" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="/images/vedantu.jpeg" alt="Vedantu" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="/images/byjus.jpeg" alt="Byjus" /></RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="/images/genpact.jpeg" alt="Genpact" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="/images/fedex.jpeg" alt="FedEX" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="/images/shreecement.jpeg" alt="Shree Cement" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/bajaj.jpeg" alt="Bajaj" /></RecruiterLogoSlide> 
            <RecruiterLogoSlide><img src="/images/godrej.jpeg" alt="Goorej" /></RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/jcb.jpeg" alt="JCB" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/maruthi.jpeg" alt="Maruthi Suzuki" /></RecruiterLogoSlide>
            <RecruiterLogoSlide> <img src="/images/Radisson.jpg" alt="Radisson" /></RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/tatasteel.jpeg" alt="Tata Steel" /></RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/paytm.jpeg" alt="Paytym" /></RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/hdfc.jpeg" alt="HDFC Bank" /> </RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/whitehat.jpeg" alt="Whitehat Jr" /></RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/lemeridian.jpeg" alt="Le Meridian" /></RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/larsen.jpeg" alt="Larsen and Toubro" /></RecruiterLogoSlide>
            <RecruiterLogoSlide><img src="/images/amazon.jpeg" alt="Amazon" /></RecruiterLogoSlide>
          </Slider>
        </Section>
        
        <Collaborations />
        
        <Section style={{ backgroundColor: '#f7f8faff', color: '#000000ff' }}>
          <SectionTitle style={{ backgroundColor: '#f7f8faff', color: '#000000ff' ,fontSize:'40px'}}>WHY CHOOSE SU?</SectionTitle>
           <p style={{textAlign: 'center', marginTop: '-15px', marginBottom: '20px', color: 'black'}}>Be a part of an Edifying learning experience which offers additional value to your future.</p>
          <FeatureCard bg="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop">
              <FeatureContent> <h3>Top Reasons To Join SU</h3> <p>Honored with many awards for high-quality education, infrastructure and research.</p> <button>VIEW MORE</button> </FeatureContent>
          </FeatureCard>
          <FeatureCard style={{margin: '20px 0'}} bg="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop">
              <FeatureContent> <h3>50+ International University</h3> <p>Tie-Ups For Student Exchange Programme.</p> <button>VIEW MORE</button> </FeatureContent>
          </FeatureCard>
          <FeatureCard bg="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop">
              <FeatureContent> <h3>Interactive Pedagogy</h3> <p>Project Based Learning Experience.</p> <button>VIEW MORE</button> </FeatureContent>
          </FeatureCard>
        </Section>
        
        <Section style={{backgroundColor: 'white', color: 'rgb(33, 55, 116)'}}>
          <SectionTitle
            style={{
              backgroundColor: 'white',
              color: 'rgb(33, 55, 116)',
              fontSize: '1.7rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700',
            }}
          >
            CUTTING EDGE RESEARCH
          </SectionTitle>

          <p
            style={{
              textAlign: 'center',
              marginTop: '-10px',
              marginBottom: '10px',
              color: 'rgb(33, 55, 116)',
              fontSize: '1.3rem',
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Leading the search for knowledge with our highly equipped research facilities.
          </p>

          <StatsContainer>
            <StatsGridItem>
              <StatNumber>2500+</StatNumber>
              <StatText>Research Papers</StatText>
            </StatsGridItem>
            <StatsGridItem>
              <StatNumber>2700+</StatNumber>
              <StatText>Patents</StatText>
            </StatsGridItem>
            <StatsGridItem>
              <StatNumber>30</StatNumber>
              <StatText>Grants Filed</StatText>
            </StatsGridItem>
            <StatsGridItem>
              <StatNumber>12 Million</StatNumber>
              <StatText>Research Articles</StatText>
            </StatsGridItem>
            <StatsGridItem>
              <StatNumber>5 Lakhs</StatNumber>
              <StatText>Thesis & Dissertation</StatText>
            </StatsGridItem>
          </StatsContainer>
        </Section>

        <EventsAndLife />

        <SUReviews />
      </div>
    </MainWrapper>
  );
};

export default HomePage;

       