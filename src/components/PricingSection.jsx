import { useState } from 'react'
import PricingCard from './PricingCard'
import './PricingSection.css'

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('personal')

  const personalPricing = [
    {
      title: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for individuals getting started with personal finance management",
      features: [
        "Basic dashboard with visual metrics",
        "Manual income & expense tracking",
        "Simple budgeting tools",
        "Basic financial reports",
        "Mobile app access",
        "Email support",
        "Up to 2 bank accounts",
        "Basic security features"
      ],
      buttonText: "Start Free",
      buttonVariant: "secondary"
    },
    {
      title: "Pro",
      price: "$9.99",
      period: "/month",
      description: "Advanced features for serious personal finance management",
      features: [
        "Advanced dashboard with AI insights",
        "Automatic bank integration",
        "Smart budgeting with AI recommendations",
        "Comprehensive financial reports",
        "Investment tracking & analytics",
        "Priority support",
        "Unlimited bank accounts",
        "Advanced security & fraud detection",
        "Multi-currency support",
        "Export to tax software",
        "Goal tracking & alerts",
        "Receipt scanning with OCR"
      ],
      isPopular: true,
      buttonText: "Go Pro",
      buttonVariant: "primary"
    }
  ]

  const commercialPricing = [
    {
      title: "Free",
      price: "$0",
      period: "/month",
      description: "Essential business finance tools for small businesses",
      features: [
        "Basic business dashboard",
        "Simple invoice creation",
        "Basic expense tracking",
        "Employee management (up to 5)",
        "Basic financial reports",
        "Email support",
        "Up to 3 bank accounts",
        "Basic security features"
      ],
      buttonText: "Start Free",
      buttonVariant: "secondary"
    },
    {
      title: "Pro",
      price: "$29.99",
      period: "/month",
      description: "Complete business finance solution for growing companies",
      features: [
        "Advanced business dashboard",
        "Professional invoice management",
        "Automated expense approval workflow",
        "Comprehensive payroll system",
        "P&L & financial statements",
        "Priority support",
        "Unlimited bank accounts",
        "Advanced security & compliance",
        "Multi-currency support",
        "Tax integration & reporting",
        "Vendor & customer management",
        "Advanced analytics & insights",
        "Team collaboration tools",
        "API access"
      ],
      isPopular: true,
      buttonText: "Go Pro",
      buttonVariant: "primary"
    }
  ]

  const currentPricing = activeTab === 'personal' ? personalPricing : commercialPricing

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-subtitle">
            Choose the perfect plan for your financial needs. No hidden fees, no surprises.
          </p>
          
          {/* Tab Navigation */}
          <div className="pricing-tabs">
            <button 
              className={`tab-button ${activeTab === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveTab('personal')}
            >
              Personal Finance
            </button>
            <button 
              className={`tab-button ${activeTab === 'commercial' ? 'active' : ''}`}
              onClick={() => setActiveTab('commercial')}
            >
              Commercial Finance
            </button>
          </div>
        </div>
        
        <div className="pricing-grid">
          {currentPricing.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
              buttonVariant={plan.buttonVariant}
            />
          ))}
        </div>

        <div className="pricing-footer">
          <p className="pricing-note">
            All plans include 30-day money-back guarantee. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
