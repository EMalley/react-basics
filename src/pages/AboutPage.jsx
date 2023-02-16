import React from 'react'
import Card from '../components/shared/Card'

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About this Project:</h1>
        <p>This is a react app to leave feedback for a product</p>
      </div>
      <p>
        <a href='/'>Back to Homepage</a>
      </p>
    </Card>
  )
}

export default AboutPage
