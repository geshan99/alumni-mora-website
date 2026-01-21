import React from "react";
import Link from "next/link";
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
				<Link href="/">
					<Image
						src="/logo_b.png"
						alt="Logo"
						width="250px"
						height="auto"
					/>
				</Link>
			</Box>

			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				width={{ base: "full", md: "auto" }}
				mt={{ base: 4, md: 0 }}
			>
				<Button variant="link" mr={4} _hover={{ color: "teal.500" }}>
					<Link href="/">Home</Link>
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
							<Link href="/about/historyPage">History</Link>
						</MenuItem>
						<MenuItem color="black">
							<Link href="/about/bod">
								Board of Officials
							</Link>
						</MenuItem>
					</MenuList>
				</Menu>
				<Button variant="link" mr={4} _hover={{ color: "teal.500" }}>
					<Link href="/downloads">Downloads</Link>
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
							<Link href="/avenues/club">Club Service</Link>
						</MenuItem>
						<MenuItem color="black">
							<Link href="/avenues/community">
								Community service
							</Link>
						</MenuItem>
						<MenuItem color="black">
							<Link href="/avenues/environmental">
								Environmental Service
							</Link>
						</MenuItem>
						<MenuItem color="black">
							<Link href="/avenues/internation">
								International service
							</Link>
						</MenuItem>
						<MenuItem color="black">
							<Link href="/avenues/professional">
								Professional Development
							</Link>
						</MenuItem>
						<MenuItem color="black">
							<Link href="/avenues/sports">
								Sports and Recreational Activities{" "}
							</Link>
						</MenuItem>
					</MenuList>
				</Menu>
				<Button variant="link" mr={4} _hover={{ color: "teal.500" }}>
					<Link href="/awards">Awards</Link>
				</Button>

				<Button variant="link" mr={4} _hover={{ color: "teal.500" }}>
					<Link href="/contactus">Contact Us</Link>
				</Button>
			</Box>

			<Box>
				<Button variant="solid" colorScheme="teal">
					<a href="https://blog.rotaractalumnimora.org">Blog</a>
				</Button>
			</Box>
		</Flex>
	);
}

export default Navbar;
