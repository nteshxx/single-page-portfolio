import "./Works.css";
import work1 from "../../Assets/work1.jpg";
import work2 from "../../Assets/work2.jpg";
import work3 from "../../Assets/work3.jpg";
import work4 from "../../Assets/work4.jpg";
import work5 from "../../Assets/work5.jpg";
import work6 from "../../Assets/work6.jpg";

const Works = () => {
  return (
    <div id="works">
      <h1 id="work-heading">
        <span>Our</span> Works
      </h1>
      <p>We provide high standard website solutions for your business</p>
      <div id="work-card-wrapper">
        <div id="work-card">
          <div id="work-overlay">
            <span>Category</span>
            <a href="/">Web Development</a>
          </div>
          <img src={work1} alt="" />
        </div>
        <div id="work-card">
          <div id="work-overlay">
            <span>Category</span>
            <a href="/">Web Development</a>
          </div>
          <img src={work2} alt="" />
        </div>
        <div id="work-card">
          <div id="work-overlay">
            <span>Category</span>
            <a href="/">Web Development</a>
          </div>
          <img src={work3} alt="" />
        </div>
        <div id="work-card">
          <div id="work-overlay">
            <span>Category</span>
            <a href="/">Web Development</a>
          </div>
          <img src={work4} alt="" />
        </div>
        <div id="work-card">
          <div id="work-overlay">
            <span>Category</span>
            <a href="/">Web Development</a>
          </div>
          <img src={work5} alt="" />
        </div>
        <div id="work-card">
          <div id="work-overlay">
            <span>Category</span>
            <a href="/">Web Development</a>
          </div>
          <img src={work6} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Works;
