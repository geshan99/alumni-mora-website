import React from "react";
import { Box, Heading, Image, Button } from "@chakra-ui/react";

function AnnualReportCard2({ title,year,title2, imageUrl, pdfUrl }) {
	return (
		<Box borderWidth="1px" borderRadius="lg" overflow="hidden">
			<Image src={imageUrl} alt={title} w={250} m={5} />
			<Box p="4">
				<Heading fontSize="xl">{title}</Heading>
				<Heading fontSize="xl">{year}</Heading>
				<Heading fontSize="xl">{title2}</Heading>
				<Button colorScheme="teal" mt="2" size="sm">
					<a
						href={pdfUrl}
						download={title}
						target="_blank"
						rel="noreferrer"
					>
						Download
					</a>
				</Button>
			</Box>
		</Box>
	);
}

export default AnnualReportCard2;
