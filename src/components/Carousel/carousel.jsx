import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/asusbanner.webp"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/ryzen23.webp"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/amd-ryzen.webp"
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;