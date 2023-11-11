import React from "react";
import Image from "../assets/profilePic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <header>
      <nav>
        <img src={Image} alt="" className="profile--pic" />
        <h2>Laura Smith</h2>
        <h4>Frontend Developer</h4>
        <h5>laurasmith.website</h5>
        <div className="button_div">
          <button>
            <FontAwesomeIcon icon={faEnvelope} className="btnIcons" /> Email
          </button>
          <button>
            <FontAwesomeIcon icon={faLinkedin} className="btnIcons" /> Linkdin
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
