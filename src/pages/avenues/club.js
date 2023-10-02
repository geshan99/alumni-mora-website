import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProjectComponent from "@/components/avenues/ProjectComponent";

const projectData = [
	{
		title: "Fellowship diaries ",
		description:
			"In RI year 2022-23 this project aimed to strengthen bonds between Rotaract clubs, cultivate new friendships, and contribute to societal betterment through collaboration. It unfolded in three phases, involving visits to various Rotaract clubs across the country.In the first phase, the project team journeyed to the Rotaract Club of Hatton Kotagala for a two-day visit. The visit featured cultural and culinary exchanges, as well as sightseeing, fostering deeper connections and friendships. The second phase took the team to the Rotaract Club of Negombo for a day of fellowship and goodwill. The visit included a heartwarming visit to an elder's home, followed by a donation to the Anadapura Children's Home. The day concluded with joint activities at a church and the beach, further strengthening bonds.In the third phase, the team visited the Rotaract Club of Matale during the club's annual trip. This visit encompassed sightseeing, enjoyable activities, fellowship, and a meaningful tree planting initiative in the Naula area near the Kandalama Wewa feeder canal. These interactions promoted unity and collaboration among Rotaract clubs while contributing positively to society.",
		imageUrl: "/avenues/club/fellow.jpg",
		imageOnLeft: true,
	},
	{
		title: "Let’s meet ",
		description:
			'In RI year 2022-23, this project aimed to foster camaraderie among members. Five unique events were held over the year, including a virtual "Truth and Lies" session, a "Guess the Song" competition, a heartwarming Christmas celebration with children at the Noguchi Child Development Center, a lively "Cricket Night" at Club Fusion, and a joyful "Trivia Night" in collaboration with the Rotaract Club of Mount Carmel College, India, to celebrate the International Day of Happiness. These events brought members together, promoting fun, bonding, and friendship.',
		imageUrl: "/avenues/club/lets.png",
		imageOnLeft: false,
	},
	{
		title: "Mithuru Sulaga",
		description:
			'"Mithuru Sulanga" is a special project that brings together the Rotaract Club of the University of Moratuwa and the Rotaract Club of Alumni of the University of Moratuwa, strengthening their bonds. This event features a musical show where both current and former members showcase their musical talents, spreading joy and gratitude among fellow Rotaractors. Attendees don sarongs and lungis to enjoy the melodious tunes and also indulge in stand-up comedy. It\'s a delightful celebration of music and fellowship that leaves a lasting impact on all participants, both within and outside the Rotaract community.',
		imageUrl: "/avenues/club/",
		imageOnLeft: true,
	},
	{
		title: "Club Trip",
		description:
			"The Rotaract Club of Alumni of the University of Moratuwa embarked on a memorable two-day trip to Matale on April 30th and May 1st, 2023. This project aimed to foster camaraderie among club members while exploring the stunning natural beauty of Sri Lanka's hill country. The itinerary included visits to renowned tourist destinations in Matale, such as Sembuwaththa, Riverston, Pitawala Pathana, and the Knuckles Mountain Range.Club service directors led the project's organization, with strong support from members who worked diligently to plan and execute a seamless trip, handling transportation, meals, and accommodations. The collaboration with the Rotaract Club of Matale was pivotal, as they provided valuable resources and assistance, contributing significantly to the project's overall success.",
		imageUrl: "/avenues/club/",
		imageOnLeft: false,
	},
	{
		title: "Coffee with Alumni Mora",
		description:
			"\"Coffee with Alumni Mora\" is an orientation program organized by the Rotaract Alumni Mora. While initially aimed at welcoming the incoming batch, it was open to senior batches unfamiliar with the club. The event's objective was to raise awareness among University of Moratuwa undergraduates about the club's activities. Directors from each avenue shared their past achievements and future plans during the Rotary International year. Entertainment segments kept the crowd engaged, and a concluding Kahoot quiz assessed their involvement in the presentations, measuring their engagement with the club's initiatives. Furthermore panel discussions were conducted with the presence of outstanding past members of the club.",
		imageUrl: "/avenues/club/",
		imageOnLeft: true,
	},
];

function Club() {
	return (
		<>
			<Navbar />
			<PageHeader title="Avenues" />
			<Center>
				<Box maxW="xl" textAlign="center" py={8}>
					<Heading as="h1" size="xl" mb={4}>
						Club Services
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

export default Club;
