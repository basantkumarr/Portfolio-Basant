import React from 'react'
import "./Skills.css"
import Frontend from './Frontend'
import Backend from './Backend'
const Skills = () => {
  return (
    <div>
      <section className="section skills" id='skills'>
      <h2 className="section_title">Skills</h2>
        <div className="section_subtitle">My technical level</div>
       <div className="skills_container container grid">
<Frontend></Frontend>
<Backend></Backend>
       </div>

      </section>
    </div>
  )
}

export default Skills
