import './FeatureCard.css'

const FeatureCard = ({ icon, title, description, stat, statLabel }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        {icon}
      </div>
      <div className="feature-content">
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
        <div className="feature-stat">
          <span className="stat-number">{stat}</span>
          <span className="stat-label">{statLabel}</span>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
