import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import HomePagePara from "../components/HomePagePara";
import AvenueCardContainer from "@/components/AvenueCardContainer";
import CountUpCard from "@/components/CountUpCard";
import ClubInfo from "@/components/ClubInfo";
import { Box, Flex, VStack } from "@chakra-ui/react";
import Stats from "@/components/Stats";

export default function Home() {
	const content =
		'In its 13th year of operation, the Rotaract Club of Alumni of  University of Moratuwa continues to implement sustainable programs aimed at serving the community as active youth within the nation. Over the years, the club has nurtured and cultivated a strong relationship with the Rotaract Club of the University of Moratuwa. From its humble beginnings with 20 members, the club has steadily grown its membership to over 80 active participants. The club\'s ongoing endeavors receive unwavering support from former members spanning the globe. The annual theme of the club, "Ignite the Change," embodies our commitment to sparking transformation and creating meaningful impact in our communities. This theme underscores the importance of taking initiative, inspiring others, and driving positive change while serving the community. The club remains steadfast in its commitment to building enduring connections and fostering a sense of belonging among its members, a vision that has been wholeheartedly embraced by Rotaract Alumni Mora. Through fellowship and collective action, we have cultivated a dynamic environment that empowers everyone to ignite their potential and become catalysts for change. The Rotaract Alumni Mora continues to achieve remarkable feats and make a substantial impact on the world through continuous growth, innovation, and the unwavering spirit of igniting positive transformation.';
	const avenue_data = [
		{
			icon: "/icons/community.svg",
			title: "Community service",
			description:
				"We strive to provide solutions for CKD patients in Sri Lanka, focusing on addressing both the physical and mental well-being of our community. Additionally, we support school children in improving their basic educational needs, extending our service across the nation.",
		},
		{
			icon: "/icons/fellow.svg",
			title: "Club service",
			description:
				"Our emphasis lies in fostering fellowship and cultivating new friendships through collaborative initiatives, thereby creating an engaging environment for our members to break away from their daily routines and experience fresh pathways of connection.",
		},

		{
			icon: "/icons/prof.svg",
			title: "Professional development",
			description:
				"This avenue is dedicated to equipping recent graduates with valuable life advice, empowering them to thrive in society, and inspiring them to embark on their own career journeys.",
		},
		{
			icon: "/icons/international.svg",
			title: "International service",
			description:
				"Featuring a multitude of novel initiatives with the participation of foreign Rotaractors, adding vibrancy to the Rotary International year",
		},
		{
			icon: "/icons/envronment.svg",
			title: "Environmental service",
			description:
				"We aim to offer nature enthusiasts exciting opportunities for active involvement by raising awareness about various species and promoting compassion towards animals. Our efforts extend to conserving the environment through multiple facets.",
		},
	];
	return (
		<>
			<Head>
				<title>Rotaract Alumni Mora</title>
				<meta
					name="description"
					content="Official website of Rotaract Alumni Mora"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					name="author"
					content="Geshan Sudasinghe, Bhanuka Uyanage"
				/>
				<meta
					name="keywords"
					content="Rotaract, Rotaract Alumni Mora, University of Moratuwa, UoM,Alumni Mora"
				></meta>
				<meta name="robots" content="index, follow"></meta>
				<link rel="icon" href="/fav.ico" />
			</Head>
			<main>
				<Navbar></Navbar>
				<div style={{ marginTop: "0px" }}>
					<ImageSlider></ImageSlider>
				</div>
				<HomePagePara content={content}></HomePagePara>
				<AvenueCardContainer
					cardData={avenue_data}
				></AvenueCardContainer>
				{/* <RotaractDetails></RotaractDetails> */}
				<Stats></Stats>
				<Footer></Footer>
			</main>
		</>
	);
}
