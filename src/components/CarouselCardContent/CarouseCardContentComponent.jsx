import React from 'react';
import CardContentComponent from '../Card/CardContentComponent';
const CarouseCardContentComponent = () => {
  return (
    <div className="carousel rounded-box grid grid-cols-3">
    <div className="carousel-item">
     <CardContentComponent/>
    </div> 
    <div className="carousel-item">
    <CardContentComponent/>
    </div> 
    <div className="carousel-item">
    <CardContentComponent/>
    </div> 
    <div className="carousel-item">
    <CardContentComponent/>
    </div> 
    <div className="carousel-item">
    <CardContentComponent/>
    </div> 
    <div className="carousel-item">
    <CardContentComponent/> 
    </div> 
    <div className="carousel-item">
    <CardContentComponent/>
    </div>
  </div>
  );
}

export default CarouseCardContentComponent;
