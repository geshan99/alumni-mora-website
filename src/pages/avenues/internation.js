import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProjectComponent from "@/components/avenues/ProjectComponent";

const projectData = [
	{
		title: "Debractor",
		description:
			'"Debractor 3.0" is a debating competition initiated by the Rotaract Club of Alumni of the University of Moratuwa and the Rotaract Club of Kathmandu. This project aims to foster idea-sharing among Rotaractors and enrich their perspectives on significant topics. It unfolded in two phases: Phase 1 centered on the debate about whether "people can control the world more than nature." Held via Zoom, Rotaractors from both clubs formed teams and engaged in a structured debate with stages: "90MM" for initial points, "Do Really" for questioning opponents, and "Ding Dong" for audience participation. Over 30 participants from various Rotaract clubs in Sri Lanka and Nepal attended. The impartial moderator was Rtr. PP Abhijeet from the Rotaract Club of Coimbatore Millennium, RID 3201, India. Phase 2 tackled the impact of technology on human emotional bonds. Seven Rotaractors from eight Rotaract clubs formed teams for this debate, also conducted on Zoom.',
		imageUrl: "/avenues/inter/deb.png",
		imageOnLeft: true,
	},
	{
		title: "Envo warriors",
		description:
			'This major project comprises two sub-projects: "Go Eco" and "Plant Together." "Go Eco" emphasizes sustainability, while "Plant Together" focuses on global plant cultivation and education. Both online and physical activities were planned for knowledge dissemination and practical application. Project Go Eco: In collaboration with the Rotaract Club of Barasoain-SHS-MHPNHS, Philippines, the project included an online article writing competition on innovative solutions for combating overfishing and marine ecosystem restoration. It also featured a webinar on "Save Ocean Life" by Mr. K. M. Sudesh Ruvinda. Plant Together: This project unfolded in two phases. First, a webinar titled "Hear your plants" educated participants on home plant care in partnership with Rotaract clubs from various regions. In the second phase, "Grow your plants," members engaged in physical plantation projects around their homes and local areas. Collaboration involved Rotaract clubs from RID 3131, RID 3030, RID 3291, RID 3170, and more.',
		imageUrl: "/avenues/inter/Envo Warriors.jpg",
		imageOnLeft: false,
	},
	{
		title: "United We stand ",
		description:
			'"United We Stand" is an international service initiative launched in 2018-19 with the goal of fostering fellowship between global Rotaract Clubs. For 2022-23, it featured eight sub-projects, including "Lingo Switch," "Twin Club Agreement," "We Weave," "Cook to Connect," "Tales of Valentine\'s," "Together We Stand," and "Amrit\'s Visit."Lingo Switch 2.0: An international language exchange program with phases covering essential language skills and fostering fellowship.We Weave: A cross-cultural fabric education project with a physical fabric material exchange and discussions on shared techniques.Cook to Connect: An online food-sharing session followed by a physical food donation project to aid the needy.Tales of Valentine\'s: An initiative where participants from different clubs exchanged letters expressing themselves, culminating in a fun event.Twin Club Agreement - Joint General Meeting: A joint meeting to foster connections and share service updates between Rotaract Club of Mount Carmel College, India, and Rotaract Club of Alumni University of Moratuwa.Together We Stand: Focused on building connections with international Rotaract Clubs, involving virtual and physical letterhead exchanges, cultural item exchanges, and cultural visits.Amrit\'s Visit: A fellowship meeting with Rtr. PP Amrit Subedi from Rotaract Club of Pokhara, Nepal & Bhutan, featuring cultural item exchanges and discussions about post-pandemic life.Embracing Connections - Bulletin: A joint bulletin project highlighting the service initiatives of both clubs, emphasizing international service experiences and learnings.',
		imageUrl: "/avenues/inter/United We Stand_.jpg",
		imageOnLeft: true,
	},
];

function Internation() {
	return (
		<>
			<Navbar />
			<PageHeader title="Avenues" />
			<Center>
				<Box maxW="xl" textAlign="center" py={8}>
					<Heading as="h1" size="xl" mb={4}>
						Internation Service
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

export default Internation;
