import React from "react";
import '../css/Header.css';

export default function Header() {
  return (
    <header className="header">
      <img
        className="header__avatar"
        src={process.env.PUBLIC_URL + '/images/profile.jpeg'}
        alt="Theophile Lundenge"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://via.placeholder.com/160';
        }}
      />
      <div className="header__content">
        <h1>Theophile Lundenge Lelu</h1>
        <p>Computer Engineer | Head of Engineering at ADAI Circle</p>
        <p>
          Innovator & Technical Strategist 📍 Katudza, Dzaleka Refugee Camp, Dowa,
          Malawi
        </p>
        <a
          href="https://linkedin.com/in/theophile-lundenge-9595821ab"
          target="_blank"
          rel="noreferrer"
          className="header__link"
        >
          🔗 LinkedIn Profile
        </a>
      </div>
    </header>
  );
}