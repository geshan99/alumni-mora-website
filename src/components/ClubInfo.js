import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const ClubInfo = () => {
	return (
		<Box textAlign="center">
			<Heading as="h1" fontSize="xl" mb={4}>
				Sponsored by Rotary Club of Colombo West
			</Heading>
			<Heading as="h2" fontSize="lg" color="gray.600">
				2013 - Charter year
			</Heading>
		</Box>
	);
};

export default ClubInfo;
