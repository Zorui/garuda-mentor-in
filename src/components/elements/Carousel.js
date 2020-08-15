import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { css } from 'emotion';

import LeftArrow from '../../assets/svg/LeftArrow';
import RightArrow from '../../assets/svg/RightArrow';

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

export function CarouselMultipleItems({ children, config }) {
  const slideref = useRef();
  console.log('slideRef:', slideref);
  function NextPg() {
    return (
      <button
        onClick={() => slideref.current.slickNext()}
        className={styles.multi_item_button}
      >
        <RightArrow />
      </button>
    );
  }

  function PrevPg() {
    return (
      <button
        onClick={() => slideref.current.slickPrev()}
        className={styles.multi_item_button}
      >
        <LeftArrow />
      </button>
    );
  }

  const defaultConfig = {
    infinite: false,
    slidesToShow: 1,
    speed: 500,
    rows: 4,
    slidesPerRow: 4,
    swipe: false,
  };
  return (
    <>
      <Slider ref={slideref} {...defaultConfig}>
        {children}
      </Slider>
      <div className={styles.multi_item_container}>
        <PrevPg />
        <NextPg />
      </div>
    </>
  );
}

const styles = {
  multi_item_button: css`
    display: inline-block !important;
    width: 50px;
    background-color: transparent;
    border: none;
    &:focus {
      outline: none;
      border: none;
    }
  `,
  multi_item_container: css`
    text-align: center;
  `,
};
