import React from 'react'
import "./footer.css"
import logo from "../../images/logo.png"

export default function Footer() {
  return (
    <footer>
        <section className='footer_top'>
            <div className="logo_adrress">
                <div className='footer_logo'>
                    <img src={logo} alt="logo" />
                    <h1>Codeprof Academy</h1>
                </div>

                <div className="footer_address">
                    <p>Head office: <br />
                    20, Koya Street, Surulere Busstop, <br />
                    Olamojuba Estate, <br />
                    Lagos.
                    </p>

                    <p>
                        Bodethomas Branch: <br />
                        30, Bodethomas Busstop,<br />
                        Surulere, Lagos.
                    </p>
                </div>
            </div>

            <div className="footer_courses">
                <h4>Certificate Courses</h4>
                <div className="footer_course_list">
                    <span>Python Development</span>
                    <span>Full Stack</span>
                    <span>Data Science</span>
                    <span>Robotics</span>
                    <span>Machine Learning</span>
                    <span>Flutter</span>
                </div>
            </div>

            <div className="footer_abt">
                <h4>About</h4>
                <div className="footer_abt_list">
                    <span>About Us</span>
                    <span>Contact Us</span>
                </div>
            </div>

            <div className="footer_resource">
                <h4>Resources</h4>
                <div className="footer_resource_list">
                    <span>Blogs</span>
                    <span>FAQS</span>
                </div>
                <div className="social_icons">
                    <small></small>
                    <small></small>
                    <small></small>
                    <small></small>
                </div>
            </div>
        </section>

        <section className="footer_btm">
            <p>
                &copy; {new Date().getFullYear()}. All rights reserved. Designed by Kenneth. Powered by Codeprof Academy
            </p>
        </section>
    </footer>
  )
}
