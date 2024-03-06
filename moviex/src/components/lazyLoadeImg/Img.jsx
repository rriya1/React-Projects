//this component renders an image in blur
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component"; //provides the lazy loading feature.
import "react-lazy-load-image-component/src/effects/blur.css"; //CSS for a blur effect that can be applied to images as they are being loaded.

const Img = ({ src, className }) => {
	//src is the url of the image, the prop
	return (
		<LazyLoadImage
			className={className || ""}
			alt=""
			effect="blur" //blur effect will be applied
			src={src} //image url
		/>
	);
};

export default Img;
