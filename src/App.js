import React, { useRef } from 'react';
import './App.css';
import TundraImage from './image/Tundra.gif'; 
import Image from './image/image2.gif'; 
import Image2 from './image/beta.png'; 

function App() {
  const imageSectionRef = useRef(null);

  return (
    <div className="App">
      <Header scrollToImageSection={() => imageSectionRef.current.scrollIntoView({ behavior: 'smooth' })} />
      <MainContent imageSectionRef={imageSectionRef} />
      <OurIdeaSection />
      <ProductMenu imageSectionRef={imageSectionRef} />
      <Ask />
      <Review />
    </div>
  );
}

const Header = ({ scrollToImageSection }) => (
  <header className="header">
    <div className="logo">
      <span className="star" aria-label="Star">★</span> Tundra
    </div>
    <button className="business-button" onClick={scrollToImageSection} aria-label="Scroll to Business Section">
      For businesses
    </button>
  </header>
);

const MainContent = ({ imageSectionRef }) => (
  <div className="main-content">
    <div className="review">
      <div className="stars" aria-label="Five Star Review">★★★★★</div>
      <h3>Start your review</h3>
      <button className="login-button" aria-label="Login">Login</button>
    </div>
    <div className="image-section" ref={imageSectionRef}>
      <img src={TundraImage} alt="Customer Support Illustration" />
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
    description="Манай багын санаа бол хүмүүсийн цаг завыг хэмнэж хоол хүнс, хувцас, цахилгаан хэрэгсэл зэргийг найдвартай сэтгэл ханамжтай байдлаар сонгоход туслах апп болон юм."
  />
);

const ProductMenu = ({ imageSectionRef }) => (
  <div className="product-section">
    <div className="product-icon" aria-label="Product Menu Icon">🛒</div>
    <h2>Бүтээгдэхүүний цэс</h2>
    <div className="image-section" ref={imageSectionRef}>
      <img src={Image} alt="Product Menu Illustration" />
    </div>
    <p>Энд та хамгийн хэрэгцээтэй бүтээгдэхүүнүүдийг нэг дороос харах боломжтой.</p>
  </div>
);

const Ask = () => {
  return (
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
};

const Review = ({ imageSectionRef }) => {
  return (
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
};


export default App;
