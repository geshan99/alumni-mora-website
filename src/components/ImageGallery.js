// ImageGallery.js
import React from "react";
import { Flex, Box, Image, SimpleGrid } from "@chakra-ui/react";

const ImageGallery = () => {
	const imageUrls = [
		"/awards/awd1.jpg",
		"/awards/awd2.jpg",
		"/awards/awd3.jpg",
		"/awards/awd4.jpg",
		"/awards/awd5.jpg",
	];

	return (
		<Flex justify="center" p={4}>
			<SimpleGrid columns={[1, 2, 3, 4, 5]} spacing={4}>
				{imageUrls.map((imageUrl, index) => (
					<Box key={index} w="100%">
						<Image src={imageUrl} alt={`Image ${index + 1}`} />
					</Box>
				))}
			</SimpleGrid>
		</Flex>
	);
};

export default ImageGallery;
