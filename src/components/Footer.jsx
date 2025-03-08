import React from "react";
import image from "../assets/Shaik.jpeg";

import {
  AiFillGithub,
  AiFillInstagram,
  // AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={image} alt="Founder" />

        <h2>Mujeeb Shaik</h2>
        <p>NO bugs..Only Hugs</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          {/* <a href="https://youtube.com/6packprogrammer" target={"blank"}>
            <AiFillYoutube />
          </a> */}
          <a
            href="https://instagram.com/beyond_imaginations_45"
            target={"blank"}
          >
            <AiFillInstagram />
          </a>
          <a href="https://github.com/Iammujeeb45" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
