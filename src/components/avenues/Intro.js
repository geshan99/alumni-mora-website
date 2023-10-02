import React from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

const Intro = ({ title, description }) => {
	return (
		<Center>
			<Box maxW="xl" textAlign="center" py={8}>
				<Heading as="h1" size="xl" mb={4}>
					{title}
				</Heading>
				<Text fontSize="lg" color="gray.600">
					{description}
				</Text>
			</Box>
		</Center>
	);
};

export default Intro;
