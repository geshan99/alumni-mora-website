import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
// Import your CSS file for styling

function AwardSlider() {
	const images = [
		{ src: "/awards/awd1.jpg", alt: "awd1" },
		{ src: "/awards/awd2.jpg", alt: "awd2" },
		{ src: "/awards/awd3.jpg", alt: "awd3" },
		{ src: "/awards/awd4.jpg", alt: "awd4" },
		{ src: "/awards/awd5.jpg", alt: "awd5" },
	];

	return (
		<Carousel
			infiniteLoop={true}
			showArrows={true}
			showThumbs={false}
			autoPlay={true}
			interval={1000}
			showStatus={false}
		>
			{images.map((image, index) => (
				<div key={index}>
					<div className="image-container">
						<img src={image.src} alt={image.alt} />
						<div
							className="overlay"
							style={{ backgroundColor: image.overlayColor }}
						></div>
					</div>
				</div>
			))}
		</Carousel>
	);
}

export default AwardSlider;
