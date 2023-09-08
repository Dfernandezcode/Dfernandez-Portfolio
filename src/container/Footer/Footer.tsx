import "./Footer.scss";

type FooterProps = {
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  currentTheme: string;
};

const Footer: React.FC<FooterProps> = ({ setTheme, currentTheme }) => {
  return (
    <div className="footer">
      <div className="footer__theme">
        <button className="footer__theme--toggle" onClick={() => setTheme("dark")}>
          <input className="footer__theme--checkbox" type="checkbox" checked={currentTheme === "dark"} readOnly />
          Dark
        </button>
        <button className="footer__theme--toggle" onClick={() => setTheme("light")}>
          <input className="footer__theme--checkbox" type="checkbox" checked={currentTheme === "light"} readOnly />
          Light
        </button>
      </div>
    </div>
  );
};

export default Footer;
