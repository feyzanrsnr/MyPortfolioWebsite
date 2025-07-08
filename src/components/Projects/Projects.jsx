import React from 'react'
import img from '../../assets/images/pomodoro-website.png'
const Projects = () => {
  return (
    <section id='projects'>

      <div className="container">
      <h3>Projects</h3>
      <div className="allprojects">
        <div className='project'>
          <img src={img} alt="" />
          <p>Task Manager Website</p>
          <a href="" class="project-link">Visit Project</a>
        </div>
        <div className='project'>
        <img src={img} alt="" />
        <p>Online Psychological <br /> Counseling Website</p>
        <a href="" class="project-link">Visit Project</a>
        </div>
        <div className='project'>
        <img src={img} alt="" />
          <p>Quiz App</p>
          <a href="" class="project-link">Visit Project</a>
        </div>
        <div className='project'>
        <img src={img} alt="" />
          <p>My Portfolio</p>
          <a href="" class="project-link">Visit Project</a>
        </div>
       
        
      </div>
      </div>
      
    </section>
  )
}

export default Projects
