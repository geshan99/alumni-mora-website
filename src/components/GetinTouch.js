import React from "react";
import { Flex, Box, Image, Text, Stack, Icon } from "@chakra-ui/react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function GetinTouch() {
	return (
		<>
			<Flex
				flexDirection={{ base: "column", md: "row" }}
				justifyContent="center"
			>
				<Box
					flex="1"
					mb={{ base: "4", md: "0" }}
					ml={[0, 0, 0, , 200, 300]}
				>
					{/* Left Image */}
					<Image
						src="/home/getin.jpg"
						alt="Image"
						boxSize={{ base: "100%", md: "500px" }}
						objectFit="cover"
						m={[0, 0, 0, 4]}
					/>
				</Box>
				<Box
					p="4"
					w={{
						base: "100%",
						md: "300px",
						lg: "400px",
						xl: "700px",
					}}
					// ml={[0, 0, 4, 0]}
				>
					<Text fontWeight="700" fontSize="2xl" mb="5">
						Get in Touch
					</Text>

					<Stack spacing={2}>
						<Box display="flex" alignItems="center">
							<Icon
								as={MdLocationOn}
								fontSize="3xl"
								color="pink.500"
								mr="2"
							/>
							<Text fontSize="md" fontWeight="700">
								Visit Us
							</Text>
						</Box>
						<Text fontSize="sm" fontWeight="400">
							University of Moratuwa, Katubedda, Sri Lanka
						</Text>

						<Box display="flex" alignItems="center">
							<Icon
								as={MdEmail}
								fontSize="2xl"
								color="pink.500"
								mr="2"
							/>
							<Text fontSize="md" fontWeight="700">
								Mail Us
							</Text>
						</Box>
						<Text fontSize="sm" fontWeight="400">
							rotaractmoraalumni@gmail.com
						</Text>

						<Box display="flex" alignItems="center">
							<Icon
								as={MdPhone}
								fontSize="2xl"
								color="pink.500"
								mr="2"
							/>
							<Text fontSize="md" fontWeight="700">
								Call Us
							</Text>
						</Box>
						<Text fontSize="sm" fontWeight="400">
							+(94) 713 826 109
						</Text>
					</Stack>
				</Box>
			</Flex>
		</>
	);
}

export default GetinTouch;
