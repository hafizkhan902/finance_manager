import { useState, useRef, useEffect } from 'react'
import './ChatBox.css'

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      text: 'Hello! I\'m your AI assistant. How can I help you with your finance management today?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: inputMessage,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        text: getAIResponse(inputMessage),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const getAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase()
    
    if (message.includes('pricing') || message.includes('cost') || message.includes('price')) {
      return 'Our pricing starts with a free plan for basic features, and our Pro plans are $9.99/month for personal finance and $29.99/month for commercial finance. Both Pro plans include advanced features like AI insights, unlimited accounts, and priority support.'
    }
    
    if (message.includes('feature') || message.includes('what can') || message.includes('capabilities')) {
      return 'Our platform offers comprehensive finance management including budgeting, expense tracking, investment analytics, invoice management, payroll, and AI-powered insights. You can switch between Personal and Commercial modes based on your needs.'
    }
    
    if (message.includes('security') || message.includes('safe') || message.includes('protect')) {
      return 'We use bank-level encryption and advanced security measures to protect your financial data. All data is encrypted in transit and at rest, and we offer multi-factor authentication and fraud detection.'
    }
    
    if (message.includes('support') || message.includes('help') || message.includes('contact')) {
      return 'I\'m here to help! You can also reach our support team via email at support@financepro.com or through our help center. Pro users get priority support with faster response times.'
    }
    
    if (message.includes('account') || message.includes('sign up') || message.includes('register')) {
      return 'You can create a free account by clicking the "Get Started" button in the navigation. It takes just a few minutes to set up, and you can upgrade to Pro anytime to unlock advanced features.'
    }
    
    if (message.includes('integration') || message.includes('bank') || message.includes('connect')) {
      return 'We support integration with over 50+ banks and financial institutions. You can connect your accounts securely using our bank-grade encryption. The setup process is quick and guided.'
    }
    
    return 'Thank you for your question! I\'m here to help with any questions about our finance management platform. You can ask me about features, pricing, security, or how to get started. Is there anything specific you\'d like to know?'
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <span className="chat-badge">AI</span>
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="chat-title">
            <div className="ai-avatar">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <h4>AI Assistant</h4>
              <p>Online now</p>
            </div>
          </div>
          <button 
            className="chat-close"
            onClick={() => setIsOpen(false)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}`}>
              <div className="message-content">
                <p>{message.text}</p>
                <span className="message-time">{formatTime(message.timestamp)}</span>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message ai">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input">
          <div className="input-container">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything about our finance platform..."
              className="message-input"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!inputMessage.trim()}
              className="send-button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatBox
