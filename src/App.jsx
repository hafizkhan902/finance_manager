import { useState } from 'react'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  const [selectedFinanceType, setSelectedFinanceType] = useState(null)

  const handleFinanceTypeSelection = (type) => {
    setSelectedFinanceType(type)
    console.log(`Selected finance type: ${type}`)
    // TODO: Navigate to the appropriate finance management interface
  }

  // For now, always show the landing page
  // Later we'll add routing to show different interfaces based on selection
  return (
    <div className="App">
      <LandingPage onSelectFinanceType={handleFinanceTypeSelection} />
    </div>
  )
}

export default App
