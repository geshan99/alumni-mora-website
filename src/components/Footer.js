import React from "react";
import { Box, Flex, Text, Image, Icon, Link } from "@chakra-ui/react";
import { ExternalLinkIcon, EmailIcon } from "@chakra-ui/icons";

function Footer() {
	return (
		<Box bg="black" py="4">
			<Flex
				direction={{ base: "column", md: "row" }}
				justify="space-between"
				align="center"
				px={{ base: "4", md: "12" }}
				color="white"
			>
				{/* Column 1: Logo */}
				<Box mb={{ base: "4", md: "0" }} ml={{ lg: 100, md: 75 }}>
					<a href="/">
						<Image
							src="/logo_w.png"
							alt="Logo"
							w="300px"
							h="auto"
						/>
					</a>
				</Box>

				{/* Column 2: Location and Email */}
				<Flex align="left" direction="column" mr={{ lg: 70, md: 65 }}>
					<Box mr="2">
						<Icon
							as={ExternalLinkIcon}
							boxSize="5"
							color="pink.500"
							mr={{ base: 30 }}
						/>
						<Link
							href="https://maps.app.goo.gl/vwiyXMpPfcDQSVDC7"
							isExternal
							textDecor="none"
						>
							Moratuwa
						</Link>
					</Box>
					<Box>
						<Icon
							as={EmailIcon}
							boxSize="5"
							color="pink.500"
							mr={{ base: 30 }}
						/>
						<Link
							href="mailto:rotaractmoraalumni@gmail.com"
							textDecor="none"
						>
							rotaractmoraalumni@gmail.com
						</Link>
					</Box>
				</Flex>
			</Flex>

			{/* Centered Text */}
			<Text
				textAlign="center"
				mt="4"
				color="white"
				fontSize="sm"
				m={[1, 0, 0]}
			>
				Copyright © 2023 Rotaract Alumni Mora. All rights reserved.
			</Text>
		</Box>
	);
}

export default Footer;
