import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Feedbacklist from './components/Feedbacklist'
import feedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

function App() {
  const [feedback, setFeedback] = useState(feedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <Feedbacklist feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
