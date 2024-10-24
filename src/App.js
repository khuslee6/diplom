import React, { useRef } from 'react';
import './App.css';
import TundraImage from './image/Tundra.gif'; 
import Image from './image/image2.gif'; 

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <OurIdeaSection />
      <ProductMenu />
      <Ask />
      <Review />
    </div>
  );
}

const Header = () => {
  const imageSectionRef = useRef(null);

  const scrollToImageSection = () => {
    if (imageSectionRef.current) {
      imageSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <span className="star">★</span> Tundra
      </div>
      <button className="business-button" onClick={scrollToImageSection}>
        For businesses
      </button>
    </header>
  );
};

const MainContent = () => {
  const imageSectionRef = useRef(null);

  return (
    <div className="main-content">
      <div className="review">
        <div className="stars">★★★★★</div>
        <h3>Start your review</h3>
        <button className="login-button">Login</button>
      </div>
      <div className="image-section" ref={imageSectionRef}>
        <img src={TundraImage} alt="Customer Support Illustration" />
      </div>
    </div>
  );
};

// Reusable Section Component for similar layouts
const InfoSection = ({ icon, title, description }) => {
  return (
    <div className="our-idea-section">
      <div className="light-bulb-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

const OurIdeaSection = () => {
  return (
    <InfoSection
      icon="💡"
      title="Бидний санаа"
      description="Манай багын санаа бол хүмүүсийн цаг завыг хэмнэж хоол хүнс, хувцас, цахилгаан хэрэгсэл зэргийг найдвартай сэтгэл ханамжтай байдлаар сонгоход туслах апп болон юм."
    />
  );
};

const ProductMenu = () => {
  const imageSectionRef = useRef(null);
  return (
    <div className="product-section">
      <div className="image-section" ref={imageSectionRef}>
        <img src={Image} alt="Customer Support Illustration" />
      </div>
      <div className="product-icon">🛒</div> {/* Changed icon */}
      <h2>Бүтээгдэхүүний цэс</h2>
      <p>Энд та хамгийн хэрэгцээтэй бүтээгдэхүүнүүдийг нэг дороос харах боломжтой.</p>
    </div>
  );
};

const Ask = () => {
  return (
    <div className="ask-section">
      <div className="ask-icon">❓</div> {/* Changed icon */}
      <h2>Асуулт</h2>
      <p>Бид таны асуултанд үргэлж хариулахад бэлэн байна.</p>
    </div>
  );
};

const Review = () => {
  return (
    <div className="review-section">
      <div className="review-icon">📝</div> {/* Changed icon */}
      <h2>Сэтгэгдэл</h2>
      <p>Манай хэрэглэгчдийн сэтгэгдэлд үндэслэн үйлчилгээний чанараа улам сайжруулдаг.</p>
    </div>
  );
};

export default App;
