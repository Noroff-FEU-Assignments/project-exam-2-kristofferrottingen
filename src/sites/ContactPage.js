import React from 'react'
import ContactForm from '../components/contactpage/ContactForm'
import ContactImg from '../images/kontakt-img.jpg'
import Header from "../components/text/Heading";


function ContactPage() {
  return (
    <div className='contact-page'>
        <div className='contact-page-image'>
            <img src={ContactImg} alt='kontakt oss bilde'></img>
        </div>
        <div className='contact-page-form'>
            <Header title="KONTAKT OSS" />
            <ContactForm />
        </div>
    </div>
  )
}

export default ContactPage