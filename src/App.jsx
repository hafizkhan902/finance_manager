import { useState } from 'react'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  const [user, setUser] = useState(null)

  const handleGetStarted = (userData) => {
    if (userData) {
      setUser(userData)
      // Here you would typically redirect to dashboard
      console.log('User logged in:', userData)
    }
  }

  return (
    <div className="App">
      <LandingPage onGetStarted={handleGetStarted} />
    </div>
  )
}

export default App
