import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PortalDropdown from './components/PortalDropdown';
import Slider from 'react-slick';
import { FaWhatsapp } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PhotoGallery from './pages/photo';
import VideoGallery from './pages/video';

// Page and Component Imports
import HomePage from './pages/HomePage';
import ProgrammesPage from './pages/ProgrammesPage';
import GalleryPage from './pages/GalleryPage';
import NotFoundPage from './pages/NotFoundPage';
import ApplyNowModal from './components/ApplyNowModal';
import AdminLoginPage from './pages/AdminLoginpage';
import AdminApplicationsPage from './pages/AdminApplicationsPage';
import ProtectedRoute from './components/ProtectedRoute';
import University from  './pages/University';
import Vision from './pages/Vision';
import Rankings from './pages/Rankings';
import Technology from './pages/Technology';
import ContactUs from './pages/contact';
import ApplicationReceivedPage from './pages/ApplicationReceivedPage';
import Faculty from './pages/Faculty';
import Syllabus from './pages/Syllabus';
import AcademicCalender from './pages/Academic_Calender';
import ExaminationRules from './pages/Examination_Rules';
import AdmissionProcess from './pages/AdmissionProcess';
import AdmisssionAssistance from './pages/AdmisssionAssistance';
import Fees from './pages/fees';
import Rules from './pages/Rules';
import Environment from './pages/Environment';
import Sports from './pages/Sports';
import Cafeteria from './pages/Cafeteria';
import Medical from './pages/Medical';
import Hostel from './pages/Hostel';
import Library from './pages/Library';
import Theatre from './pages/Theatre';
// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- Styled Components ---

const AppContainer = styled.div`
  background-color: ${(props) => (props.isHome ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.5)')};
  overflow-x: hidden;
  position: relative;
`;

const AdminLink = styled(Link)`
  color: #f7b500;
  text-decoration: none;
  font-size: 14px;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4d;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background: #2a3f7a;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(100px);
  color: #0a183d;
  position: sticky;
  top: 0;
  z-index: 1002;
  border-bottom: 1px solid  rgba(0, 0,0, 0.5);
  transition: 0.2s ease;
`;


const LogoContainer = styled.div`
  img {
    height: 40px;
    margin-right: 10px;
  }
`;

const HeaderIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #0a183d;
`;

const ApplyNowButton = styled.button`
  background-color: #f7b500;
  color: #0a183d;
  font-weight: bold;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;


// Exported Styled Components
export const Section = styled.section`
  padding: 20px 15px;

`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
  font-weight: 600;
  color: white;
`;

export const HeroSlider = styled(Slider)`
  .slick-slide > div {
    position: relative;
    color: white;
  }
  .slick-dots {
    bottom: 25px;
  }
  .slick-dots li button:before {
    color: white;
    font-size: 10px;
  }
  .slick-dots li.slick-active button:before {
    color: #f7b500;
  }
  .slick-arrow {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    z-index: 1;
  }
  .slick-arrow:hover, .slick-arrow:focus {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .slick-prev {
    left: 10px;
  }
  .slick-next {
    right: 10px;
  }
`;

export const HeroSlide = styled.div`
  height: 700px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center;
  position: relative;

  @media (max-width: 1024px) {
    height: 520px;
    background-position: center top;
  }

  @media (max-width: 600px) {
    height: 360px;
    background-position: center top;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  bottom: 60px;
  left: 20px;
  max-width: 70%;
  color: white;

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin: 0 0 8px 0;
    line-height: 1.1;
  }

  p {
    font-size: 18px;
    font-weight: 700;
    color: #f7b500;
    margin: 0 0 8px 0;
  }

  span {
    background-color: #f7b500;
    color: #0a183d;
    padding: 6px 10px;
    font-weight: 700;
    border-radius: 4px;
    display: inline-block;
    margin-top: 6px;
  }

  @media (max-width: 1024px) {
    bottom: 40px;
    left: 18px;
    max-width: 80%;
    h1 { font-size: 26px; }
    p { font-size: 16px; }
  }

  @media (max-width: 600px) {
    position: relative;
    bottom: auto;
    left: auto;
    padding: 16px;
    background: linear-gradient(to top, rgba(0,0,0,0.45), transparent);
    max-width: 100%;
    margin-top: 12px;
    h1 { font-size: 20px; }
    p { font-size: 14px; }
    span { padding: 6px 8px; font-size: 13px; }
  }
`;

export const HighlightCard = styled.div`
  position: relative;
  img {
    width: 100%;
    border-radius: 8px;
  }
  p {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0,0,0,0.6);
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    white-space: nowrap;
  }
