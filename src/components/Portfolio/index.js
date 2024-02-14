import React from "react";
import schedulerImage from "../../assets/projects/day-scheduler.png";
import weatherImage from "../../assets/projects/weather-dashboard.png";
import portfolioImage from "../../assets/projects/portfolio.png";
import passwordImage from "../../assets/projects/password-generator.png";


function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Projects</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://andedu15.github.io/dayScheduler/">
                {" "}
                <img
                  src={schedulerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="password-generator"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sorcerer's Sphere</h4>
              <p>
              This is the Work Day Scheduler app, when you can organize all your activities, meetings,tasks,etc.. by work hour.
              You will have time blocks from 9am to 5pm, where you can write and save a description about your activity in each time block. In addition, this will be your digital work scheduler where you will have past hours (Red color), current hour (Gray color) and future hours (Green color).
              Start to Planning your day and let us know how did it go!
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://andedu15.github.io/passwordGenerator/">
                {" "}
                <img
                  src={passwordImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Sweet Pea Flowers</h4>
              <p>
              This is the Password Generator app, where you can create a secure password. You can choose what type of password you need to create, from a basic password (letters) to a complex password (letters, numbers and special characters).
              After choosing your options, this application will take random values to create your password and you can see it on the main card..{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://andedu15.github.io/Portfolio/">
                {" "}
                <img
                  src={portfolioImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="T"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Twilight Ristorante</h4>
              <p>
              This is my first portfolio where you will find a little about me, my skills and my projects.
              For the creation of this web page, I applied my knowledge of html, css and a bit of bootstrap. So, used flexbox and a media query to solve the responsive layout, use some hovers to animate the links..{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://andedu15.github.io/weatherDashboard/">
                {" "}
                <img
                  src={weatherImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
              This is the Weather Dashboard app, where you will can get the current weather information of you selected city.
              You will get the date, current temperature, speed wind, humidity percentage..{" "}
              </p>
            </div>
          </div>
        </div>

        

      
      </section>
    </div>
  );
}

export default Portfolio;
