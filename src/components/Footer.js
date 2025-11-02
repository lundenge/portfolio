import React from "react";
import '../css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Theophile Lundenge Lelu | Built with React ⚛️</p>
    </footer>
  );
}