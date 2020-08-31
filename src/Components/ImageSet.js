import React from "react";
import ImageCard from "../Components/ImageCard.js";
import "./ImageSet.css";

const ImageSet = props => {
  // console.log(props);
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image_grid">{images}</div>;
};

export default ImageSet;
