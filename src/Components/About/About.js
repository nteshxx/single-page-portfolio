import './About.css';
import img from '../../Assets/about-img.jpg';
import twitter from '../../Assets/twitter.svg';
import web from '../../Assets/dribble.svg';
import ig from '../../Assets/instagram.svg';
import fb from '../../Assets/facebook.svg';
import pin from '../../Assets/pinterest.svg';


const About = () => {
  return (
    <div id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={img} alt="" />
        </div>
        <div className="about-section">
          <h1>About <span>Me</span></h1>
          <h3>Hi I'm Juice Wrld.</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
               in culpa qui officia deserunt mollit anim id est laborum.<br/>
               Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
          <div className="about-social">
            <a href="/"> <img src={web} alt="" /> </a>
            <a href="/"> <img src={fb} alt="" /> </a>
            <a href="/"> <img src={ig} alt="" /> </a>
            <a href="/"> <img src={twitter} alt="" /> </a>
            <a href="/"> <img src={pin} alt="" /> </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;