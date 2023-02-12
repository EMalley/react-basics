import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item, handleDelete }) {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('This is an example')

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='white' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

Card.PropTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
