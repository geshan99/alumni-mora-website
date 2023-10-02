import React from "react";
import { Box, Heading, Image, Button } from "@chakra-ui/react";

function AnnualReportCard({ title, imageUrl, pdfUrl }) {
	return (
		<Box borderWidth="1px" borderRadius="lg" overflow="hidden">
			<Image src={imageUrl} alt={title} w={250} />
			<Box p="4">
				<Heading fontSize="xl">{title}</Heading>
				<Button colorScheme="teal" mt="2" size="sm">
					<a
						href={pdfUrl}
						download={title}
						target="_blank"
						rel="noreferrer"
					>
						Download Report
					</a>
				</Button>
			</Box>
		</Box>
	);
}

export default AnnualReportCard;
