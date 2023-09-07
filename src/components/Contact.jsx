import React from 'react'
import Button from '@mui/material/Button'
import TelegramIcon from '@mui/icons-material/Telegram'

const Contact = () => {
  return (
    <div className="dfjc">
      <div>
        <div className="dfjc">
          <TelegramIcon style={{ fontSize: '70px' }} />
        </div>

        <div className="dfjc m-1">GET IN TOUCH</div>

        <div className="dfjc m-4 text-white-50">
          Whether you have an idea for a project or just want to chat, feel free
          to shoot me an email!
        </div>

        <div className="dfjc m-4">


<div className="contactFormButton">
  <a href="mailto:potlasaiprasad9@example.com" style={{textDecoration:"none"}}>
    
    <button >Send Mail</button>
     
    </a>



</div>

        </div>


      </div>
    </div>
  )
}

export default Contact
