import { Link } from "react-router-dom";
import "./Footer.css"
import { FaGithub, FaHeart, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer-container">
        <ul className="footer-header-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="footer-subscribe-container">
          <input type="text" placeholder="Enter your email" />
          <button className="footer-send-btn">Send</button>
        </div>
        <div className="social-handlers">
          <h2>Get in touch</h2>
          <ul className="social-handler-icon-wrapper">
            <li><Link><FaLinkedinIn /></Link></li>
            <li><Link><FaGithub /></Link></li>
            <li><Link><FaXTwitter /></Link></li>
          </ul>
        </div>
      </div>
      <div className="horizontal-line"></div>
      <div className="footer-text">
        <p>
          Made with <FaHeart /> by Amber
        </p>
      </div>
    </div>
  );
};

export default Footer;
