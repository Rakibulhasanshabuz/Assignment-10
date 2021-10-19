import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/pic1.jpg';
import banner2 from '../../../images/banner/pic2.jpg';
import banner3 from '../../../images/banner/pic3.jpg';

const Banner = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Covid-19 Vaccine</h3>
      <p>COVID-19 vaccines also help keep you from getting seriously ill even if you do get COVID-19. Getting vaccinated yourself may also protect people around you, particularly people at increased risk for severe illness from COVID-19.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Covid-19 Vaccine</h3>
      <p>COVID-19 vaccines also help keep you from getting seriously ill even if you do get COVID-19. Getting vaccinated yourself may also protect people around you, particularly people at increased risk for severe illness from COVID-19.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Covid-19 Vaccine</h3>
      <p>COVID-19 vaccines also help keep you from getting seriously ill even if you do get COVID-19. Getting vaccinated yourself may also protect people around you, particularly people at increased risk for severe illness from COVID-19.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
        </>
    );
};

export default Banner;