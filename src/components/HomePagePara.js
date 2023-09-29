import React from "react";
import { Box, Text, Flex, Center } from "@chakra-ui/react";

function HomePagePara({ content }) {
	return (
		<Center>
			<Box
				maxW="4xl"
				borderRadius="lg"
				overflow="hidden"
				p={4}
				m={[2, 4, 1]}
			>
				<Flex justifyContent="space-between" alignItems="center"></Flex>
				<Text
					mt={2}
					align={["justify", "center", "center"]}
					fontSize={[16, 16, 18]}
				>
					{content}
				</Text>
			</Box>
		</Center>
	);
}

export default HomePagePara;
