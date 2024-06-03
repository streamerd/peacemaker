import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer-container">
      by st<Link href="https://stateful.art" target="_blank" className="footer-link">
    <span className="start-span">art</span> 
      </Link>
      <p className="footer-last-text"> a World Peace Technology A.Ş. </p>
      <p className="footer-last-text"> © all rights acknowledged </p>

    </footer>
  );
};

export default Footer;
