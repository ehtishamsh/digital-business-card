import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Footer() {
  return (
    <div className="footer_section">
      <span>
        <FontAwesomeIcon className="footer_icons" icon={faXTwitter} />
      </span>
      <span>
        <FontAwesomeIcon className="footer_icons" icon={faFacebookSquare} />
      </span>
      <span>
        <FontAwesomeIcon className="footer_icons" icon={faGithubSquare} />
      </span>
      <span>
        <FontAwesomeIcon className="footer_icons" icon={faInstagramSquare} />
      </span>
    </div>
  );
}

export default Footer;
