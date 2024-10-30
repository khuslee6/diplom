import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import TundraImage from './image/Tundra.gif'; 
import Image2 from './image/beta.png'; 
import Login from './Login';

function App() {
  const imageSectionRef = useRef(null);

  return (
    <Router>
      <div className="App">
        <Header scrollToImageSection={() => imageSectionRef.current.scrollIntoView({ behavior: 'smooth' })} />
        
        <Routes>
          <Route path="/" element={<MainPage imageSectionRef={imageSectionRef} />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

const Header = ({ scrollToImageSection }) => (
  <header className="header">
    <div className="logo">
      <span className="star" aria-label="Star">★</span> Tundra
    </div>
    <div className="button-group">
      <Link to="/login">
        <button className="login-button" aria-label="Login">Login</button>
      </Link>
      <button className="business-button" onClick={scrollToImageSection} aria-label="Scroll to Business Section">
        For businesses
      </button>
    </div>
  </header>
);


const MainPage = ({ imageSectionRef }) => (
  <>
    <MainContent imageSectionRef={imageSectionRef} />
    <OurIdeaSection />
    <ProductMenu imageSectionRef={imageSectionRef} />
    <TicketSection />  {/* Add TicketSection here */}
    <Ask />
    <Review />
  </>
);


const MainContent = ({ imageSectionRef }) => (
  <div className="main-content">
    <div className="review">
      {/* Add review content here if necessary */}
    </div>
    <div className="image-section1" ref={imageSectionRef}>
      <img src={TundraImage} alt="Customer Support Illustration" />
    </div>
  </div>
);



const ProductMenu = ({ imageSectionRef }) => (
  <div className="product-section">
    <div className="product-icon" aria-label="Product Menu Icon">🛒</div>
    <h2>Бүтээгдэхүүний цэс</h2>
    <div className="ticket-board">
      <div className="ticket-card">
        <div className="content">
          <h2 className="title">1</h2>
          <p className="description">1</p>
        </div>
      </div>
      <div className="ticket-card">
        <div className="content">
          <h2 className="title">2</h2>
          <p className="description"> 2.</p>
        </div>
      </div>
      <div className="ticket-card">
        <div className="content">
          <h2 className="title"> 3</h2>
          <p className="description">3.</p>
        </div>
      </div>
      <div className="ticket-card">
        <div className="content">
          <h2 className="title"> 4</h2>
          <p className="description"> 4.</p>
        </div>
      </div>
    </div>
    <p>Эрэлттэй бараанууд.</p>
  </div>
);

const TicketSection = () => (
  <div className="ticket-container">
  </div>
);


const Ask = () => (
  <div className="ask-section">
    <h2 className="faq-title">Frequently Asked Questions</h2>
    <div className="faq-container">
      <div className="faq-card">
        <h3>What is the purpose of the product menu?</h3>
        <p>
          The product menu is designed to help users easily navigate and find
          specific products to read reviews about, ensuring a seamless user experience.
        </p>
      </div>
      <div className="faq-card">
        <h3>How are products categorized?</h3>
        <p>
          Products are categorized into main groups such as Electronics, Home Appliances, 
          and Fashion, with subcategories for more specific organization (e.g., smartphones, laptops, clothing).
        </p>
      </div>
      <div className="faq-card">
        <h3>How often are reviews updated?</h3>
        <p>
          Reviews are updated in real-time as users submit new feedback, ensuring that 
          the information is current and relevant.
        </p>
      </div>
    </div>
  </div>
);

const Review = ({ imageSectionRef }) => (
  <div className="review-section">
    <h2>Beta Test Reviews</h2>
    <div className="review-grid">
      <div className="review-card">
        <div className="reviewer-img" ref={imageSectionRef}>
          <img src={Image2} alt="Reviewer" className="review-image" />
        </div>
      </div>
    </div>
  </div>
);
const InfoSection = ({ icon, title, description }) => (
  <div className="our-idea-section">
    <div className="light-bulb-icon" aria-label="Idea Icon">{icon}</div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const OurIdeaSection = () => (
  <InfoSection
    icon="💡"
    title="Бидний санаа"
    description="Манай багын санаа бол хүмүүсийн цаг завыг хэмнэж хоол хүнс, хувцас, цахилгаан хэрэгсэл бидний өдөр тутамдаа хэрэглэдэг эд зүйл зэргийг найдвартай сэтгэл ханамжтай байдлаар сонгоход туслах апп төдийгүй бараагаа борлуулж буй борлуулагч нарт бараагаа борлуулахад туслалцаа үзүүлж хэрэглэгчийг татах юм."
  />
);

export default App;
