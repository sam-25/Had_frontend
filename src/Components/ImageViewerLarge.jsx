import React from 'react';
import { Carousel, Divider } from 'rsuite';
import 'rsuite/Carousel/styles/index.css';
import homePage from './Assets/home-page.jpg'

function ImageViewer({testId}) {
  const [placement, setPlacement] = React.useState('bottom');
  const [shape, setShape] = React.useState('dot');

  return (
    <>
      <Carousel
        key={`${placement}.${shape}`}
        placement={placement}
        shape={shape}
        className="custom-slider"
        style={{ height: '100%' }}
      >
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=1" height="250" />
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2" height="250" />
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3" height="250" />
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4" height="250" />
        <img src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5" height="250" />
        <img src={homePage} height="250" />
      </Carousel>
    </>
  );
}

export default ImageViewer;
