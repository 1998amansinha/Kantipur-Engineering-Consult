import React from 'react';
import ArticleWithWordLimit from '../../components/ArticleWithWordLimit/ArticleWithWordLimit';

import image1 from '../../assets/Image1.jpg';
import image2 from '../../assets/Image2.jpg';
import image3 from '../../assets/Image3.jpg';
import image4 from '../../assets/Image4.jpg';
import image5 from '../../assets/Image5.jpg';


import './features.css';

const Features = () => {
  return (
    <div className="kec__features section__padding" id='Features'>
      <div className="gradient__bg section__padding">
        <h1 className='h__headtext'>Our Services</h1>
        <div className="kec__features-container section__padding">

          <div className="kec__features-container_content gradient__box section__padding section__margin">
            <div className="content-wrapper">
              <h1 className="p__header">Architectural Drawing(2D/3D)</h1>
              <div className="image-wrapper">
                <img src={image1} alt="site" />
              </div>
              <ArticleWithWordLimit text={"Architectural drawing is a fundamental skill for architects and designers. It creates precise and detailed drawings of buildings, structures, and spaces. These drawings can communicate design ideas, construction details, and specifications to clients, contractors, and other professionals involved in the construction process."} />
            </div>

          </div>

          <div className="kec__features-container_content gradient__box section__padding section__margin">
            <div className="content-wrapper">
              <h1 className="p__header">IEE/EIA Report</h1>
              <div className="image-wrapper">
                <img src={image2} alt="site" />
              </div>
              <ArticleWithWordLimit text={"the IEE is an initial environmental examination, and it is a. preliminary small study to see if a project harms the. environment while the EIA is a full assessment of the effects. of the project on the environment."} />
            </div>

          </div>

          <div className="kec__features-container_content gradient__box section__padding section__margin">
            <div className="content-wrapper">
              <h1 className="p__header">Vastu Consultation</h1>
              <div className="image-wrapper">
                <img src={image3} alt="site" />
              </div>
              <ArticleWithWordLimit text={"Vastu Shastra is an ancient Indian science that provides guidelines for designing and arranging spaces to enhance positive energy and well-being. If you're offering Vastu consultation services, you may want to structure your consultation in a way that addresses the specific needs and concerns of your clients. "} />
            </div>
            </div>
                
            </div>
          </div>
        </div>
  );
};

export default Features;
