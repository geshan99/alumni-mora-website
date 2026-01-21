import React from "react";
import { Box, Text, Image, Flex, SimpleGrid } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

// Helper function to get image URL based on name
const getImageUrl = (name) => {
	const nameMap = {
		"Jayani Ranchagoda": "Jayani Ranchagoda.jpeg",
		"Nimesh Kavinda": "Nimesh Kavinda.jpg",
		"Roshendra Chrishmal": "Roshendra Chrishmal.jpg",
		"Danush Wickramasinghe": "Danush Wickramasinghe.jpg",
		"Ravindu Wickramage": "Ravindu Wickramage.jpg",
		"Ashan Mahela": "Ashan Mahela.jpg",
		"Isuru Priyanjith": "Isuru Priyanjith.jpg",
		"Nisal Shanaka": "Nisal Shanaka.png",
		"Booshana Namudara": "Booshana Namudara.jpg",
		"Shakthi Jayasinghe": "Shakthi Jayasinghe.jpg",
		"Hirushi Premarathna": "Hirushi Premarathna.png",
		"Dinethma Wickramanayake": "Dinehma Wickramanayake.jpeg",
		"Malisha Mihiran": "Malisha Mihiran.jpg",
		"Lakshan Chamara": "Lakshan Chamara.JPG",
		"Kavini Pabasara": "Kavini Pabasara.jpg",
		"Hashani Jayathissa": "Hashani Jayathissa.jpg",
		"Reshmi Makulgolla": "Reshmi Makulgolla .jpeg",
		"Ravindu Pushpakumara": "Ravindu Madushan.JPG", // Approximate match
		"Shalinga Athilani": "Athilani Shalinga.jpg",
		"Shehani Gamage": "Shehani Dinushika.jpg", // Approximate match
		"Sehara Arunodya Fernando": "Sehara Arunodya.jpeg",
		"Giman Dissasekara": "Giman Sanchitha.jpg", // Approximate match
		"Narmadee Gunathilake": "Narmadee Gunathilake.jpg",
		"Sadeepa Maththamagoda": "Sadeepa Maththamagoda.jpeg", // Approximate match
		"Nisala Yapa": "Nisala Yapa.jpg",
		"Sineth Hemsara": "Sineth Hemsara.jpeg",
		"Savinu Perera": "Savinu Perera.jpeg",
		"Vimalshi Perera": "Vimalshi Navodya.jpeg", // Approximate match
		"Janani Halwala": "Janani Halwala.png",
		"Kaushani Gayanthika": "Kaushani Gayanthika.jpg",
		"Janani Pitawala": "Janani Pitawala.jpg",
		"Sandavi Nuthara": "Sanda Attanagoda.jpg", // Approximate match
		"Anuja Wijewardana": "Anuja Wijewardana.jpg",
		"Ashen Ganhewa": "Ashen Ganhewa.jpeg",
		"Ranudi Nisalya": "Ranudi Nisalya.png",
		"Anuda Kaushika": "Anuda Dissanayake.JPG", // Approximate match
		"Dasuni Prabodha": "Dasuni Prabodha.jpg",
		"Manjina Vishwajith": "Manjina Vishwajith.png",
		"Yoshmika Sandeepa": "Yoshmika Sandeepa.jpeg", // No image found
	};

	const fileName = nameMap[name];
	if (fileName && !fileName.toLowerCase().endsWith(".heic")) {
		return `/bod25-26/${fileName}`;
	}
	// Return dummy image if not found or unsupported format
	return "/logo_b.png";
};

