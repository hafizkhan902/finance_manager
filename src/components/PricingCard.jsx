import './PricingCard.css'

const PricingCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false, 
  buttonText = "Get Started",
  buttonVariant = "primary"
}) => {
  return (
    <div className={`pricing-card ${isPopular ? 'popular' : ''}`}>
      {isPopular && <div className="popular-badge">Most Popular</div>}
      
      <div className="pricing-header">
        <h3 className="pricing-title">{title}</h3>
        <div className="pricing-price">
          <span className="price-amount">{price}</span>
          <span className="price-period">{period}</span>
        </div>
        <p className="pricing-description">{description}</p>
      </div>

      <div className="pricing-features">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <div className="feature-check">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="feature-text">{feature}</span>
          </div>
        ))}
      </div>

      <div className="pricing-footer">
        <button className={`pricing-button ${buttonVariant}`}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default PricingCard
