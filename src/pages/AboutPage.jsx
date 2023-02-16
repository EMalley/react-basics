import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project:</h1>
        <p>This is a react app to leave feedback for a product</p>
      </div>
      <p>
        <Link to='/'>Back to Homepage</Link>
      </p>
    </Card>
  )
}

export default AboutPage
