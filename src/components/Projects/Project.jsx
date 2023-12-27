import React from "react";
import "./project.css";
const Project = () => {
  return (
    <div>
            <section className="section project" id='project'>

      <h2 className="section_title">Projects</h2>
      <div className="section_subtitle">My Personal Journey</div>

      {/* Card 1 */}
      <div className="flex-container">

        <div className="card-container">
          <a href="https://basantkumarr.github.io/CodeHelp-Clone-by-HTML-CSS-/" className="hero-image-container">
            <img
              className="hero-image"
              src="data:image/png;base64,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"
              alt="Spinning glass cube"
            />
          </a>
          <main className="main-content">
            <h1>
              <a target="_blank" href="https://basantkumarr.github.io/CodeHelp-Clone-by-HTML-CSS-/"> Code-help Clone</a>
            </h1>
            <p>
              It is completely beginner friendly,
             I created clone of this website using Bootestrap{" "}
            </p>
            <div className="flex-row">
              <a href="https://github.com/basantkumarr/CodeHelp-Clone-by-HTML-CSS-">
              <div className="coin-base">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Ethereum"
                  className="small-image"
                />
                <h2>GitHub-link</h2>
              </div>

              </a>
              <div className="time-left">
                <img
                  src="https://e7.pngegg.com/pngimages/804/754/png-clipart-computer-icons-calendar-date-calendrier-text-calendar.png"
                  alt="clock"
                  className="small-image"
                />
                <p>2023</p>
              </div>
            </div>
          </main>
          
        </div>




     
        <div className="card-container">
          <a href="https://lnkd.in/dJPhYBVA" className="hero-image-container">
            <img
              className="hero-image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURFjzR2pUc8mYdzcowENduDGm0l9SW2Mjpmh6XdJYsoGENWn-9SogGFPMQtisEtXipc4&usqp=CAU"
              alt="Spinning glass cube"
            />
          </a>
          <main className="main-content">
            <h1>
              <a target="_blank" href="https://lnkd.in/dJPhYBVA"> Web-Dev Summit </a>
            </h1>
            <p>
   I created this website for our college event WebDev Summit 2K23 with my friends{" "}
            </p>
            <div className="flex-row">
              <a href="https://github.com/basantkumarr/">
              <div className="coin-base">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Ethereum"
                  className="small-image"
                />
                <h2>GitHub-link</h2>
              </div>

              </a>
              <div className="time-left">
                <img
                  src="https://e7.pngegg.com/pngimages/804/754/png-clipart-computer-icons-calendar-date-calendrier-text-calendar.png"
                  alt="clock"
                  className="small-image"
                />
                <p>2023</p>
              </div>
            </div>
          </main>
          
        </div>





        <div className="card-container">
          <a href="https://basantkumarr.github.io/Calculator-using-HTML-CSS-" className="hero-image-container">
            <img
              className="hero-image"
              src="https://cdn2.iconfinder.com/data/icons/ios7-inspired-mac-icon-set/512/Calculator_512.png"
              alt="Spinning glass cube"
            />
          </a>
          <main className="main-content">
            <h1>
              <a target="_blank" href="https://basantkumarr.github.io/Calculator-using-HTML-CSS-">Calculator</a>
            </h1>
            <p>
 I created this web page to do calculation . I have created this using Javascript{" "}
            </p>
            <div className="flex-row">
              <a href="https://github.com/basantkumarr/Calculator-using-HTML-CSS-JS">
              <div className="coin-base">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Ethereum"
                  className="small-image"
                />
                <h2>GitHub-link</h2>
              </div>

              </a>
              <div className="time-left">
                <img
                  src="https://e7.pngegg.com/pngimages/804/754/png-clipart-computer-icons-calendar-date-calendrier-text-calendar.png"
                  alt="clock"
                  className="small-image"
                />
                <p>2023</p>
              </div>
            </div>
          </main>
          
        </div>




        <div className="card-container">
          <a href="https://basantkumarr.github.io/Gym-Website-HTML-CSS/" className="hero-image-container">
            <img
              className="hero-image"
              src="https://static.vecteezy.com/system/resources/previews/015/154/394/original/gym-logo-fitness-logo-design-suitable-for-fitness-sports-equipment-body-health-body-supplement-product-brands-free-vector.jpg"
              alt="Spinning glass cube"
            />
          </a>
          <main className="main-content">
            <h1>
              <a target="_blank" href="https://basantkumarr.github.io/Gym-Website-HTML-CSS/"> GYM-Website</a>
            </h1>
            <p>
              It is completely beginner friendly,It is simple website of GYM to contact them.{" "}
            </p>
            <div className="flex-row">
              <a href="https://github.com/basantkumarr/Gym-Website-HTML-CSS">
              <div className="coin-base">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Ethereum"
                  className="small-image"
                />
                <h2>GitHub-link</h2>
              </div>

              </a>
              <div className="time-left">
                <img
                  src="https://e7.pngegg.com/pngimages/804/754/png-clipart-computer-icons-calendar-date-calendrier-text-calendar.png"
                  alt="clock"
                  className="small-image"
                />
                <p>2023</p>
              </div>
            </div>
          </main>
          
        </div>




        <div className="card-container">
          <a href="https://basantkumarr.github.io/To-do-List-using-HTML-CSS-JS" className="hero-image-container">
            <img
              className="hero-image"
              src="https://static.vecteezy.com/system/resources/thumbnails/003/529/153/small/business-to-do-list-flat-icon-modern-style-free-vector.jpg"
              alt="Spinning glass cube"
            />
          </a>
          <main className="main-content">
            <h1>
              <a target="_blank" href="https://basantkumarr.github.io/To-do-List-using-HTML-CSS-JS">To-Do List</a>
            </h1>
            <p>
            A to-do list is just a list of things you have to-do. I created it using HTML CSS and JS{" "}
            </p>
            <div className="flex-row">
              <a href="https://github.com/basantkumarr/To-do-List-using-HTML-CSS-JS">
              <div className="coin-base">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Ethereum"
                  className="small-image"
                />
                <h2>GitHub-link</h2>
              </div>

              </a>
              <div className="time-left">
                <img
                  src="https://e7.pngegg.com/pngimages/804/754/png-clipart-computer-icons-calendar-date-calendrier-text-calendar.png"
                  alt="clock"
                  className="small-image"
                />
                <p>2023</p>
              </div>
            </div>
          </main>
          




        </div>


   



        <div className="card-container">
          <a href="#" className="hero-image-container">
            <img
              className="hero-image"
              src="https://png.pngtree.com/png-vector/20190403/ourlarge/pngtree-vector-portfolio-icon-png-image_908392.jpg"
              alt="Spinning glass cube"
            />
          </a>
          <main className="main-content">
            <h1>
              <a target="_blank" href="#"> Portfolio</a>
            </h1>
            <p>
            A portfolio is a compilation of academic and professional . I created this website using ReactJs{" "}
            </p>
            <div className="flex-row">
              <a href="https://github.com/basantkumarr/CodeHelp-Clone-by-HTML-CSS-">
              <div className="coin-base">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  alt="Ethereum"
                  className="small-image"
                />
                <h2>GitHub-link</h2>
              </div>

              </a>
              <div className="time-left">
                <img
                  src="https://e7.pngegg.com/pngimages/804/754/png-clipart-computer-icons-calendar-date-calendrier-text-calendar.png"
                  alt="clock"
                  className="small-image"
                />
                <p>2023</p>
              </div>
            </div>
          </main>
          
        </div>

      </div>
</section>


      
    </div>
  );
};

export default Project;
