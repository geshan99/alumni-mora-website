// Card.js
import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const AvenueCard = ({ icon, title, description }) => {
	return (
		<Box
			maxW={["300px", "300px", "300px", "250px"]}
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			boxShadow="md"
			p={4}
			transition="background-color 0.3s" // Add transition effect
			_hover={{ bg: "teal.200", cursor: "pointer" }} // Change background color on hover
		>
			<Flex align="center" justify="center" h="100px">
				<Image src={icon} alt={title} w="80px" h="80px" />
			</Flex>
			<Box p={4}>
				<Text fontSize="2xl" fontWeight="bold" mb={2} align="center">
					{title}
				</Text>
				<Text align="center">{description}</Text>
			</Box>
		</Box>
	);
};

export default AvenueCard;
