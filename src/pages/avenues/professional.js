import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProjectComponent from "@/components/avenues/ProjectComponent";

const projectData = [
	{
		title: "DIYER",
		description:
			'"DIYer," an innovative initiative by the Rotaract Club of Alumni of the University of Moratuwa, promotes professional development through a Do It Yourself (DIY) approach. This project emphasizes essential handyman skills and knowledge beneficial for entrepreneurial ventures. It targets the general public, especially youth, interested in acquiring practical skills for everyday problem-solving.The project\'s phase focused on "How\'s your bike doing?" and was conducted online. Rtr. PP Paveen Perera, Past President of the Rotaract Club of the University of Moratuwa, led the session. It covered basic bicycle maintenance, including types, cleaning, flat tire repair, braking, cable replacement, gear fixing, and proper gearing, empowering individuals with valuable everyday skills.This year project is mainly focusing on motor mechanics, energy auditing and photography while adding physical workshops. ',
		imageUrl: "/avenues/prof/diyer.jpg",
		imageOnLeft: true,
	},
	{
		title: "En Vogue ",
		description:
			'"En Vogue" is an awareness project by the Rotaract Club of Alumni of the University of Moratuwa, focusing on fabric-making techniques. It comprises sessions such as Beeralu lace crafting, crochet learning, patch point creation, and paper piecing decorations. Due to high demand, the club organized "En Vogue 2.0," a Beeralu-making workshop in collaboration with Nifty Looms. The workshop took place in two phases, aiming to provide hands-on experience in traditional Sri Lankan crafts, starting with Beeralu Weaving. This initiative offers valuable skills to young designers and participants received E-certificates upon completion.This year mainly focusing on How to build your own fashion brand, Beeralu, Batik, Natural Dye, Fundamentals of fashion design and Journey of a designer as paid and free workshop sessions.',
		imageUrl: "/avenues/prof/envgue.jpeg",
		imageOnLeft: false,
	},
	{
		title: "Limitless Horizons",
		description:
			'"Limitless Horizons" is a discussion forum designed to support Sri Lankan undergraduate and graduate students considering higher education. The session offers insights and experiences from accomplished individuals who have pursued advanced studies abroad. Many students face challenges and lack information when contemplating higher education options overseas. This forum addresses these concerns by providing practical solutions, aiding in career alignment, and allowing attendees to engage with experienced experts through a Q&A segment. It aims to empower students in pursuing their academic aspirations with confidence.',
		imageUrl: "/avenues/prof/limit.png",
		imageOnLeft: true,
	},
	{
		title: "Speak Up ",
		description:
			"The \"SpeakUp\" project served as a platform within the Rotaract Club to nurture and refine members' presentation and public speaking abilities. It offered a stage for members to deliver speeches or presentations during monthly meetings, both independently and in collaboration with others. These presentations, ranging from 5 to 15 minutes, covered a wide array of topics, including personal experiences within the Rotaract journey and educational themes such as leadership and sustainability. With an online audience of approximately 30 to 50 participants, up to 12 speakers had the opportunity to share their thoughts and ideas.Through a rotational system, members gained valuable experience speaking on diverse subjects, creating an enriching educational environment. The project not only bolstered speakers' confidence but also cultivated a supportive atmosphere for expressing ideas and passions. Regular feedback from participants further ensured the project's continuous improvement and catered to individual needs in honing public speaking skills.",
		imageUrl: "/avenues/prof/speak.jpeg",
		imageOnLeft: false,
	},
];

function Professional() {
	return (
		<>
			<Navbar />
			<PageHeader title="Avenues" />
			<Center>
				<Box maxW="xl" textAlign="center" py={8}>
					<Heading as="h1" size="xl" mb={4}>
						Professional Development
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

export default Professional;
