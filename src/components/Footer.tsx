import React from "react";
import Link from "next/link";
import Image from "next/image";
import Github from "../../public/github.svg";

const Footer = () => {
  return (
    <footer className="footer-container">
      by st
      <Link href="https://stateful.art" target="_blank" className="footer-link">
        <span className="start-span">art</span>
      </Link>
      <Link href="https://github.com/streamerd/peacemaker" target="_blank" className="gh-link">
        <Image
          src={Github}
          alt="GitHub Icon"
          width={40}
          height={40}
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            left: "40px",
            position: "fixed",
            
          }}
        />
      </Link>
      <Link
        href="https://github.com/demo-verse/proof-of-peacemaking-generator"
        target="_blank"
        className="gh-link"
      >
        <Image
          src={Github}
          alt="GitHub Icon"
          width={40}
          height={40}
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            right: "40px",
            position: "fixed",
            transform: "rotate(180deg)",
          }}
        />
      </Link>
      <p className="footer-last-text"> a World Peace Technology A.Ş. </p>
      <p className="footer-last-text"> © all rights acknowledged </p>
    </footer>
  );
};

export default Footer;
