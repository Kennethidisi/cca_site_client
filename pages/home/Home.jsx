import React from 'react'
import "./home.css"
import '../contactUs/contact.css'
import Header from '../../components/header/Header'
import cca from '../../images/cca.png'
import ccaPple from '../../images/cca_pple.png'
import Review from '../../components/reviews/Review'
import Faq from '../../components/faqs/Faq'

import send from '../../images/send.png'
import phone from '../../images/phone.png'
import location from '../../images/location.png'
import Footer from '../../components/footer/Footer'
import BlogPost from '../../components/blogPost/BlogPost'

export default function Home() {
  return (
    <div className='homeContainer'>
      <Header/>

      <section className="banner">
            <h2>Welcome to</h2>
            <div className="codeprof">
                <h1>Codeprof Academy</h1>
                <small className="underline"></small>
            </div>
            <p className="banner_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum amet provident a quibusdam accusantium nam nulla earum aspernatur at, aperiam quidem cumque distinctio quod quas iusto.
            </p>
            <button className="contact_us_btn">Contact Us</button>
        </section>

        <section className='review_section'>
          <div className='review_title'>
            <h1>Testimonials</h1>
            {/* <span className="underline"></span> */}
          </div>

          <div className='review_div'>
            <Review/>
          </div>
        </section>


        <div className='cca_img_div'>
            <img src={cca} alt="cca"  className='cca_img'/>
        </div>

        <section className='blog_section'>
          <div className='blog_title'>
            <h1>Our Blog</h1>
            {/* <span className="underline"></span> */}
          </div>

          <div className="blog_div">
            <BlogPost/>
          </div>
        </section>


        <div className='cca_img_div2'>
            <img src={ccaPple} alt="cca"  className='cca_img'/>
        </div>


        <section className='faq_section'>
          <div className='faq_title'>
            <h1>FAQS</h1>
            {/* <span className="underline"></span> */}
          </div>

          <div className="faqs">
            <Faq question={'Why should I attend a coding academy?'}/>
            <Faq question={'Do I need prior coding experience to enroll?'}/>
            <Faq question={'What is the cost of tuition, and are there any financing options available?'}/>
            <Faq question={'Do you offer job placement assistance or career support?'}/>
            <Faq question={'What is the success rate of graduates in finding coding-related jobs?'}/>
          </div>
        </section>


        <section className='contact_section'>
          <div className='contact_title'>
            <h1>Contact Us</h1>
            {/* <span className="underline"></span> */}
          </div>

          <div className='contact2_wrapper'>
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
        </section>

        <Footer/>
    </div>
  )
}
