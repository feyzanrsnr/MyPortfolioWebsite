import React from 'react'
import html from '../../assets/images/html-5_732212.png'
import css from '../../assets/images/css-2.png'
import bootstrap from '../../assets/images/bootstrap_5968672.png'
import sass from '../../assets/images/sass_5968358.png'
import js from '../../assets/images/js_5968292.png'
import react from '../../assets/images/react.png'
import node from '../../assets/images/node.png'
import postgre from '../../assets/images/postgre_5968342.png'
import tailwind from '../../assets/images/Tailwind.png'

const About = () => {
  return (
    <section id='about'>

      <h3>About Me</h3>
      <div className='container'>

      <div className='about-text'>
      
      <p className='md-text'>Over the past year, I’ve been on a journey to become a better Frontend Developer — learning essential technologies, experimenting with projects, and constantly improving my skills. <br /><br />
      I'm excited about the opportunity to work on bigger projects and collaborate with a team where I can keep growing and making an impact.
      </p>
       

      </div>

      <div className="details">
        
        <div className="detail">
          <h4 className='detail-header'>Education</h4>
          <p>Ataturk University <span>2020-2024</span></p>
          <p>Computer Engineering <span>3.04</span></p>
        </div>
        
        <div className="detail">
            <h4 className='detail-header'>Experience</h4>
            <p>PenDC Data Center</p>
            <p>Software Department Intern <span> 2024 Feb-June</span></p>
        </div>

      <a href="/CV_FEYZANUR_ŞENER.pdf" download="Feyzanur_Sener_CV.pdf">
       <button className='basic-button-gradient'>Download CV</button>
       </a>
      </div>
      
      </div>

      <div className="skills">

      <h4>Technologies</h4>

      <div className="allskills">
        <div className="skill">
          <img src={html} alt="" />
          <p>HTML</p>
        </div>
        <div className="skill">
        <img src={css} alt="" />
          <p>Css</p>
        </div>
        <div className="skill">
        <img src={js} alt="" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
        <img src={react} alt="" />
          <p>React</p>
        </div>
        <div className="skill">
        <img src={tailwind} alt="" />
          <p>Tailwind</p>
        </div>
        <div className="skill">
        <img src={bootstrap} alt="" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
        <img src={postgre} alt="" />
          <p>PostgreSQL</p>
        </div>
        <div className="skill">
        <img src={sass} alt="" />
          <p>SASS</p>
        </div>
        {/* <div className="skill">
        <img src={node} alt="" />
          <p>Node.js</p>
        </div> */}
      </div>
      </div>
      
    </section>
  )
}

export default About
