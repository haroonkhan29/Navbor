import React from 'react'
import Navbor from '../components/Navbor'

function Contact() {
  return (
    <div>
        <Navbor/>
        <h1>This is contact page</h1>
        <div>
            <input type="text" placeholder='Enter your name' />
            <input type="password" placeholder='Enter your password' />
        </div>
    </div>
  )
}

export default Contact