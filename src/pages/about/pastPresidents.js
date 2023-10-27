import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const pastPresidentsData = [
	{
		name: "John Doe",
		imageUrl: "https://bit.ly/dan-abramov",
	},
	{
		name: "Jane Smith",
		imageUrl: "https://bit.ly/dan-abramov",
	},
	{
		name: "John Doe",
		imageUrl: "https://bit.ly/dan-abramov",
	},
	{
		name: "Jane Smith",
		imageUrl: "https://bit.ly/dan-abramov",
	},
	{
		name: "John Doe",
		imageUrl: "https://bit.ly/dan-abramov",
	},
	{
		name: "Jane Smith",
		imageUrl: "https://bit.ly/dan-abramov",
	},
	{
		name: "John Doe",
		imageUrl: "https://bit.ly/dan-abramov",
	},
	{
		name: "Jane Smith",
		imageUrl: "https://bit.ly/dan-abramov",
	},
	// Add more past presidents as needed
];

function PastPresidentsPage() {
	return (
		<>
			<Navbar></Navbar>
			<PageHeader title="About Us"></PageHeader>
			<Flex
				direction="column"
				alignItems="center"
				justifyContent="center"
				padding="2rem"
			>
				<Text fontSize="xl" fontWeight="bold" mb="2rem">
					Boad of Officials
				</Text>
				<Flex flexWrap="wrap" justifyContent="center">
					{pastPresidentsData.map((president, index) => (
						<Box key={index} m="1rem" textAlign="center">
							<Image
								src={president.imageUrl}
								alt={president.name}
								width="200px"
								height="200px"
								borderRadius="full"
								marginBottom="0.5rem"
							/>
							<Text>{president.name}</Text>
						</Box>
					))}
				</Flex>
			</Flex>
			<Footer></Footer>
		</>
	);
}

export default PastPresidentsPage;
