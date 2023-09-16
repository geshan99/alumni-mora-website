import React from "react";
import {
	Box,
	Flex,
	Text,
	Image,
	UnorderedList,
	ListItem,
	Stack,
} from "@chakra-ui/react";

function LeftImageSection({ imageUrl, title, subtitle, points }) {
	return (
		<Stack
			direction={{ base: "column", md: "row" }}
			align="center"
			justify="center"
			mb="10"
			spacing="4" // Space between items
		>
			{/* Left Image */}
			<Image
				src={imageUrl}
				alt="Image"
				boxSize={{ base: "100%", md: "500px" }}
				objectFit="cover"
				mb={{ base: "4", md: "0" }}
				borderRadius={{ base: "0px", lg: "10px" }}
			/>

			{/* Right Content */}
			<Box>
				{/* Pink Title */}
				<Text color="pink.500" fontSize="xl" fontWeight="bold" mb="2">
					{title}
				</Text>

				{/* Black Bold Subtitle */}
				<Text color="black" fontWeight="bold" fontSize="lg" mb="4">
					{subtitle}
				</Text>

				{/* Bullet Points */}
				<UnorderedList listStyleType="disc" ml="4">
					{points.map((point, index) => (
						<ListItem
							key={index}
							color="black"
							fontSize="md"
							mb="2"
						>
							{point}
						</ListItem>
					))}
				</UnorderedList>
			</Box>
		</Stack>
	);
}

export default LeftImageSection;
