import React from 'react'

const Backend = () => {
  return (
    <div>
      <div className="skills_content">
        <h3 className="skills_title">Coding Language</h3>

        <div className="skills_box">
          <div className="skills_group">
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">C++</h3>
                <span className=" skills_level">Intermediate</span>
              </div>
            </div>

            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name"> Python</h3>
                <span className=" skills_level">Basic</span>
              </div>
            </div>

            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Javascript</h3>
                <span className=" skills_level">Basic</span>
              </div>
            </div>

            
          </div>

          <div className="skills_group">
            <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">Java</h3>
                <span className=" skills_level">Basaic</span>
              </div>
            </div>

             <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">C</h3>
                <span className=" skills_level">Intermediate</span>
              </div>
            </div> 

            {/* <div className="skills_data">
              <i className="bx bx-badge-check"></i>
              <div>
                <h3 className="skills_name">React</h3>
                <span className=" skills_level">Intermediate</span>
              </div>
            </div> */}

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend
