import React from "react";

export default function Projects() {
  return (
    <section className="projects">
      <h2>🚀 Projects & Achievements</h2>
      <div className="projects__grid">
        <div className="project-card">
          <img
            src={process.env.PUBLIC_URL + '/images/project1.png'}
            alt="Project 1"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/320x180';
            }}
          />
          <h3>Impact Apps</h3>
          <p>Spearheaded multiple mobile and web applications for social impact</p>
        </div>

        <div className="project-card">
          <img
            src={process.env.PUBLIC_URL + '/images/project2.png'}
            alt="Project 2"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/320x180';
            }}
          />
          <h3>Scalable Architecture</h3>
          <p>Implemented microservices architecture to scale engineering operations</p>
        </div>

        <div className="project-card">
          <img
            src={process.env.PUBLIC_URL + '/images/project1.png'}
            alt="Mentorship"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/320x180';
            }}
          />
          <h3>Mentorship & Leadership</h3>
          <p>Mentored junior developers and fostered a learning-driven environment</p>
        </div>
      </div>
    </section>
  );
}