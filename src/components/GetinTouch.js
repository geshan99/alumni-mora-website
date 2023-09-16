import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

function GetinTouch() {
	return (
		<>
			<Flex justifyContent="center">
				<Box>
					{/* Left Image */}
					<Image
						src="https://images.pexels.com/photos/17959888/pexels-photo-17959888/free-photo-of-glacier-iceland-snow-wood.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Image"
						boxSize={{ base: "100%", md: "500px" }}
						objectFit="cover"
						m="4"
					/>
				</Box>
				<Box p="4" w="500px">
					<Text fontWeight="700" fontSize="2xl" mb="5">
						Get in Touch
					</Text>
					<Text textAlign="justify" mb="4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
					</Text>
					<Text fontSize="md" fontWeight="700">
						Visit Us
					</Text>
					<Text fontSize="sm" fontWeight="400" mb="4">
						University of Moratuwa,Katubedda.Sri Lanka
					</Text>
					<Text fontSize="md" fontWeight="700">
						Mail Us
					</Text>
					<Text fontSize="sm" fontWeight="400" mb="4">
						rotaractmoraalumni@gmail.com
					</Text>
					<Text fontSize="md" fontWeight="700">
						Call Us
					</Text>
					<Text fontSize="sm" fontWeight="400" mb="4">
						+(94) 713 826 109
					</Text>
				</Box>
			</Flex>
		</>
	);
}

export default GetinTouch;
