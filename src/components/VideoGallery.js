import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const videos = [
	{
		id: "FXaEzig0pQE?si=9dWzhtui-N1U3C09",
		title: "Video 1",
	},
	{
		id: "FXaEzig0pQE?si=9dWzhtui-N1U3C09",
		title: "Video 2",
	},
	{
		id: "FXaEzig0pQE?si=9dWzhtui-N1U3C09",
		title: "Video 3",
	},
	{
		id: "FXaEzig0pQE?si=9dWzhtui-N1U3C09",
		title: "Video 3",
	},
	{
		id: "FXaEzig0pQE?si=9dWzhtui-N1U3C09",
		title: "Video 3",
	},
	{
		id: "FXaEzig0pQE?si=9dWzhtui-N1U3C09",
		title: "Video 3",
	},
	// Add more videos as needed
];

const VideoGallery = () => {
	return (
		<Box p="4">
			<Grid
				templateColumns={{
					base: "repeat(1, 1fr)",
					md: "repeat(2, 1fr)",
					lg: "repeat(3, 1fr)",
				}}
				gap="4"
			>
				{videos.map((video) => (
					<GridItem key={video.id}>
						<Box
							borderWidth="1px"
							borderRadius="md"
							overflow="hidden"
						>
							<iframe
								width="100%"
								height="200"
								src={`https://www.youtube.com/embed/${video.id}`}
								title={video.title}
								frameBorder="0"
								allowFullScreen
							></iframe>
						</Box>
					</GridItem>
				))}
			</Grid>
		</Box>
	);
};

export default VideoGallery;
