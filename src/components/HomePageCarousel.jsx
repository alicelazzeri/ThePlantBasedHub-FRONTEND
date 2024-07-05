import { Carousel } from "react-bootstrap";
import img1 from "../assets/images/veggies.jpg";
import img2 from "../assets/images/groceries.jpg";
import img3 from "../assets/images/fruitsandveggies.jpg";
import img4 from "../assets/images/carrots.jpg";
import img5 from "../assets/images/peas.jpg";
import img6 from "../assets/images/veg-pot.jpg";

const HomePageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} className="slideImage" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className="slideImage" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className="slideImage" alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} className="slideImage" alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} className="slideImage" alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img6} className="slideImage" alt="Sixth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePageCarousel;
