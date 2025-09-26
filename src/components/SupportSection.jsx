import './SupportSection.css'
import ChatBox from './ChatBox'

const SupportSection = () => {
  return (
    <section className="support-section">
      <div className="support-container">
        <div className="support-header">
          <h2 className="support-title">Need Help? We're Here for You</h2>
          <p className="support-subtitle">
            Get instant answers from our AI assistant or reach out to our support team
          </p>
        </div>

        <div className="support-content">
          <div className="support-options">
            <div className="support-card">
              <div className="support-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>AI Assistant</h3>
              <p>Get instant answers to common questions about features, pricing, and getting started.</p>
              <div className="support-features">
                <span>24/7 Available</span>
                <span>Instant Responses</span>
                <span>Smart Recommendations</span>
              </div>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Email Support</h3>
              <p>Send us a detailed message and we'll get back to you within 24 hours.</p>
              <div className="support-features">
                <span>Detailed Responses</span>
                <span>24h Response Time</span>
                <span>Technical Support</span>
              </div>
            </div>

            <div className="support-card">
              <div className="support-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Help Center</h3>
              <p>Browse our comprehensive knowledge base with guides, tutorials, and FAQs.</p>
              <div className="support-features">
                <span>Step-by-step Guides</span>
                <span>Video Tutorials</span>
                <span>Best Practices</span>
              </div>
            </div>
          </div>

          <div className="support-cta">
            <h3>Ready to Get Started?</h3>
            <p>Join thousands of users who trust FinancePro for their financial management needs.</p>
            <div className="cta-buttons">
              <button className="cta-button primary">Start Free Trial</button>
              <button className="cta-button secondary">Contact Sales</button>
            </div>
          </div>
        </div>
      </div>

      {/* AI Chat Box */}
      <ChatBox />
    </section>
  )
}

export default SupportSection
