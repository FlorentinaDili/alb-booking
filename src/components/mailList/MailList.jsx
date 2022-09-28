import React from 'react'
import mailList from './mailList.css'

function MailList() {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save money</h1>
        <span className="mailDesc">Sign up and we will send the best details.</span>
        <div className="mailInputContainer">
            <input type="text" className="text" placeholder='Enter your email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList