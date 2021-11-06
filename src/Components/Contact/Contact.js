import "./Contact.css";
import phone from "../../Assets/phone.svg";
import email from "../../Assets/email.svg";
import location from "../../Assets/location.svg";

const Contact = () => {
  return (
    <div id="contacts">
      <div id="contact-container">
        <h1>
          Contact <span>Us</span>
        </h1>
        <div id="contact-card-wrapper">
          <div id="contact-card">
            <img src={phone} alt="" />
            <h1>Call Us on</h1>
            <h6>+91 888 888 1234</h6>
          </div>
          <div id="contact-card">
            <img src={email} alt="" />
            <h1>Email Us at</h1>
            <h6>react@localhost.com</h6>
          </div>
          <div id="contact-card">
            <img src={location} alt="" />
            <h1>Visit Us at</h1>
            <h6>Mumbai, Maharashtra · In LODHA Xperia Mall</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
