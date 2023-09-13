import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";

function ImageSlider() {
	return (
		<Carousel
			infiniteLoop={true} // Set to true for infinite loop
			showArrows={true} // Set to true to show navigation arrows
			showThumbs={false} // Set to false to hide thumbnail navigation
			autoPlay={true} // Set to true for autoplay
			interval={1000} // Autoplay interval in milliseconds (3 seconds in this example)
		>
			<div>
				<img
					src="https://images.pexels.com/photos/11948417/pexels-photo-11948417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1"
					alt="Image 1"
				/>
			</div>
			<div>
				<img
					src="https://images.pexels.com/photos/13356682/pexels-photo-13356682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1"
					alt="Image 2"
				/>
			</div>
			<div>
				<img
					src="https://images.pexels.com/photos/17959888/pexels-photo-17959888/free-photo-of-glacier-iceland-snow-wood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=500&dpr=1"
					alt="Image 3"
				/>
			</div>
		</Carousel>
	);
}

export default ImageSlider;
