import React from 'react'
import FeedbackItem from './FeedbackItem'
import PropTypes from 'prop-types'

function Feedbacklist({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback yet</p>
  }

  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

Feedbacklist.propTypes = {
  feedback: PropTypes.array,
}

export default Feedbacklist
