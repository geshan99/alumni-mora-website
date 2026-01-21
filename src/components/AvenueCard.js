// Card.js
import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

const AvenueCard = ({ icon, title, description }) => {
	return (
		<Box
			w="100%"
			maxW={["100%", "100%", "100%", "250px"]}
			h="100%"
			borderWidth="1px"
			borderRadius="lg"
			overflow="hidden"
			boxShadow="md"
			p={4}
			display="flex"
			flexDirection="column"
			transition="transform 0.3s" // Add transition effect for scaling
			_hover={{
				transform: "scale(1.05)",
				cursor: "pointer",
				color: "teal.800",
			}}
			bg="teal.50"
		>
			<Flex align="center" justify="center" h="100px" flexShrink={0}>
				<Image src={icon} alt={title} w="80px" h="80px" />
			</Flex>
			<Box p={4} flex="1" display="flex" flexDirection="column">
				<Text fontSize="2xl" fontWeight="bold" mb={2} align="center">
					{title}
				</Text>
				<Text align="center" fontWeight={300} flex="1">
					{description}
				</Text>
			</Box>
		</Box>
	);
};

export default AvenueCard;
