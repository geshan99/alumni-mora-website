// CardContainer.js
import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import AvenueCard from "./AvenueCard";

const AvenueCardContainer = ({ cardData }) => {
	return (
		<Box p={4} width="100%">
			<Grid
				templateColumns={{
					base: "1fr",
					sm: "repeat(2, 1fr)",
					md: "repeat(3, 1fr)",
					lg: "repeat(5, 1fr)",
				}}
				gap={4}
				maxW="1600px"
				mx="auto"
				justifyItems="center"
			>
				{cardData.map((data, index) => (
					<AvenueCard
						icon={data.icon}
						description={data.description}
						title={data.title}
						key={index}
					></AvenueCard>
				))}
			</Grid>
		</Box>
	);
};

export default AvenueCardContainer;
