import React from "react";
import { AiFillInstagram, AiOutlineMenu } from "react-icons/ai";

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Mujeeb</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#services">
        Services
      </a> */}
      {/* <a onClick={() => setMenuOpen(false)} href="#testimonial">
      Technologies
      </a> */}
      <a onClick={() => setMenuOpen(false)} href="#technologies">
      Technologies
      </a>
      {/* <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a> */}
    </div>
    <a href="https://instagram.com/beyond_imaginations_45" >
      <button>
        INSTAGRAM <AiFillInstagram />
      </button>
    </a>
  </>
);

export default Header;
