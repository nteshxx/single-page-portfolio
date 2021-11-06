import "./Blog.css";
import article1 from "../../Assets/work3.jpg";
import article2 from "../../Assets/work2.jpg";
import article3 from "../../Assets/work6.jpg";

const Blogs = () => {
  return (
    <div id="blogs">
      <h1 id="blog-heading">
        <span>Our</span> Blog
      </h1>
      <p>We provide high standard website solutions for your business</p>
      <div id="blog-card-wrapper">
        <div id="blog-card">
          <div id="blog-img-wrapper">
            <img id="blog-img" src={article1} alt="" />
          </div>
          <div id="blog-card-content">
            <a href="/">
              <h1>Occusamus en iousto odio</h1>
            </a>
            <span>May 21, 2021</span>
            <p>
              Leo integer malesuada nunc vel risus commodo. Pulvinar etiam non
              quam lacus suspendisse faucibus interdum posuere. Feugiat pretium
              nibh ipsum consequat nisl vel pretium.
            </p>
            <a id="readmore" href="/">
              Read more
            </a>
          </div>
        </div>
        <div id="blog-card">
          <div id="blog-img-wrapper">
            <img id="blog-img" src={article2} alt="" />
          </div>
          <div id="blog-card-content">
            <a href="/">
              <h1>Occusamus en iousto odio</h1>
            </a>
            <span>May 21, 2021</span>
            <p>
              Leo integer malesuada nunc vel risus commodo. Pulvinar etiam non
              quam lacus suspendisse faucibus interdum posuere. Feugiat pretium
              nibh ipsum consequat nisl vel pretium.
            </p>
            <a id="readmore" href="/">
              Read more
            </a>
          </div>
        </div>
        <div id="blog-card">
          <div id="blog-img-wrapper">
            <img id="blog-img" src={article3} alt="" />
          </div>
          <div id="blog-card-content">
            <a href="/">
              <h1>Occusamus en iousto odio</h1>
            </a>
            <span>May 21, 2021</span>
            <p>
              Leo integer malesuada nunc vel risus commodo. Pulvinar etiam non
              quam lacus suspendisse faucibus interdum posuere. Feugiat pretium
              nibh ipsum consequat nisl vel pretium.
            </p>
            <a id="readmore" href="/">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
