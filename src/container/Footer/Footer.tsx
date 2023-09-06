import React from "react";
import "./Footer.scss";

interface FooterProps {
  setActiveCard: (section: string) => void;
  setSelectedLink: React.Dispatch<React.SetStateAction<string | null>>;
  selectedLink: string | null;
}

const Footer: React.FC<FooterProps> = ({ setActiveCard, setSelectedLink, selectedLink }) => {
  return (
    <div className="footer">
      <p className="footer__text">
        <a 
          className="footer__link" 
          href="#contact" 
          onClick={() => {
            setActiveCard("contact");
            setSelectedLink("contact");
          }}
        >
          {selectedLink === "contact" ? "•" : "Contact form ↗"}
        </a>
      </p>
      <p className="footer__text">(+34) 722280416</p>
      <p className="footer__text">©2023 Daniel Fernandez Foe</p>
    </div>
  );
};

export default Footer;
