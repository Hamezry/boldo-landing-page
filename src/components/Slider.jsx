import React, { useEffect, useRef } from "react";
import { boldoImg, presto } from "../../public/assets";

const Slider = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (trackRef.current) {
        trackRef.current.scrollLeft += 2; 
      }
    }, 20); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="client-slider overflow-hidden py-14">
      <div className="slide-track w-full flex items-center gap-16" ref={trackRef}>
        {renderClientLogo(boldoImg, "Boldo")}
        {renderClientLogo(presto, "Presto")}
        {renderClientLogo(boldoImg, "Boldo")}
        {renderClientLogo(presto, "Presto")}
        {renderClientLogo(boldoImg, "Boldo")}
        {renderClientLogo(presto, "Presto")}
        {renderClientLogo(boldoImg, "Boldo")}
        {renderClientLogo(presto, "Presto")}
        {renderClientLogo(boldoImg, "Boldo")}
        {renderClientLogo(presto, "Presto")}
        
      </div>
    </div>
  );
};


const renderClientLogo = (logo, name) => (
  <div className="slide flex items-center">
    <span className="flex items-center gap-3">
      <img src={logo} className="h-7" alt={`${name} logo`} />
      <p className="text-[#0A2640] font-bold text-2xl xs:text-4xl ml-1">
        {name}
      </p>
    </span>
  </div>
);

export default Slider;





