import React from "react";
import {
	Flex,
	SimpleGrid,
	ChakraProvider,
	CSSReset,
	Text,
} from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";
import AnnualReportCard from "@/components/downloads/AnnualReportCard";

const annualReports = [
	{
		title: "Annual Report 2022-2023",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/2022_2023.pdf",
	},
	{
		title: "Annual Report 2021-2022",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/2021_2022.pdf",
	},
	{
		title: "Annual Report 2021-2022",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/2021_2022.pdf",
	},
	{
		title: "Annual Report 2020-2021",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/2020_2021.pdf",
	},
	{
		title: "Annual Report 2019-2020",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/2019_2020.pdf",
	},

	{
		title: "Annual Report 2017-2018",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/2017_2018.pdf",
	},
];
const bulletins = [
	{
		title: "Vibrant Voyages - 1st Quarter",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/Vibrant Voyages Rotaract Alumni Mora Odyssey - 1st Quarter.pdf",
	},
	{
		title: "The Chronicle - 2020/MAY",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/bulletin_2020_MAY.pdf",
	},
	{
		title: "The Chronicle - 2019/I",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/bulletin_2019_1.pdf",
	},
	{
		title: "The Chronicle - 2019/II",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/bulletin_2019_2.pdf",
	},
	{
		title: "ALMANAC",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/bulletin_ALMANAC.pdf",
	},
	{
		title: "Community Bell - JULLY",
		imageUrl: "/logo_b.png",
		pdfUrl: "/reports/community_bell_JULLY.pdf",
	},
];

function Downloads() {
	return (
		<ChakraProvider>
			<CSSReset />
			<Navbar />
			<PageHeader title="Downloads" />
			<Flex justify="center" py={4}>
				<Text fontSize="xl" fontWeight="bold" mb={4} color={"teal"}>
					Annual Reports
				</Text>
			</Flex>
			<Flex justify="center" py={4}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
					{annualReports.map((report, index) => (
						<AnnualReportCard
							key={index}
							title={report.title}
							imageUrl={report.imageUrl}
							pdfUrl={report.pdfUrl}
						/>
					))}
				</SimpleGrid>
			</Flex>
			<Flex justify="center" py={4}>
				<Text fontSize="xl" fontWeight="bold" mb={4} color={"teal"}>
					Bulletins
				</Text>
			</Flex>
			<Flex justify="center" py={4}>
				<SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
					{bulletins.map((report, index) => (
						<AnnualReportCard
							key={index}
							title={report.title}
							imageUrl={report.imageUrl}
							pdfUrl={report.pdfUrl}
						/>
					))}
				</SimpleGrid>
			</Flex>
			<Footer />
		</ChakraProvider>
	);
}

export default Downloads;
