import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProjectComponent from "@/components/avenues/ProjectComponent";

const projectData = [
	{
		title: "Serpente",
		description:
			'"Serpente," led by Rotaract Alumni Mora, aims to raise awareness and protect Sri Lanka\'s diverse snake species. The project includes webinars and a donation phase chaired by Rtr. Samanthika Rajapaksha.One webinar, "Snake Capturing and Wildlife Conservation," featured Snake Rescuer Mr. Bhasuru Prabashwara as the guest speaker. Held at Bodhiraja Primary College in Sinhala, this interactive session educates and dispels myths about snakes, emphasizing responsible wildlife management for their conservation.',
		imageUrl: "/avenues/environ/ser.jpg",
		imageOnLeft: true,
	},
	{
		title: "Marathon towards greenery",
		description:
			"\"Marathon Towards Greenery\" is a Sri Lankan initiative advocating for sustainable land ecosystem management. It seeks to address the country's vulnerability to natural disasters and adverse weather by promoting tree planting and reforestation while fostering global environmental awareness.The project's primary objective is to cultivate a sense of responsibility, particularly among the younger generation, for environmental protection. It emphasizes urban tree planting to restore ecological balance and enhance urban living conditions.The initiative encompasses two sub-projects:Gaga Addara: This project focuses on conserving riverbanks and ecosystems by planting and maintaining trees. It aims to combat ecosystem deterioration caused by human activities like construction, invasive plant species, and air pollution.Do You Know Flyer Series: An awareness project conducted on social media platforms targeting the general public. Its goal is to enhance global knowledge about environmental and wildlife issues, inspiring environmentally friendly lifestyles. Topics covered include climate change, wildlife conservation, and ecological facts, shared through Facebook, Instagram, and WhatsApp to raise environmental consciousness worldwide.",
		imageUrl: "/avenues/environ/ganga.jpg",
		imageOnLeft: false,
	},
];

function Environmental() {
	return (
		<>
			<Navbar />
			<PageHeader title="Avenues" />
			<Center>
				<Box maxW="xl" textAlign="center" py={8}>
					<Heading as="h1" size="xl" mb={4}>
						Environmental Services
					</Heading>
				</Box>
			</Center>
			{projectData.map((project, index) => (
				<Center key={index}>
					<ProjectComponent
						title={project.title}
						description={project.description}
						imageUrl={project.imageUrl}
						imageOnLeft={project.imageOnLeft}
					/>
				</Center>
			))}
			<Footer />
		</>
	);
}

export default Environmental;
