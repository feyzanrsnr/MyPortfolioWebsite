import React from 'react'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <section id='home'>
        <div className="homeContent">
          <div>
          <p className='md-text'>Welcome, I'm Feyza</p>
          <h2><span>Front</span>end Developer</h2>
            <p className='lg-text'> <br /></p>
            <p className='md-text italic'>
              I'm focusing on building <span>interactive</span> and <span>user-friendly</span> web applications.
            </p>
          </div>

          <button className='basic-button-gradient'>Download CV</button>
          
        </div>
    </section>
  )
}

export default Home
