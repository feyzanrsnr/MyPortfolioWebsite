import React from 'react'
import {Link} from 'react-scroll'
import '../../assets/scss/main.scss'
import linkedin from '../../assets/images/linkedin.png'
import github from '../../assets/images/social.png'
import medium from '../../assets/images/icons8-medium-50.png'
import light from '../../assets/images/light_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
import dark from '../../assets/images/dark_mode_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'


const Navbar = ({theme, setTheme}) => {
  
  const toggleTheme = () => {

    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <nav className='navbar'>

    <div className='navMenu'>

    <div className='navMenuItems'>
      <Link activeClass='active' to='home' spy={true} smooth={true} offset={-70} duration={500} hashSpy={true}className='navMenuItem'>Home</Link>
      <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} hashSpy={true} className='navMenuItem'>About</Link>
      <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-70} duration={500} hashSpy={true} className='navMenuItem'>Projects</Link>
    </div>

    <div className='rightMenu'>
      {/* <div className="mode">
        <button onClick={toggleTheme}>
          <img src={light} alt="" />
        </button>

        <button>
          <img src={dark} alt="" />
        </button>
      </div> */}
    <button className='primary-button' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth', block:'center'});
        }}>
          Contact Me 
    </button>
    <div className="links">
    <a href="https://github.com/feyzanrsnr" target="_blank" >
    <img src={github} alt="GitHub" className="link"/>
    </a>
    <a href="https://www.linkedin.com/in/feyzanursener/" target="_blank" rel="noopener noreferrer">
    <img src={linkedin} alt="LinkedIn" className="link" />
    </a>
    <a href="https://medium.com/@senerfeyza" target="_blank" >
    <img src={medium} alt="Medium" className="link" />
    </a>

    </div>
    
    </div>
              
    </div>

        
    </nav>
  )
}

export default Navbar
