import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const ProjectComponent = ({ title, description, imageUrl, imageOnLeft }) => {
	return (
		<Flex
			direction={[
				"column",
				"column",
				imageOnLeft ? "row" : "row-reverse",
			]}
			alignItems="center"
			justifyContent="center"
			// borderWidth="1px"
			// borderRadius="lg"
			// boxShadow="md"
			p={2}
			maxW={["100%", "100%", "100%", "1200px"]}
		>
			<Image
				src={imageUrl}
				alt={title}
				mr={[0, 0, 4, 4]}
				mb={[4, 4, , 0, 0]}
				ml={[0, 0, 0, 4]}
				maxW={["100%", "100%", "350px", "400px"]}
			/>
			<Box flex="1">
				<Text fontSize="xl" fontWeight="bold" mb={2}>
					{title}
				</Text>
				<Text fontSize="md" color="gray.600" mb={4} textAlign="justify">
					{description}
				</Text>
			</Box>
		</Flex>
	);
};

export default ProjectComponent;
