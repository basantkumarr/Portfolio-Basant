import React from "react";
import "./Exp.css";
import { useState } from "react";

const Exp = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className="qualification section" id="experience">
        <h2 className="section_title">Experience</h2>
        <div className="section_subtitle">My Personal Journey</div>

        <div className="qualification_container container">
          <div className="qualification_tabs">
            <div
              className={
                toggleState === 1
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }
              onClick= {() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap qualification_icon"></i>{" "}
              Education
            </div>

            <div
              className={
                toggleState === 2
                  ? "qualification_button qualification_active button--flex"
                  : "qualification_button button--flex"
              }
              onClick= {() => toggleTab(2)}

            >
              <i className="uil uil-briefcase-alt qualification_icon"></i>{" "}
              Experience
            </div>
          </div>

          <div className="qualification_sections">
            <div className={toggleState===1?"qualification_content qualification_content-active":"qualification_content" }>
              <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
                rel="stylesheet"
                type="text/css"
              />

              {/* The Timeline */}
              <ul className="timeline">
                {/* Item 1 */}
                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">B.Tech CSE</span>
                      <span className="time-wrapper">
                        <span className="time">2022 - Present</span>
                      </span>
                    </div>
                    <div className="desc">
                      A passion for problem-solving or a desire to work on
                      cutting-edge technologies.
                    </div>
                  </div>
                </li>

                {/* Item 2 */}
                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">12th</span>
                      <span className="time-wrapper">
                        <span className="time">2021 - 2022</span>
                      </span>
                    </div>
                    <div className="desc">
                      I have passed my 12th class in non-medical stream with 82%
                      marks
                    </div>
                  </div>
                </li>

                {/* Item 3 */}
                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">10th</span>
                      <span className="time-wrapper">
                        <span className="time">2019 - 2020</span>
                      </span>
                    </div>
                    <div className="desc">
                      I have passed my 10th class   with 89%
                      marks
                    </div>
                  </div>
                </li>
              </ul>
            </div>


            <div className={toggleState===2 ?"qualification_content qualification_content-active":"qualification_content" }>
              <link
                href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic"
                rel="stylesheet"
                type="text/css"
              />

              {/* The Timeline */}
              <ul className="timeline">
                {/* Item 1 */}
                <li>
                  <div className="direction-r">
                    <div className="flag-wrapper">
                      <span className="flag">Oasis Infobyte</span>
                      <span className="time-wrapper">
                        <span className="time">2023</span>
                      </span>
                    </div>
                    <div className="desc">
                  I worked as a frontend web developer on some minor projects
                    </div>
                  </div>
                </li>

                {/* Item 2 */}
                <li>
                  <div className="direction-l">
                    <div className="flag-wrapper">
                      <span className="flag">  Coding Ninjas</span>
                      <span className="time-wrapper">
                        <span className="time">2023</span>
                      </span>
                    </div>
                    <div className="desc">
               I worked as a Campus Ambassador 
                    </div>
                  </div>
                </li>

                {/* Item 3 */}
                           </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exp;
