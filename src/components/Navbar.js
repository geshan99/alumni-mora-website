import React from "react";
import {
	Flex,
	Box,
	IconButton,
	Button,
	Image,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

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
				<a href="/">
					<Image
						src="/logo_b.png"
						alt="Logo"
						width="250px"
						height="auto"
					/>
				</a>
			</Box>

			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				width={{ base: "full", md: "auto" }}
				mt={{ base: 4, md: 0 }}
			>
				<Button variant="link" mr={4} _hover={{ color: "teal.500" }}>
					<a href="/">Home</a>
				</Button>

				<Menu>
					<MenuButton
						as={Button}
						variant="link"
						mr={4}
						_hover={{ color: "teal.500" }}
						rightIcon={<ChevronDownIcon />}
					>
						About
					</MenuButton>
					<MenuList>
						<MenuItem color="black">
							<a href="/about/historyPage.html">History</a>
						</MenuItem>
						<MenuItem color="black">
							<a href="/about/pastPresidents.html">
								Boad of Officials
							</a>
						</MenuItem>
					</MenuList>
				</Menu>
				<Button variant="link" mr={4} _hover={{ color: "teal.500" }}>
					<a href="/downloads.html">Downloads</a>
				</Button>
				<Menu>
					<MenuButton
						as={Button}
						variant="link"
						mr={4}
						_hover={{ color: "teal.500" }}
						rightIcon={<ChevronDownIcon />}
					>
						Avenues
					</MenuButton>
					<MenuList>
						<MenuItem color="black">
							<a href="/avenues/club.html">Club Service</a>
						</MenuItem>
						<MenuItem color="black">
							<a href="/avenues/community.html">
								Community service
							</a>
						</MenuItem>
						<MenuItem color="black">
							<a href="/avenues/environmental.html">
								Environmental Service
							</a>
						</MenuItem>
						<MenuItem color="black">
							<a href="/avenues/internation.html">
								International service
							</a>
						</MenuItem>
						<MenuItem color="black">
							<a href="/avenues/professional.html">
								Professional Development
							</a>
						</MenuItem>
						<MenuItem color="black">
							<a href="/avenues/sports.html">
								Sports and Recreational Activities{" "}
							</a>
						</MenuItem>
					</MenuList>
				</Menu>
				<Button variant="link" mr={4} _hover={{ color: "teal.500" }}>
					<a href="/awards.html">Awards</a>
				</Button>

				<Button variant="link" mr={4} _hover={{ color: "teal.500" }}>
					<a href="/contactus.html">Contact Us</a>
				</Button>
			</Box>

			<Box>
				<Button variant="solid" colorScheme="teal">
					<a href="https://blog.rotaractalumnimora.org/">Blog</a>
				</Button>
			</Box>
		</Flex>
	);
}

export default Navbar;
