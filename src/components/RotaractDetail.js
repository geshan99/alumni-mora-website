import React from "react";
import { Box, Text, Heading, Stack, Center } from "@chakra-ui/react";

const RotaractDetails = () => {
	return (
		<Center>
			<Box
				bg="gray.100"
				p={4}
				borderRadius="lg"
				boxShadow="md"
				maxW="300px"
				textAlign="center"
			>
				<Heading as="h2" size="md" mb={2}>
					Rotaract Alumni Mora
				</Heading>
				<Text fontSize="sm" color="gray.600" mb={4}>
					Sponsored by Rotary Club of Colombo West
				</Text>
				<Stack spacing={2}>
					<Text fontSize="lg" fontWeight="bold">
						Charter Year: 2013
					</Text>
					<Text fontSize="lg" fontWeight="bold">
						Membership: 80+
					</Text>
					<Text fontSize="lg" fontWeight="bold">
						Volunteer Hours: 10,000+
					</Text>
					<Text fontSize="lg" fontWeight="bold">
						Projects: 30+
					</Text>
				</Stack>
			</Box>
		</Center>
	);
};

export default RotaractDetails;
