import React from "react";

export default function About() {
  return (
    <section className="about">
      <h2>🧠 About Me</h2>
      <div className="about__inner">
        <img
          className="about__image"
          src={process.env.PUBLIC_URL + '/images/project1.svg'}
          alt="Illustration"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/160';
          }}
        />
        <p>
          I am a passionate and detail-oriented computer engineer with a strong
          foundation in software development, leadership, and innovation. As
          Head of Engineering at ADAI Circle, I lead high-impact software
          projects driving digital transformation across Africa. My work blends
          technical mastery with strategic thinking, fostering a culture of
          excellence and collaboration.
        </p>
      </div>
    </section>
  );
}