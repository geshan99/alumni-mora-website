import React from "react";
import { Flex, Box, IconButton, Button, Image } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

function Navbar() {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<Flex
			as="nav"
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
			<Image src="/logo.png" alt="Logo" width="250px" height="auto" />

			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				width={{ base: "full", md: "auto" }}
				mt={{ base: 4, md: 0 }}
			>
				<Button variant="link" mr={4} _hover={{ color: "pink.500" }}>
					Home
				</Button>
				<Button variant="link" mr={4} _hover={{ color: "pink.500" }}>
					About
				</Button>
				<Button variant="link" mr={4} _hover={{ color: "pink.500" }}>
					Services
				</Button>
				<Button variant="link" mr={4} _hover={{ color: "pink.500" }}>
					Contact
				</Button>
			</Box>

			{/* Logo */}

			{/* Add the "Blog" button aligned to the right */}
			<Box>
				<Button
					variant="solid" // You can change this to "outline" or any other variant
					colorScheme="pink" // Set the color scheme to "pink" (you can change to other color schemes)
				>
					Blog
				</Button>
			</Box>
		</Flex>
	);
}

export default Navbar;
