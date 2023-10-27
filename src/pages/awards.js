import AwardGroup from "@/components/AwardGroup";
import AwardSlider from "@/components/AwardSlider";
import Footer from "@/components/Footer";
import ImageGallery from "@/components/ImageGallery";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import { Box, Center, VStack, useMediaQuery } from "@chakra-ui/react";

const awardData = [
	{
		heading: "RI year 2016-17",
		subHeading: "Awards at the 26th Rotaract District Conference",
		awards: ["Best Cluster Project"],
	},
	{
		heading: "RI year 2017-18",
		subHeading: "Awards at the 28th Rotaract District Assembly",
		awards: [
			" Most Outstanding Club",
			"Most Outstanding President - Rtr. Himantha Alahakoon",
			"Most Disciplined Club (Gold Award)",
			"Most Outstanding Digital Communications Project (Gold award) - “TrainLK” 5. Most",
			"Outstanding Public Relations Effort via Print Media (Gold award) - “Marathon TowardsGreenery”",
			"Most Outstanding International Service Project (Gold award) - “Singaract”",
			"Most Outstanding Community Service Project - Green Economy (Silver award) “Marathon Towards Greenery”",
			"Most Outstanding Project with Rotary (Bronze award) - “Dream Cricket”",
			"Rotaract District Citation - The rotary year 2017/18",
			" President of the month (April) - Rtr. Himantha Alahakoon",
			" Spirit of Service - Rtr. Rochelle Silva",
			"Best Cluster Project – Habitat for Humanity",
			"Rotaractor of 3rdQuarter - Rtr. Rochelle Silva",
			"Rotaract Lifetime Achievement Award- Rtr. PP. Ridwan Shariffdeen",
		],
	},
	{
		heading: "RI year 2018-19",
		subHeading: "Awards at the 29th Rotaract District Assembly",
		awards: [
			"Rotaract Lifetime Achievement Award- Rtr. PP. Ridwan Shariffdeen",
		],
	},

	{
		heading: "RI year 2019-20 ",
		subHeading: "Awards at the 30th Rotaract District Assembly",
		awards: [
			"Gold Award-Most outstanding Community Service Initiative (Disease Prevention andTreatment)- Kindred Kidneys",
			"Gold Award- Most outstanding COVID-19 Response Initiative (Health) -Sathkara",
			"Gold Award- Most outstanding International Service initiative- Mitrata",
			"Gold Award-Most outstanding Rotary Family Initiative - West Aid 2.0",
			"Rotaract District Citation",
			"Most Outstanding cluster initiative - Bronze Award",
			"President of the Month March",
			"Spirit of Service- Rtr. Kavinda Senerathne",
			"Ecoscape, District Council Meeting June, Hosting IDYEP",
			"Annual Social Welfare Function 2019 by Samastha Lanka Kidney Patients’ Association The project “Kindred Kidneys” was awarded “Volunteering Appreciation Award” for volunteer commitments for Sri Lankan Kidney patients.",
		],
	},
	{
		heading: "RI year 2020-21",
		subHeading: "Awards at the 30th Rotaract District Assembly",
		awards: [
			"Most Outstanding International Service Initiative - Gold Award - Battle with Pandemic",
			"Most Outstanding Initiative with the Rotary Family - Gold Award - West Aid",
			"Award for Project under Stop the Spread – Beyond Covid -19 in the Health and Infrastructure Category - Silver Award – Battle with Pandemic",
			"Most Outstanding Community Service Initiative under Disease Prevention and Treatment - Silver Award - Kindred Kidneys",
			"Most Outstanding Club Service Initiative (Virtual) - Silver Award - Let’s Meet",
			"Most Outstanding Initiative in line with District Year theme “Strive as One” - Silver Award - Together as One",
			"Most inspirational Initiative under TogetherSL - Team Tuskers",
			"Emerging Leader of the Year - Rtn. Rtr. IPP Anju Cheran",
			"President of the Month of February - Rtn. Rtr. IPP Anju Cheran",
			"Recognition for Rotaract District Citation",
			"Special recognition for the support towards CleanSL - Rtr. Pasan Hewa Kandamby",
			"Spirit of Service Recognition– Rtr. Malitha Gunawardena",
			" Recognition for hosting District Projects: DCM October, Project “Praana”",
		],
	},
	{
		heading: "RI year 2021-22",
		subHeading: "Awards at the 32nd Rotaract District Assembly",
		awards: [
			"Most Outstanding Club",
			"Most Outstanding President- Rtr. IPP Kavinda Senarathne",
			"Most Outstanding Secretary- Rtr. Sithmi Lawanga",
			"Gold Award for achieving District Citations",
			"Gold Award for the Most Outstanding Financial Management Club of the Year",
			"Gold Award for the Most Outstanding Effort in Membership Development and Retention(Community-Based Clubs)",
			"Gold Award for the Recognition of the Spirit of Service- Rtr. Samali Seneviratne",
			"Silver Award for the Most Supportive Club of the Year",
			"Silver Award for the Most Outstanding Public Image Initiative(Community-Based Clubs)- Halt of Covid",
			"Silver Award for the Most Outstanding International Service Initiative( Community Based Clubs)-United We Stand",
			"Silver Award for the Most Outstanding Initiative in line with the Rotary Focus Area Disease Prevention and Treatment - Kindred Kidneys",
			" Bronze Award for the Most Outstanding Annual Report (Community-Based Clubs)",
			"Bronze Award for the Most Outstanding Initiative ( Fellowship Under Specific Audience) - Fellowship Diaries",
			"Bronze Award for the Most Outstanding Initiative focused on stopping the spread- Halt of Covid",
			"President of the Month of October - Rtr. IPP Kavinda Senarathne",
			"Secretary of the Month of March - Rtr. Sithmi Lawanga",
			" Recognition for hosting District Projects: CleanSL, Susanyoga, DCM October",
		],
	},
	{
		heading: "RI year 2021-22",
		subHeading: "",
		awards: [
			"Rotaract District Citation - Gold Distinction",
			"Most Outstanding project focused on Rotary Focus Area - Health, safety and communal well being  2022-23 Silver Award -- Kindred Kidneys",
			"Most Outstanding project focused on Rotary Focus Area - Disease prevention and treatment 2022-23 Bronze Award -- Kindred Kidneys",
			"Most Outstanding Initiative with a Rotary Club 2022 - 23(Bronze Award) -- Dream Cricket",
			"Rotaract Lifetime Award - Rtr.PP Himantha Alahakoon",
			"Gold Award for the Recognition of the Spirit of Service- Rtr. Nimesh Kavinda",
			"Secretary of the first quarter  - Rtr. Lakshani Pathirage ",
		],
	},
	// {
	// 	heading: "",
	// 	subHeading: "",
	// 	awards: [],
	// },
];

function Awards() {
	const [isLargeScreen] = useMediaQuery("(min-width: 768px)");

	return (
		<>
			<Navbar />
			<PageHeader title="Awards" />
			<Box>
				<AwardSlider></AwardSlider>
			</Box>
			<Center>
				<VStack spacing={4} maxW="5xl" alignItems="center">
					{awardData.map((award, index) => (
						<AwardGroup
							key={index}
							heading={award.heading}
							subHeading={award.subHeading}
							awards={award.awards}
						/>
					))}
				</VStack>
			</Center>
			<Footer />
		</>
	);
}

export default Awards;
