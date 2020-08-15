import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carousel({
  children,
  config,
  itemRenderer = () => null,
}) {
  const defaultConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    slidesPerRow: 4,
    ...config,
  };

  return <Slider {...defaultConfig}>{children}</Slider>;
}

export function CarouselMultipleItems({
  children,
  config,
  itemRenderer = () => null,
}) {
  const defaultConfig = {
    centerMode: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    rows: 4,
    slidesPerRow: 4,
    ...config,
  };
  return (
    <Slider {...defaultConfig}>
      {children}
    </Slider>
  );
}
