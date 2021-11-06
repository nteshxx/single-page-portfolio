import client1 from "../../Assets/luci.jpg";
import { Carousel } from "react-bootstrap";
import "./Clients.css";

const Clients = () => {
  return (
    <div id="clients">
      <div className="reviews">
        <div className="review-container">
          <h1>
            <span>Our</span> Clients
          </h1>
          <p className="review-subheading">
            We provide best solution websites for your business needs.
          </p>
          <div className="slider">
            <Carousel variant="dark">
              <Carousel.Item interval={2000}>
                <div className="slide">
                  <img src={client1} alt="" />
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. <br />
                    <br />
                    <span id="client-name">- Lucifer, Company ABC</span>
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="slide">
                  <img src={client1} alt="" />
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                    <br />
                    <br />
                    <span id="client-name">- Lucifer, Company ABC</span>
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="slide">
                  <img src={client1} alt="" />
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                    <br />
                    <br />
                    <span id="client-name">- Lucifer, Company ABC</span>
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div className="slide">
                  <img src={client1} alt="" />
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                    <br />
                    <br />
                    <span id="client-name">- Lucifer, Company ABC</span>
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
