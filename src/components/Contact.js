import React from 'react'
import Button from '@mui/material/Button'
import Box from "@mui/material/Box";

export default function Contact() {
  return (
    <section style={{background: '#2D2F33', textAlign: 'center', marginTop: 100}}>
        <h1 id="contact"  className='mt-24' style={{ fontSize:25, display: 'inline-block'}}>Looking for new and exciting opportunties.</h1>
        <h1 style={{ fontSize:20, color:'rgba(255, 255, 255, 0.7)'}}>Look forward to hearing from you.</h1>
        <a href="mailto:aydee0112@yahoo.com"><Button style={{marginTop:15, marginBottom: 100}} variant='outlined'>Lets Connect</Button>
        </a>
    
    
    
    </section>
  )
}
