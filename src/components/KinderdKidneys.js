// KindredKidneys.js
import React from "react";
import {
	Box,
	Heading,
	Text,
	Button,
	Image,
	Flex,
	Center,
} from "@chakra-ui/react";

const KindredKidneys = ({
	title,
	description,
	buttonText,
	imageUrl,
	fundUrl,
}) => {
	return (
		<Center>
			<Box
				p={4}
				borderRadius="lg"
				display={{ base: "block", md: "flex" }}
				alignItems="center"
				maxW="900px"
				textAlign={{ base: "center", md: "left" }}
			>
				<Image
					src={imageUrl}
					alt={title}
					w={{ base: "300px", md: "300px" }}
					h={{ base: "300px", md: "300px" }}
					mb={{ base: 4, md: 0 }}
					mr={{ base: 0, md: 14 }}
					ml={[5, 0, 0]}
				/>
				<Box flex="1">
					<Heading as="h2" size="md" mb={2}>
						{title}
					</Heading>
					<Text fontSize="md" color="gray.600" mb={4} align="justify">
						{description}
					</Text>
					<Button colorScheme="blue">
						<a href={fundUrl} target="_blank">
							{buttonText}
						</a>
					</Button>
				</Box>
			</Box>
		</Center>
	);
};

export default KindredKidneys;
