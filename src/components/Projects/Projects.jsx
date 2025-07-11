import React from 'react'
// import img from '../../assets/images/pomodoro-website.png'
import img1 from '../../assets/images/project-1.png'
import img2 from '../../assets/images/project-2.png'
import img3 from '../../assets/images/project-3.png'
const Projects = () => {
  return (
    <section id='projects'>

      <div className="container">
      <h3>Projects</h3>
      <div className="allprojects">

        <div className='project'>
        <img src={img1} alt="" />
        <p>Online Psychological <br /> Counseling Website</p>
        <a href="https://online-therapy-website.vercel.app/" target='blank' class="project-website">Visit Project</a>
        <a href="https://github.com/feyzanrsnr/Online_Therapy_Website" target='blank' class="project-link">Visit Code</a>
        </div>


        {/* <div className='project'>
        <img src={img} alt="" />
          <p>Quiz App</p>
          <a href="" class="project-link">Visit Project</a>
        </div> */}

        <div className='project'>
        <img src={img2} alt="" />
          <p>My Portfolio</p>
          <a href="https://github.com/feyzanrsnr/Online_Therapy_Website" target='blank' class="project-link">Visit Code</a>
        </div>

        <div className='project'>
          <img src={img3} alt="" />
          <p>Task Manager Website</p>
          <a href="https://github.com/feyzanrsnr/Taskly-TaskManagerWebsite" target='blank' class="project-link">Visit Code</a>
        </div>

       
        
      </div>
      </div>
      
    </section>
  )
}

export default Projects
