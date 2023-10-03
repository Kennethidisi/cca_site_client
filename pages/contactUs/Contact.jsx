import React from 'react'
import "./contact.css"
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

import send from '../../images/send.png'
import phone from '../../images/phone.png'
import location from '../../images/location.png'

export default function Contact() {
  return (
    <div className='contactContainer'>
      <Header/>

      <section className="contactBanner">
            <h1>Contact <span>Us</span></h1>
      </section>

      <div className='contact_wrapper'>
         <div className="contact_info_div">
           <h2 className='contact_info_title'>Contact Info</h2>

           <div className="contact_info">
              <div className='contact_info_item'>
                  <span><img src={location} alt="" /></span>

                  <div className="contactInfo_details">
                    <h5>Address:</h5>
                    <p>30, musilicil creasdc, Lorem ipsum dolor sit, amet consectetur</p>
                  </div>
              </div>

              <div className='contact_info_item'>
                  <span><img src={phone} alt="" /></span>

                  <div className="contactInfo_details">
                    <h5>Phone:</h5>
                    <p>+234 903 7918 492</p>
                  </div>
             </div>

             <div className='contact_info_item'>
                <span><img src={send} alt="" /></span>

                <div className="contactInfo_details">
                  <h5>Email:</h5>
                  <p>cca@gmail.com</p>
                </div>
             </div>
           </div>


           <h2 className='contact_info_title'>Get in touch with us</h2>

           <form className="contact_form">
                <input type="text" placeholder='Name'/>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Subject'/>
                <textarea name="" id="" cols="30" rows="7" placeholder='Message'></textarea>
                <input type="button" className='contact_btn' value='Send Message'/>
           </form>
         </div>
      </div>


      <Footer/>
        
    </div>
  )
}
