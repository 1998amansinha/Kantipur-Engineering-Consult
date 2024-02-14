import React from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import {
  Image4,
  Image5,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15
} from './images';
import './gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  };

  return (
    <div className="kec__gallery section__padding">
      <div className="kec__gallery-container gradient__bg section__padding  " >

        <div className="kec__gallery-content ">
          <h1 className="h__headtext">Photo Gallery</h1>
          <p className='p__para'>Embark on a journey through our splendid assemblage, where each frame tells a tale of innovation, craftsmanship, and boundless creativity.</p>

          <div className="kec__gallery-images section__padding">
            <div className="kec__gallery-images_container" ref={scrollRef}>
              {[Image4, Image5, Image7, Image8, Image9,Image10, Image11, Image12, Image13, Image14, Image15].map((images, index) => (
                <div className="kec__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
                  <img src={images} alt="gallery_image" />
                </div>
              ))}
            </div>
            <div className="kec__gallery-images_arrows">
              <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
              <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Gallery;