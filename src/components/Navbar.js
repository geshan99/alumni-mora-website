import React from "react";
import { Flex, Box, IconButton, Button, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Flex
			as="nav"
			direction={{ base: "column", md: "row" }}
			align="center"
			justify="space-between"
			wrap="wrap"
			padding="1.5rem"
			bg="white"
			color="teal.500"
		>
			<Box display={{ base: "block", md: "none" }}>
				<IconButton
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					onClick={toggleMenu}
					variant="outline"
				/>
			</Box>

			<Box>
				<a href="/"><Image src="/logo1.png" alt="Logo" width="250px" height="auto" /></a>
			</Box>

			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				width={{ base: "full", md: "auto" }}
				mt={{ base: 4, md: 0 }}
			>
				<Button variant="link" mr={4} _hover={{ color: "pink.500" }}>
					<a href="/">Home</a>
				</Button>
				<Button variant="link" mr={4} _hover={{ color: "pink.500" }}>
					<a href="/about">About</a>
				</Button>
				<Button variant="link" mr={4} _hover={{ color: "pink.500" }}>
					<a href="/avenues">Avenues</a>
				</Button>
				<Button variant="link" mr={4} _hover={{ color: "pink.500" }}>
					<a href="/contactus">Contact Us</a>
				</Button>
			</Box>

			<Box>
				<Button variant="solid" colorScheme="pink">
					Blog
				</Button>
			</Box>
		</Flex>
	);
}

export default Navbar;
