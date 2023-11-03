import React from "react";
import Lottie from "lottie-react";
import animationData from "../components/cons.json";
import { Center, Heading, Box } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Blog() {
	return (
		<Box>
			<Navbar />
			<Center
				flexWrap="wrap"
				flexDirection={{ base: "column", md: "row" }}
			>
				<Box
					flex="1"
					textAlign={{ base: "center", md: "left" }}
					pr={{ base: 0, md: 10 }}
				>
					<Heading size="xl" ml={{ base: 0, lg: 20, md: 10 }}>
						Blog is under construction
					</Heading>
				</Box>
				<Box flex="1" textAlign={{ base: "center", md: "right" }}>
					<Lottie animationData={animationData} />
				</Box>
			</Center>
			<Footer />
		</Box>
	);
}

export default Blog;
