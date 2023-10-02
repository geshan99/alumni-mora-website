import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProjectComponent from "@/components/avenues/ProjectComponent";

const projectData = [
	{
		title: "Sports buddies",
		description:
			'"Sports Buddies" is a thriving project that has entered its fourth year. It involves biweekly sports sessions, including futsal, cricket, and badminton, organized for club members. The primary objective is to help members relax both physically and mentally, enhancing their work-life balance and leisure experiences. These sports activities serve as a refreshing break, allowing individuals to release stress and enjoy their free time. By participating in these sessions, members can prioritize their physical and mental well-being, promoting fitness and providing respite from daily responsibilities. In summary, "Sports Buddies" offers an ongoing opportunity for members to engage in sports activities that enrich their leisure moments and contribute to a healthier work-life balance.',
		imageUrl: "/avenues/sports/budies.jpg",
		imageOnLeft: true,
	},
	{
		title: "Mora Smash",
		description:
			"The Mora Smash Badminton Tournament, jointly organized by the Rotaract Club of Alumni of University of Moratuwa and Rotaract Club of University of Moratuwa, was a competitive and spirited event held at the University of Moratuwa's gymnasium. Participants from multiple universities and clubs engaged in intense badminton matches, vying for the championship. The tournament garnered substantial support from enthusiastic spectators who passionately cheered on the players, creating an atmosphere of sportsmanship and camaraderie. Overall, the tournament proved to be a resounding success, highlighting the joy of competitive badminton and fostering a sense of unity among participants.",
		imageUrl: "/avenues/sports/smash.jpg",
		imageOnLeft: false,
	},
];

function Sports() {
	return (
		<>
			<Navbar />
			<PageHeader title="Avenues" />
			<Center>
				<Box maxW="xl" textAlign="center" py={8}>
					<Heading as="h1" size="xl" mb={4}>
						Sports and Recreational Activities
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

export default Sports;
