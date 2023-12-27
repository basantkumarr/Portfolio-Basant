import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div>
    <footer className='footer'>
<div className="footer_container container">
    <h1 className='footer_title'>Basant Kumar</h1>

    <ul className="footer_list">
        <li>
            <a href="#about" className='footer-link'>About</a>
        </li>
        <li>
            <a href="#project" className='footer-link'>Projects</a>
        </li>
        <li>
            <a href="#contact" className='footer-link'>Contact</a>
        </li>
    </ul>
    <div className="footer_social">
    <a href="https://www.instagram.com/mohit__ubba/" className="home_social-icon" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/in/basant-kumar-823320245/" className="home_social-icon" target="_blank" rel="noopener noreferrer">
        <i class="uil uil-linkedin-alt"></i>         </a>
        <a href="https://github.com/basantkumarr" className="home_social-icon" target="_blank" rel="noopener noreferrer">
          <i className="uil uil-github-alt"></i>
        </a>
    </div>
    <span className='footer_copy'>&#169; Basant Kumar. All Rights Reserved</span>
</div>
    </footer>
      
    </div>
  )
}

export default Footer
