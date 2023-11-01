import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";

const pastPresidentsData = [
	{
		name: "Rtr.Lakshani Pathirage",
		possition: "President",
		imageUrl: "/bod/lakshani.jpg",
	},
	{
		name: "Rtr.Ayesh Weerasinghe",
		possition: "Immediate Past President",
		imageUrl: "/bod/ayesh.jpg",
	},
	{
		name: "Rtr.Manul Thenuka Karunasiri",
		possition: "Vice President - Administration",
		imageUrl: "/bod/manul.jpg",
	},
	{
		name: "Rtr.Malitha Gunawardhana",
		possition: "Vice President - Club Service",
		imageUrl: "/bod/malitha.jpg",
	},
	{
		name: "Rtr.Gihara Wickramatunge",
		possition: "Vice President - Community Service",
		imageUrl: "/bod/gihara.jpg",
	},
	{
		name: "Rtr.Samali Senevirathne",
		possition: "Vice President - International Service",
		imageUrl: "/bod/samali.jpg",
	},
	{
		name: "Rtr.Sachin Silva",
		possition: "Vice President - Professional Development",
		imageUrl: "/bod/sachin.jpg",
	},
	{
		name: "Rtr.Danushi Suriyarachchi",
		possition: "Joint Secretaries",
		imageUrl: "/bod/danushi.jpg",
	},
	{
		name: "Rtr.Nikith Fernando",
		possition: "Joint Secretaries",
		imageUrl: "/bod/nikith.jpg",
	},
	{
		name: "Rtr.Abirame Ganeshamoorthy",
		possition: "Assistant Secretary",
		imageUrl: "/bod/abirame.jpg",
	},
	{
		name: "Rtr.Hiran Rajasuriya",
		possition: "Treasurer",
		imageUrl: "/bod/hiran.jpg",
	},
	{
		name: "Rtr.Supul Pushpakumara",
		possition: "Sergeant-at-Arms",
		imageUrl: "/bod/supul.jpg",
	},
	{
		name: "Rtr.Leesha Samadhi",
		possition: "Senior Editor",
		imageUrl: "/bod/leesha.jpg",
	},
	{
		name: "Rtr.Tharusha Keaniyage",
		possition: "Senior Director PR",
		imageUrl: "/bod/tharusha.jpg",
	},
	{
		name: "Rtr.Dushan Kavishka",
		possition: "Co Editor",
		imageUrl: "/bod/dushan.jpg",
	},
	{
		name: "Rtr.Himav Karunaratne",
		possition: "Co Editor",
		imageUrl: "/bod/himav.jpg",
	},
	{
		name: "Rtr.Prasadi Weerakkodi",
		possition: "Co Editor",
		imageUrl: "/bod/prasadi.jpg",
	},
	{
		name: "Rtr.Chamodi Samarasingha",
		possition: "CoEdCo-Director Club Service",
		imageUrl: "/bod/chamodi.jpg",
	},
	{
		name: "Rtr.Senith Cooray",
		possition: "Co-Director Club Service",
		imageUrl: "/bod/senith.jpg",
	},
	{
		name: "Rtr.Yasith Anushka",
		possition: "Co-Director Club Service",
		imageUrl: "/bod/yasith.jpg",
	},
	{
		name: "Rtr.Madushan Sasanka",
		possition: "Co-Director -Community Service",
		imageUrl: "/bod/madushan.jpg",
	},
	{
		name: "Rtr.Manula Thennakoon",
		possition: "Co-Director -Community Service",
		imageUrl: "/bod/manula.jpg",
	},
	{
		name: "Rtr.Chathurika Wijesooriya",
		possition: "Co-director - Environmental Service",
		imageUrl: "/bod/chathurika.jpg",
	},
	{
		name: "Rtr.Samanthika Rajapaksha",
		possition: "Co-director - Environmental Service",
		imageUrl: "/bod/samanthika.jpg",
	},
	{
		name: "Rtr.Lahiru Sampath",
		possition: "Co-Director International Service",
		imageUrl: "/bod/lahiru.jpg",
	},
	{
		name: "Rtr.Nethma Mettananda",
		possition: "Co-Director International Service",
		imageUrl: "/bod/nethma.jpg",
	},
	{
		name: "Rtr.Diluka Vidanage",
		possition: "Co-Director - Professional Development",
		imageUrl: "/bod/diluka.jpg",
	},
	{
		name: "Rtr.Nimesh Kavinda",
		possition: "Co-Director - Professional Development",
		imageUrl: "/bod/nimesh.jpg",
	},
	{
		name: "Rtr.Upeksha Erandi",
		possition: "Partnership Development Director",
		imageUrl: "/bod/upeksha.jpg",
	},
	{
		name: "Rtr.Aditha Pathiraja",
		possition: "Co-director - Public Relations",
		imageUrl: "/bod/aditha.jpg",
	},
	{
		name: "Rtr.Nirodha Sandaruwan",
		possition: "Co-director - Public Relations",
		imageUrl: "/bod/nirodha.jpg",
	},
	{
		name: "Rtr.Roshendra Perera",
		possition: "Co-director - Public Relations",
		imageUrl: "/bod/roshendra.jpg",
	},
	{
		name: "Rtr.Bhanuka Uyanage",
		possition: "Co-Director IT",
		imageUrl: "/bod/bhanuka.jpg",
	},
	{
		name: "Rtr.Geshan Sudasinghe",
		possition: "Co-Director IT",
		imageUrl: "/bod/geshan.jpg",
	},
	{
		name: "Rtr.Sathira Liyanapathirana",
		possition: "Director - Membership Develpoment",
		imageUrl: "/bod/sathira.jpg",
	},
	{
		name: "Rtr.Imal Thiranga",
		possition: "Co-Director Sports",
		imageUrl: "/bod/imal.jpg",
	},
	{
		name: "Rtr.Yasiru Wijayasiri",
		possition: "Co-Director Sports",
		imageUrl: "/bod/yasiru.jpg",
	},
	{
		name: "Rtr.Akhila Seneviratne",
		possition: "Rotary Family Coordinator",
		imageUrl: "/bod/akila.jpg",
	},
];

function PastPresidentsPage() {
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
				<Text fontSize="xl" fontWeight="bold" mb="2rem">
					Boad of Officials
				</Text>
				<Flex flexWrap="wrap" justifyContent="center">
					{pastPresidentsData.map((president, index) => (
						<Box key={index} mx="5rem" my="1rem" textAlign="center">
							<Image
								src={president.imageUrl}
								alt={president.name}
								width="200px"
								height="200px"
								marginBottom="0.5rem"
							/>
							<Text fontWeight={"bold"}>
								{president.possition}
							</Text>
							<Text>{president.name}</Text>
						</Box>
					))}
				</Flex>
			</Flex>
			<Footer></Footer>
		</>
	);
}

export default PastPresidentsPage;
