import "./Services.css";
import youtube from "../../Assets/youtube.svg";
import github from "../../Assets/github.svg";
import dribble from "../../Assets/dribble.svg";
import android from "../../Assets/android.svg";
import ios from "../../Assets/ios.svg";
import slack from "../../Assets/slack.svg";

const Services = () => {
  return (
    <div id="services">
      <div className="services-container">
        <h1 className="services-heading">
          <span>Our</span> Services
        </h1>
        <p>We provide high standard website solutions for your business</p>
        <div className="services-card-wrapper">
          <div className="service-card">
            <img src={youtube} alt="" />
            <h2>Graphic Design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service-card">
            <img src={github} alt="" />
            <h2>Github</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service-card">
            <img src={android} alt="" />
            <h2>Android</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service-card">
            <img src={ios} alt="" />
            <h2>Apple</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service-card">
            <img src={dribble} alt="" />
            <h2>Dribble</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="service-card">
            <img src={slack} alt="" />
            <h2>Slack</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
