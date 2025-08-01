import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { assets } from '../../assets/assets';

const ExampleCarouselImage = ({ text, src }) => (
  <img
    className="d-block w-100"
    src={src} 
    alt={text}
    style={{ height: '400px', objectFit: 'cover' }} 
  />
);

function Header() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" src={assets.header_img} />
        <Carousel.Caption>
          <h3>Explore the Universe</h3>
          <p>Discover the wonders of the cosmos with our advanced telescopes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" src={assets.header_img2} />
        <Carousel.Caption>
          <h3>Journey to the Stars</h3>
          <p>Embark on a stellar adventure with cutting-edge technology.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" src={assets.header_img3}/>
        <Carousel.Caption>
          <h3>Unveil Cosmic Mysteries</h3>
          <p>Unlock the secrets of the universe with our research tools.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;