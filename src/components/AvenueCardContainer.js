// CardContainer.js
import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import AvenueCard from "./AvenueCard";

const AvenueCardContainer = ({ cardData }) => {
	return (
		<Box p={4} marginLeft={[5, 0, 10, 5]}>
			<Grid
				templateColumns={[
					"repeat(auto-fill, minmax(300px, 1fr))",
					"repeat(auto-fill, minmax(300px, 1fr))",
					"repeat(auto-fill, minmax(300px, 1fr))",
					"repeat(auto-fill, minmax(250px, 1fr))",
				]}
				gap={2}
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
