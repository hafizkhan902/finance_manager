import { useRef } from 'react'
import './LandingPage.css'
import FeaturesSection from './FeaturesSection'
import PricingSection from './PricingSection'
import SupportSection from './SupportSection'
import Footer from './Footer'

const LandingPage = ({ onSelectFinanceType }) => {
  const featuresRef = useRef(null)
  const pricingRef = useRef(null)
  const supportRef = useRef(null)
  const aboutRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      const elementPosition = ref.current.offsetTop
      const offsetPosition = elementPosition - 80 // Account for fixed nav height
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-icon">💰</span>
            <span className="logo-text">FinancePro</span>
          </div>
          <div className="nav-links">
            <button 
              className="nav-link" 
              onClick={() => scrollToSection(aboutRef)}
            >
              About Us
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection(featuresRef)}
            >
              Features
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection(pricingRef)}
            >
              Pricing
            </button>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection(supportRef)}
            >
              Support
            </button>
          </div>
          <button className="nav-cta">GET STARTED</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Left Content Section */}
          <div className="left-content">
            {/* Promotional Banner */}
            <div className="promo-banner">
              <span className="promo-text">BEST FINANCE MANAGEMENT TOOL THIS YEAR</span>
            </div>

            {/* Main Headline */}
            <h1 className="main-headline">
              Start managing your finances <span className="highlight">fee-free</span>
            </h1>

            {/* Description */}
            <p className="main-description">
              Take control of your financial future with our comprehensive platform. 
              Whether you're managing personal expenses or running a business, 
              we provide the tools you need to succeed financially.
            </p>


            {/* CTA Button */}
            <button className="main-cta">
              START FREE TRIAL
              <span className="cta-arrow">→</span>
            </button>
          </div>

          {/* Right Visual Section */}
          <div className="right-visual">
            {/* Main Visual */}
            <div className="main-visual">
              <div className="visual-person">
                <img 
                  src="/src/assets/images/wall.png" 
                  alt="Finance Professional" 
                  className="person-avatar"
                />
                <div className="person-card">💳</div>
              </div>
              <div className="geometric-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
            </div>

          </div>
        </div>
      </main>
      
      {/* Features Section */}
      <div ref={featuresRef}>
        <FeaturesSection />
      </div>
      
      {/* Pricing Section */}
      <div ref={pricingRef}>
        <PricingSection />
      </div>
      
      {/* Support Section */}
      <div ref={supportRef}>
        <SupportSection />
      </div>
      
      {/* Footer */}
      <div ref={aboutRef}>
        <Footer />
      </div>
    </div>
  )
}

export default LandingPage