const bodData = [
	{
		name: "Rtr.Jayani Ranchagoda",
		possition: "President",
		imageUrl: getImageUrl("Jayani Ranchagoda"),
	},
	{
		name: "Rtr.Nimesh Kavinda",
		possition: "Immediate Past President",
		imageUrl: getImageUrl("Nimesh Kavinda"),
	},
	{
		name: "Rtr.Roshendra Chrishmal",
		possition: "VP - Administration",
		imageUrl: getImageUrl("Roshendra Chrishmal"),
	},
	{
		name: "Rtr.Danush Wickramasinghe",
		possition: "VP - Club Services",
		imageUrl: getImageUrl("Danush Wickramasinghe"),
	},
	{
		name: "Rtr.Ravindu Wickramage",
		possition: "VP - Community Services & Environmental Services",
		imageUrl: getImageUrl("Ravindu Wickramage"),
	},
	{
		name: "Rtr.Ashan Mahela",
		possition: "VP - Finance",
		imageUrl: getImageUrl("Ashan Mahela"),
	},
	{
		name: "Rtr.Isuru Priyanjith",
		possition: "VP - International Services",
		imageUrl: getImageUrl("Isuru Priyanjith"),
	},
	{
		name: "Rtr.Nisal Shanaka",
		possition: "VP - Professional Development and Membership Development",
		imageUrl: getImageUrl("Nisal Shanaka"),
	},
	{
		name: "Rtr.Booshana Namudara",
		possition: "VP - Public Relations & IT Digital Services",
		imageUrl: getImageUrl("Booshana Namudara"),
	},
	{
		name: "Rtr.Shakthi Jayasinghe",
		possition: "Sergeant-At-Arms",
		imageUrl: getImageUrl("Shakthi Jayasinghe"),
	},
	{
		name: "Rtr.Hirushi Premarathna",
		possition: "Secretary",
		imageUrl: getImageUrl("Hirushi Premarathna"),
	},
	{
		name: "Rtr.Dinethma Wickramanayake",
		possition: "Assistant Secretary",
		imageUrl: getImageUrl("Dinethma Wickramanayake"),
	},
	{
		name: "Rtr.Malisha Mihiran",
		possition: "Treasurer",
		imageUrl: getImageUrl("Malisha Mihiran"),
	},
	{
		name: "Rtr.Lakshan Chamara",
		possition: "Assistant Treasurer",
		imageUrl: getImageUrl("Lakshan Chamara"),
	},
	{
		name: "Rtr.Kavini Pabasara",
		possition: "Senior Editor",
		imageUrl: getImageUrl("Kavini Pabasara"),
	},
	{
		name: "Rtr.Hashani Jayathissa",
		possition: "Co-Editor",
		imageUrl: getImageUrl("Hashani Jayathissa"),
	},
	{
		name: "Rtr.Reshmi Makulgolla",
		possition: "Co-Editor",
		imageUrl: getImageUrl("Reshmi Makulgolla"),
	},
	{
		name: "Rtr.Ravindu Pushpakumara",
		possition: "Co-Director - Finance",
		imageUrl: getImageUrl("Ravindu Pushpakumara"),
	},
	{
		name: "Rtr.Shalinga Athilani",
		possition: "Co-Director - IT Digital Services",
		imageUrl: getImageUrl("Shalinga Athilani"),
	},
	{
		name: "Rtr.Shehani Gamage",
		possition: "Co-Director - IT Digital Services",
		imageUrl: getImageUrl("Shehani Gamage"),
	},
	{
		name: "Rtr.Sehara Arunodya Fernando",
		possition: "Co-Director - IT Digital Services",
		imageUrl: getImageUrl("Sehara Arunodya Fernando"),
	},
	{
		name: "Rtr.Giman Dissasekara",
		possition: "Co-Director - Sports",
		imageUrl: getImageUrl("Giman Dissasekara"),
	},
	{
		name: "Rtr.Narmadee Gunathilake",
		possition: "Co-Director - Sports",
		imageUrl: getImageUrl("Narmadee Gunathilake"),
	},
	{
		name: "Rtr.Sadeepa Maththamagoda",
		possition: "Co-Director - Sports",
		imageUrl: getImageUrl("Sadeepa Maththamagoda"),
	},
	{
		name: "Rtr.Nisala Yapa",
		possition: "Co-Director - Club Services",
		imageUrl: getImageUrl("Nisala Yapa"),
	},
	{
		name: "Rtr.Sineth Hemsara",
		possition: "Co-Director - Club Services",
		imageUrl: getImageUrl("Sineth Hemsara"),
	},
	{
		name: "Rtr.Savinu Perera",
		possition: "Co-Director - Community Services",
		imageUrl: getImageUrl("Savinu Perera"),
	},
	{
		name: "Rtr.Vimalshi Perera",
		possition: "Co-Director - Community Services",
		imageUrl: getImageUrl("Vimalshi Perera"),
	},
	{
		name: "Rtr.Janani Halwala",
		possition: "Co-Director - Environmental Services",
		imageUrl: getImageUrl("Janani Halwala"),
	},
	{
		name: "Rtr.Kaushani Gayanthika",
		possition: "Co-Director - Environmental Services",
		imageUrl: getImageUrl("Kaushani Gayanthika"),
	},
	{
		name: "Rtr.Janani Pitawala",
		possition: "Co-Director - International Services",
		imageUrl: getImageUrl("Janani Pitawala"),
	},
	{
		name: "Rtr.Sandavi Nuthara",
		possition: "Co-Director - International Services",
		imageUrl: getImageUrl("Sandavi Nuthara"),
	},
	{
		name: "Rtr.Anuja Wijewardana",
		possition: "Co-Director - Professional Development and Membership Development",
		imageUrl: getImageUrl("Anuja Wijewardana"),
	},
	{
		name: "Rtr.Ashen Ganhewa",
		possition: "Co-Director - Professional Development and Membership Development",
		imageUrl: getImageUrl("Ashen Ganhewa"),
	},
	{
		name: "Rtr.Ranudi Nisalya",
		possition: "Co-Director - Professional Development and Membership Development",
		imageUrl: getImageUrl("Ranudi Nisalya"),
	},
	{
		name: "Rtr.Anuda Kaushika",
		possition: "Co-Director - Public Relations",
		imageUrl: getImageUrl("Anuda Kaushika"),
	},
	{
		name: "Rtr.Dasuni Prabodha",
		possition: "Co-Director - Public Relations",
		imageUrl: getImageUrl("Dasuni Prabodha"),
	},
	{
		name: "Rtr.Manjina Vishwajith",
		possition: "Co-Director - Public Relations",
		imageUrl: getImageUrl("Manjina Vishwajith"),
	},
	{
		name: "Rtr.Yoshmika Sandeepa",
		possition: "Avenue Coordinator",
		imageUrl: getImageUrl("Yoshmika Sandeepa"),
	},
];

function BodPage() {
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
				<Text fontSize="xl" fontWeight="bold" mb="2rem" color="teal">
					Board of Officials
				</Text>
				<SimpleGrid
					columns={{ base: 1, md: 2, lg: 4 }}
					spacing="2.5rem"
					maxW="1200px"
					mx="auto"
					justifyItems="center"
				>
					{bodData.map((member, index) => (
						<Box
							key={`bod-${index}`}
							width="100%"
							display="flex"
							flexDirection="column"
							alignItems="center"
							textAlign="center"
						>
							<Image
								src={member.imageUrl}
								alt={member.name}
								width="200px"
								height="200px"
								marginBottom="0.5rem"
								mx="auto"
								objectFit="cover"
								objectPosition="top"
								borderRadius="md"
							/>
							<Text fontWeight={"bold"} wordBreak="break-word">
								{member.possition}
							</Text>
							<Text wordBreak="break-word">{member.name}</Text>
						</Box>
					))}
				</SimpleGrid>
			</Flex>
			<Footer></Footer>
		</>
	);
}

export default BodPage;
