import React from "react";
import profileImage from "../../assets/avatar/Profile/Avatar.jpeg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%", borderRadius
          :"20px" }} alt="profile" />
          </div>
          <p>
            I'm Andres Mejia, 29 years old. I'm living in American Fork, Utah. I'm from Venezuela, Margarita Island. I started in programming area 2 years ago in Argentina, Buenos Aires.
          </p>
          <p>
          Originally, I studied mechanical engineering where I discovered that I was interested in programming when I took the computer science module of mechanical engineering.
          </p>
          <p>
          I currently work in sales, I have an inventory on wheels. I sell tools and supplies for countertops.
          </p>
          <p>
          I would like to start my career as a junior developer in the future, that is why I have decided to take this bootcamp and increase my programming skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
