// AwardGroup.js
import React from "react";
import { Box, Heading, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const AwardGroup = ({ heading, subHeading, awards }) => {
	return (
		<Box p={4} mx={[0, 0, 2, 0]}>
			<Heading as="h2" size={["lg", "sm", "md"]} mb={2}>
				{heading}
			</Heading>
			<Text fontSize="md" color="gray.600" mb={4}>
				{subHeading}
			</Text>
			<UnorderedList>
				{awards.map((award, index) => (
					<ListItem key={index}>{award}</ListItem>
				))}
			</UnorderedList>
		</Box>
	);
};

export default AwardGroup;
