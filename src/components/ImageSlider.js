import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from "react-responsive-carousel";
// Import your CSS file for styling

function ImageSlider() {
	const images = [
		{
			src: "/home/vogue.png",
			alt: "Image 1",
			overlayText:
				"In its 11th year of operation, the Rotaract Club of Alumni of the University of Moratuwa continues to implement sustainable programs aimed at serving the community as active youth within the nation. Over the years, the club has nurtured and cultivated a strong relationship with the Rotaract Club of the University of Moratuwa. From its humble beginnings with 20 members, the club has steadily grown its membership to over 80 active participants. The club's ongoing endeavors receive unwavering support from former members spanning the globe.The annual theme of the club, Limitless You for a Passion-Driven Future, underscores the importance of lifting the peers while serving the community. The club remains steadfast in its commitment to building enduring connections and fostering a sense of belonging among its members, a vision that has been wholeheartedly embraced by Rotaract Alumni Mora. Through fellowship, they have cultivated a nurturing environment that inspires everyone to pursue excellence and realize their fullest potential. The Rotaract Alumni Mora continues to achieve remarkable feats and make a substantial impact on the world through continuous growth and improvement.",
			overlayColor: "rgba(0, 0, 0, 0.5)", // Change this color as desired
		},
		{
			src: "/home/martelo.jpg",
			alt: "Image 2",
			overlayText:
				"In its 11th year of operation, the Rotaract Club of Alumni of the University of Moratuwa continues to implement sustainable programs aimed at serving the community as active youth within the nation. Over the years, the club has nurtured and cultivated a strong relationship with the Rotaract Club of the University of Moratuwa. From its humble beginnings with 20 members, the club has steadily grown its membership to over 80 active participants. The club's ongoing endeavors receive unwavering support from former members spanning the globe.The annual theme of the club, Limitless You for a Passion-Driven Future, underscores the importance of lifting the peers while serving the community. The club remains steadfast in its commitment to building enduring connections and fostering a sense of belonging among its members, a vision that has been wholeheartedly embraced by Rotaract Alumni Mora. Through fellowship, they have cultivated a nurturing environment that inspires everyone to pursue excellence and realize their fullest potential. The Rotaract Alumni Mora continues to achieve remarkable feats and make a substantial impact on the world through continuous growth and improvement.",
			overlayColor: "rgba(0, 0, 0, 0.5)", // Change this color as desired
		},

		{
			src: "/home/env.png",
			alt: "Image 4",
			overlayText:
				"In its 11th year of operation, the Rotaract Club of Alumni of the University of Moratuwa continues to implement sustainable programs aimed at serving the community as active youth within the nation. Over the years, the club has nurtured and cultivated a strong relationship with the Rotaract Club of the University of Moratuwa. From its humble beginnings with 20 members, the club has steadily grown its membership to over 80 active participants. The club's ongoing endeavors receive unwavering support from former members spanning the globe.The annual theme of the club, Limitless You for a Passion-Driven Future, underscores the importance of lifting the peers while serving the community. The club remains steadfast in its commitment to building enduring connections and fostering a sense of belonging among its members, a vision that has been wholeheartedly embraced by Rotaract Alumni Mora. Through fellowship, they have cultivated a nurturing environment that inspires everyone to pursue excellence and realize their fullest potential. The Rotaract Alumni Mora continues to achieve remarkable feats and make a substantial impact on the world through continuous growth and improvement.",
			overlayColor: "rgba(0, 0, 0, 0.5)", // Change this color as desired
		},
	];

	return (
		<Carousel
			infiniteLoop={true}
			showArrows={true}
			showThumbs={false}
			autoPlay={true}
			interval={1000}
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

export default ImageSlider;
