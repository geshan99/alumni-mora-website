import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import ProjectComponent from "@/components/avenues/ProjectComponent";

const projectData = [
	{
		title: "Kindred Kidneys",
		description:
			"Kindred Kidneys is a community service initiative by the Rotaract Club of Alumni of University of Moratuwa, launched in 2019 to aid Chronic Kidney Disease (CKD) patients in Sri Lanka. In its fourth year, the project expanded with two subprojects: Kindred Kidneys Scholarship Program: This ongoing program supports students from families affected by CKD, aiming to alleviate their financial burdens. It provides a sustainable solution to help families cover the costs associated with CKD diagnosis. Scholarships, each worth LKR 5000, were granted to four students from financially unstable backgrounds in Padaviya and Kesbawa. The program ran throughout the year, ensuring continued support during the club's administration transition. Six sponsors supported this initiative. Kindred Kidneys Donation Phase: This phase aimed to fulfill essential needs of CKD patients by supporting the Samastha Lanka Kidney Patients' Association (SLKPA). A donation of Rs. 118,000.00 was made, which covered the purchase of 12 Dialysis kits (valued at Rs. 101,285,000.00) and cyclosporine tablets (Rs. 27,610.47) to aid kidney patients' treatment. SLKPA is a prominent healthcare organization in Sri Lanka, and this donation helped address CKD patients' medical needs during challenging economic times.",
		imageUrl: "/avenues/community/Kindred Kidneys_.jpg",
		imageOnLeft: true,
	},
	{
		title: "Suwa Arana ",
		description:
			'"Suwa Arana 22.2" by Rotaract Alumni Mora was a blood donation campaign to meet the country\'s blood requirements. It took place at Sri Wijayarama Viharaya, Piliyandala, in collaboration with Siri Wangeesa Dhamma School, targeting the general public."Suwa Arana 22.3" featured a mental well-being webinar focusing on balancing academic life and stress management in Sinhala. Psychotherapist Mrs. Tharu Paranavithana, an expert in psychology, served as the key speaker."Manoma," part of Suwa Arana \'22.4,\' held a physical well-being webinar on promoting physical fitness and a healthy life. Key speakers were Dr. Hansaka Wijemuni, a Medical Officer in Cardiology, and Dr. R.A.N.D. Ranawaka, a sports and exercise medicine physician, both from National Hospital, Kandy.',
		imageUrl: "/avenues/community/Suwa Arana_.jpg",
		imageOnLeft: false,
	},
	{
		title: "Nena Sayura ",
		description:
			'"Nena Sayura" is an educational initiative focused on supporting students in their academic journey and fostering innovation. The project comprises three sub-projects: "Nena Pahana," a seminar series covering G.C.E. Ordinary Level exam subjects; "Inspire Their Future," motivational sessions guiding students on exam preparation, overcoming challenges, and exploring opportunities; and "Aharunu Akuru," a book donation initiative.In the current year, "Nena Pahana" seminars in mathematics and science were conducted for Grade 11 students at St. Matthew’s College, Colombo 09. These sessions, held on Sundays, included discussions on subject matter, exam strategies, and model paper reviews.The motivational session, "Inspire Their Future," featured a well-experienced University of Moratuwa student who discussed exam preparation, educational challenges, and future opportunities. Club members also shared their experiences, and videos on university life were shown."Aharunu Akuru" involved book donations by club members, including children\'s storybooks, novels, educational materials, and general knowledge books. Additional books were purchased with monetary donations. The donation event took place on Children\'s Day 2022, benefiting children at Lady Ridgeway Hospital for Children.',
		imageUrl: "/avenues/community/nana.jpg",
		imageOnLeft: true,
	},
	{
		title: "Share the Joy",
		description:
			"Share the Joy\" aims to spread birthday happiness among Rotaractors and the community. The project has two phases: In the first, donations collected from Rotaractors who celebrated birthdays between May and September were used to provide essential stationery items to Wanarajah Tamil Vidyalam, Dikoya, Hatton. In the second phase, Rotaractors celebrating birthdays from October to April joined forces with the Rotaract Club of Negombo to donate sanitary items, cover the electricity bill, and host an evening tea party for Anadapura Children's Home, Katana, Negombo. Rotaractors actively participated, making both phases a success and creating memorable moments for all.",
		imageUrl: "/avenues/community/Share the joy_.jpg",
		imageOnLeft: false,
	},
];

function Community() {
	return (
		<>
			<Navbar />
			<PageHeader title="Avenues" />
			<Center>
				<Box maxW="xl" textAlign="center" py={8}>
					<Heading as="h1" size="xl" mb={4}>
						Community Services
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

export default Community;
