import React from "react";
import { Box, Text } from "@chakra-ui/react";

function ProjectBox() {
	return (
		<Box
			bg="white"
			boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)" // Apply box shadow
			p={{ base: "4", md: "10" }} // Adjust padding for small and medium screens
			borderRadius="8px" // Border radius
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection={{ base: "column", md: "row" }} // Stack content for small screens, row for medium and above
			textAlign="center" // Center text
			m={{ base: "20px", md: "30px 150px" }} // Adjust margin for small and medium screens
		>
			<Text
				fontSize={{ base: "sm", lg: "lg" }}
				fontWeight="500"
				mb={{ base: "4", md: "0" }}
			>
				<Text
					fontSize={{ base: "2xl", lg: "4xl" }}
					fontWeight="bold"
					display="inline"
					color="pink.500"
				>
					10+
				</Text>{" "}
				IMPACTFUL ANNUAL PROJECTS
			</Text>
			<Text
				fontSize={{ base: "sm", lg: "lg" }}
				ml={{ base: "0", md: "4" }}
				fontWeight="500"
			>
				<Text
					fontSize={{ base: "2xl", lg: "4xl" }}
					fontWeight="bold"
					display="inline"
					color="pink.500"
				>
					400
				</Text>{" "}
				VOLUNTEER HOURS
			</Text>
		</Box>
	);
}

export default ProjectBox;
