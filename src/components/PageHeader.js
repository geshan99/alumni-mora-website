import React from "react";
import { Box, Text } from "@chakra-ui/react";

function PageHeader({ title }) {
	return (
		<Box
			bg="black"
			color="white"
			py="20" // Padding on the Y-axis (top and bottom)
			textAlign="center"
		>
			<Text fontSize="2xl">{title}</Text>
		</Box>
	);
}

export default PageHeader;
