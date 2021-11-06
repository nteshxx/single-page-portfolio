import './Footer.css';
import twitter from '../../Assets/twitter.svg';
import web from '../../Assets/dribble.svg';
import ig from '../../Assets/instagram.svg';
import fb from '../../Assets/facebook.svg';
import pin from '../../Assets/pinterest.svg';

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-socials">
        <a href="/">
          <img src={web} alt="" />
        </a>
        <a href="/">
          <img src={fb} alt="" />
        </a>
        <a href="/">
          <img src={ig} alt="" />
        </a>
        <a href="/">
          <img src={twitter} alt="" />
        </a>
        <a href="/">
          <img src={pin} alt="" />
        </a>
      </div>
      <div id="copyright">
        Copyright 2021 Nitesh Yadav. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