`;

export const Card = styled.div`
  background: linear-gradient(145deg, rgb(96, 133, 227), #0e1a3d);
  border-radius: 10px;
  padding: 25px 20px;
  text-align: center;
  border: 1px solid #2a3f7a;
  margin-bottom: 20px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  ${Card} {
    margin-bottom: 0;
  }
`;

export const StatNumber = styled.div`
  font-size: 37px;
  font-weight: bold;
  color: rgb(8, 135, 226);
  font-family: 'Poppins', sans-serif;
`;

export const StatText = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.4;
  color: rgb(3, 144, 245);
`;

export const RecruiterLogoSlide = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px 0;
  margin: 0 10px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  height: 40px;
  img {
    width: 100%;
    height: 240%;
    object-fit: contain;
    opacity: 1;
    transition: all 0.3s ease;
  }

`;


export const CollaborationButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  button {
    background: linear-gradient(145deg, #1a2c5a, #0e1a3d);
    color: white;
    border: 1px solid #2a3f7a;
    padding: 15px;
    border-radius: 8px;
    font-size: 16px;
    text-align: left;
    cursor: pointer;
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 40px 15px 100px 15px;
  background-color: #0a183d;
  img {
    height: 50px;
    margin-bottom: 20px;
  }
  p {
    margin: 5px 0;
    font-size: 14px;
    color: #ccc;
    line-height: 1.6;
    a {
      color: #f7b500;
      text-decoration: none;
    }
  }
`;

const FloatingButtons = styled.div`
  position: fixed;
  bottom: 80px;
  right: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 999;
`;
const FloatingButton = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${props => props.bg};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
`;


const SubHeader = styled.nav`
  background:  #2a3f7a;    /* translucent white */
  backdrop-filter: blur(10px);               /* frosted glass */
  -webkit-backdrop-filter: blur(10px);       /* Safari support */

  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding-left: 15px;
  border-bottom: 1px solid  rgba(0, 0,0, 0.5);
  position: relative;
  transition: 0.3s ease;

  @media (max-width: 768px) {
    justify-content: flex-start;

    overflow-x: auto;      /* scrollbar visible */
    overflow-y: visible;   /* dropdown visible */
    white-space: nowrap;

    gap: 12px;
    margin-left: 0;
    padding: 10px 6px;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.4);
      border-radius: 4px;
    }
  }
`;


const NavLinkContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  transition: all 3s ease;
`;

const NavLinkStyled = styled(NavLink)`
  color: #ccc;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 0;
  border-bottom: 2px solid transparent;
  transition: color 0.6s, border-color 0.6s;
  display: flex;
  align-items: center;
  gap: 6px;

  &.active, &:hover {
    color: white;
    border-bottom-color: #f7b500;
  }
`;

const DropdownArrow = styled.span`
  font-size: 12px;
  display: inline-block;
  transition: transform 0.6s ease;
`;





const DropdownLink = styled(Link)`
  display: block;
  padding: 0.8rem 1.5rem;
  color: #333;
  font-size: 14px;
  text-decoration: none;
  transition: all 2s ease;
  white-space: nowrap;

  &:hover {
    background: #f5f5f5;
    color: #f7b500;
  }
`;


// Dropdown wrapper components using PortalDropdown
function AboutDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);

  const openMenu = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setIsOpen(true);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setIsOpen(false), 200);
  };
  const cancelClose = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };

  return (
    <NavLinkContainer ref={ref} onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <NavLinkStyled onClick={() => setIsOpen(s => !s)}>
        About <DropdownArrow>▼</DropdownArrow>
      </NavLinkStyled>
      <PortalDropdown anchorRef={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} onMenuEnter={cancelClose} onMenuLeave={scheduleClose}>
        <DropdownLink to="/about/University" onClick={() => setIsOpen(false)}>The University</DropdownLink>
        <DropdownLink to="/about/Vision" onClick={() => setIsOpen(false)}>Vision & Mission</DropdownLink>
        <DropdownLink to="/about/Rankings" onClick={() => setIsOpen(false)}>Rankings & Awards</DropdownLink>
        <DropdownLink to="/about/Technology" onClick={() => setIsOpen(false)}>Technologically Ahead</DropdownLink>
      </PortalDropdown>
    </NavLinkContainer>
  );
}

function AcademicsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);
  const openMenu = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } setIsOpen(true); };
  const scheduleClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setIsOpen(false), 200); };
  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };

  return (
    <NavLinkContainer ref={ref} onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <NavLinkStyled onClick={() => setIsOpen(s => !s)}>
        Academics <DropdownArrow>▼</DropdownArrow>
      </NavLinkStyled>
      <PortalDropdown anchorRef={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} onMenuEnter={cancelClose} onMenuLeave={scheduleClose}>
        <DropdownLink to="/academics/Faculty" onClick={() => setIsOpen(false)}>Faculty</DropdownLink>
        <DropdownLink to="/academics/Syllabus" onClick={() => setIsOpen(false)}>Syllabus</DropdownLink>
        <DropdownLink to="/academics/Academic_Calender" onClick={() => setIsOpen(false)}>Academic Calender</DropdownLink>
        <DropdownLink to="/academics/Examination_Rules" onClick={() => setIsOpen(false)}>Examination Rules</DropdownLink>
      </PortalDropdown>
    </NavLinkContainer>
  );
}

function AdmissionsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);
  const openMenu = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } setIsOpen(true); };
  const scheduleClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setIsOpen(false), 200); };
  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };

  return (
    <NavLinkContainer ref={ref} onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <NavLinkStyled onClick={() => setIsOpen(s => !s)}>
        Admissions <DropdownArrow>▼</DropdownArrow>
      </NavLinkStyled>
      <PortalDropdown anchorRef={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} onMenuEnter={cancelClose} onMenuLeave={scheduleClose}>
        <DropdownLink to="/admissions/AdmissionProcess" onClick={() => setIsOpen(false)}>Admission Process</DropdownLink>
        <DropdownLink to="/programmes" onClick={() => setIsOpen(false)}>Programs Offered</DropdownLink>
        <DropdownLink to="/admissions/fees" onClick={() => setIsOpen(false)}>Fees Structure</DropdownLink>
        <DropdownLink to="/admissions/AdmissionAssistance" onClick={() => setIsOpen(false)}>Admission Assistance</DropdownLink>
        <DropdownLink to="/admissions/Rules" onClick={() => setIsOpen(false)}>Rules</DropdownLink>
      </PortalDropdown>
    </NavLinkContainer>
  );
}

function InfrastructureDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);
  const openMenu = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } setIsOpen(true); };
  const scheduleClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setIsOpen(false), 200); };
  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };

  return (
    <NavLinkContainer ref={ref} onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <NavLinkStyled onClick={() => setIsOpen(s => !s)}>
        Infrastructure <DropdownArrow>▼</DropdownArrow>
      </NavLinkStyled>
      <PortalDropdown anchorRef={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} onMenuEnter={cancelClose} onMenuLeave={scheduleClose}>
        <DropdownLink to="/infrastructure/Environment" onClick={() => setIsOpen(false)}>Campus Environment</DropdownLink>
        <DropdownLink to="/infrastructure/Library" onClick={() => setIsOpen(false)}>Library</DropdownLink>
        <DropdownLink to="/infrastructure/Sports" onClick={() => setIsOpen(false)}>Sports</DropdownLink>
        <DropdownLink to="/infrastructure/Cafeteria" onClick={() => setIsOpen(false)}>Cafeteria</DropdownLink>
        <DropdownLink to="/infrastructure/Medical" onClick={() => setIsOpen(false)}>Medical Facilities</DropdownLink>
        <DropdownLink to="/infrastructure/Theatre" onClick={() => setIsOpen(false)}>Theatre</DropdownLink>
        <DropdownLink to="/infrastructure/Hostel" onClick={() => setIsOpen(false)}>Hostel Facilities</DropdownLink>
      </PortalDropdown>
    </NavLinkContainer>
  );
}

function GalleryDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const closeTimer = useRef(null);
  const openMenu = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } setIsOpen(true); };
  const scheduleClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); closeTimer.current = setTimeout(() => setIsOpen(false), 200); };
  const cancelClose = () => { if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; } };

  return (
    <NavLinkContainer ref={ref} onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
      <NavLinkStyled onClick={() => setIsOpen(s => !s)}>
        Gallery <DropdownArrow>▼</DropdownArrow>
      </NavLinkStyled>
      <PortalDropdown anchorRef={ref} isOpen={isOpen} onClose={() => setIsOpen(false)} onMenuEnter={cancelClose} onMenuLeave={scheduleClose}>
        <DropdownLink to="/GalleryPage/photo" onClick={() => setIsOpen(false)}>Photo</DropdownLink>
        <DropdownLink to="/GalleryPage/video" onClick={() => setIsOpen(false)}>Video</DropdownLink>
      </PortalDropdown>
    </NavLinkContainer>
  );
}

const AppContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    setIsAdminLoggedIn(!!token);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setIsAdminLoggedIn(false);
    navigate('/');
  };
  
  const onAdminPage = location.pathname.startsWith('/admin');

  return (
    <>
      {isModalOpen && (
        <ApplyNowModal 
          closeModal={() => {
            setIsModalOpen(false);
            console.log('Modal closed');
          }} 
        />
      )}
      <AppContainer isHome={location.pathname === "/"}>
        <Header isHome={location.pathname === "/"}>

          <LogoContainer>
            <Link to="/">
              <img src="https://www.sanskriti.edu.in/images/logo.png" alt="Sanskriti University Logo" />
            </Link>
          </LogoContainer>
          <HeaderIcons>
            {isAdminLoggedIn && onAdminPage ? (
              <>
                <AdminLink to="/admin/applications">Dashboard</AdminLink>
                <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
              </>
            ) : (
              <>
                <AdminLink style= {{fontSize:'20px' ,fontWeight:'bold'
                }} to="/admin/login">Admin</AdminLink>

              </>
            )}
          </HeaderIcons>
        </Header>
        
        <SubHeader isHome={location.pathname === "/"}>
          <NavLinkContainer>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavLinkContainer>
          <AboutDropdown />
          <AcademicsDropdown />
          <AdmissionsDropdown />
          <NavLinkContainer>
            <NavLinkStyled to="/programmes">Programmes</NavLinkStyled>
          </NavLinkContainer>
          <InfrastructureDropdown />
          <NavLinkContainer>
            <NavLinkStyled to="/contact-us">Contact</NavLinkStyled>
          </NavLinkContainer>
          <GalleryDropdown />
        </SubHeader>


        <div onClick={() => setIsModalOpen(true)} style={{ position: 'fixed', top: '660px', right: '15px', zIndex: 99, cursor: 'pointer' }}>
           <ApplyNowButton>APPLY NOW</ApplyNowButton>
        </div>
        
        <main>
          <Routes>
          {/* All existing public and admin routes */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Us Routes */}
          <Route path="/about/University" element={<University />} />
          <Route path="/about/Vision" element={<Vision />} /> 
          <Route path="/about/Technology" element={<Technology />} />
          <Route path="/about/Rankings" element={<Rankings />} />
          
          <Route path="/academics/Faculty" element={<Faculty />} />
          <Route path="/academics/Syllabus" element={<Syllabus />} /> 
          <Route path="/academics/Academic_Calender" element={<AcademicCalender />} />
          <Route path="/academics/Examination_Rules" element={<ExaminationRules />} />

          {/* Main Navigation Routes */}
          <Route path="/programmes" element={<ProgrammesPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/admissions/AdmissionProcess" element={<AdmissionProcess openApplyModal={() => setIsModalOpen(true)} />} />
          <Route path="/admissions/AdmissionAssistance" element={<AdmisssionAssistance />} />
          <Route path="/admissions/fees" element={<Fees />}/>
          <Route path="/admissions/Rules" element={<Rules />} />
          <Route path="/infrastructure/Environment" element={<Environment />} />
          <Route path="/infrastructure/Sports" element={<Sports />} />
          <Route path="/infrastructure/Cafeteria" element={<Cafeteria />} />
          <Route path="/infrastructure/Medical" element={<Medical />} />
          <Route path="/infrastructure/Hostel" element={<Hostel />} />
          <Route path="/infrastructure/Library" element={<Library />} />
          <Route path="/infrastructure/Theatre" element={<Theatre />} />
          <Route path="/GalleryPage/photo" element={<PhotoGallery />} />
          <Route path="/GalleryPage/video" element={<VideoGallery />} />
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage setAdminLoggedIn={setIsAdminLoggedIn} />} />
          <Route path="/admin/applications" element={<ProtectedRoute><AdminApplicationsPage /></ProtectedRoute>} />
          <Route path="/application-received" element={<ApplicationReceivedPage />} />
          
          {/* 404 Route */} 
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer>
            <SectionTitle>ONLINE FEE PAYMENT</SectionTitle>
            <img src="https://www.sanskriti.edu.in/images/logo.png" alt="Sanskriti University Logo" />
            <p>28 K. M. Stone, Mathura - Delhi Highway, Chhata, Mathura (U.P.), (INDIA)</p>
            <p>Contact No: <a href="tel:+91 73868 12345">+91 73868 12345</a></p>
            <p>Email ID: <a href="mailto:sanskritiuniversity12345@gmail.com">sanskritiuniversity12345@gmail.com</a></p>
        </Footer>
<FloatingButtons>
            <FloatingButton href="https://wa.me/917386812345" target="_blank" bg="#25D366"> <FaWhatsapp /> </FloatingButton>
        </FloatingButtons>
      </AppContainer>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
      <ToastContainer position="top-right" autoClose={5000} />
    </Router>
  );
}

export default App;