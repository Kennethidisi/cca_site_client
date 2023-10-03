import React from 'react'
import "./about.css"
import Header from '../../components/header/Header'
import whoWeAre from "../../images/Who-we-are.png"
import mission from "../../images/Our-Mission.png"
import vision from "../../images/Our-Vision.png"
import Footer from '../../components/footer/Footer'


export default function About() {
  return (
    <div className='abtContainer'>
      <Header/>

      <section className="abtBanner">
            <h1>About <span>Us</span></h1>
      </section>

      <div className="about_div">
          <div className="who_are_we">
              <img src={whoWeAre} alt="who we are" width="400px"/>
              <h3>Who we are</h3>
              <p>Codeprof Academy is lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ratione vero praesentium ipsa.</p>
          </div>

          <div className="our_mission">
              <img src={mission} alt="mission" width="400px"/>
              <h3>Our Mission</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat vel, quisquam ea modi itaque mollitia?</p>
          </div>

          <div className="our_vision">
              <img src={vision} alt="vision" width="400px"/>
              <h3>Our Vision</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi nobis totam, consectetur ratione provident molestiae.</p>
          </div>
      </div>

      <div className="about_details">
        <h2>Codeprof Computer Academy</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate hic repudiandae, veritatis consequatur et laborum molestiae aspernatur ipsa tempore quasi molestias aperiam delectus quidem eaque ut omnis nam quod! Quaerat, maxime assumenda? Ipsum, officiis porro? Mollitia illo, nulla at expedita facilis odit voluptatem officia. Ad in rem ipsam omnis nostrum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quod quos cupiditate delectus beatae nobis placeat tenetur. Repudiandae cum explicabo, reprehenderit aliquid, natus, adipisci veniam dolores nemo voluptatem recusandae atque? </p>
      </div>

      <Footer/>
    </div>
  )
}
