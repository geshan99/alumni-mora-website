import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import ClubInfo from "./ClubInfo";
import CountUpCard from "./CountUpCard";

function Stats() {
	const flexWrapValue = useBreakpointValue({ base: "wrap", md: "nowrap" });

	return (
		<>
			<Flex
				flexDirection={"column"}
				justifyContent={"center"}
				alignItems={"center"}
				mt={5}
				boxShadow="md"
				bg={"teal.50    "}
				p={5}
				h={[600, 300, 300]}
			>
				<Box mb={5}>
					<ClubInfo
						clubName="Rotary Club of Colombo West"
						charterYear={2013}
					/>
				</Box>
				<Flex
					flexDirection={{ base: "column", md: "row" }}
					justifyContent={{ base: "center", md: "space-around" }}
					//bg={"red"}
					alignItems="center"
					flexWrap={flexWrapValue}
					w={{ base: "100%", md: "500px" }}
				>
					<Box
						mb={{ base: 4, md: 0 }}
						boxShadow={"md"}
						p={3}
						borderRadius={"10%"}
						transition="transform 0.3s" // Add transition effect for scaling
						_hover={{
							transform: "scale(1.05)",
							cursor: "pointer",
						}}
					>
						<CountUpCard title="Membership" value="80+" />
					</Box>
					<Box
						mb={{ base: 4, md: 0 }}
						boxShadow={"md"}
						p={3}
						borderRadius={"10%"}
						transition="transform 0.3s" // Add transition effect for scaling
						_hover={{
							transform: "scale(1.05)",
							cursor: "pointer",
						}}
					>
						<CountUpCard title="Volunteer Hours" value="10,000+" />
					</Box>
					<Box
						mb={{ base: 4, md: 0 }}
						boxShadow={"md"}
						p={3}
						borderRadius={"10%"}
						transition="transform 0.3s" // Add transition effect for scaling
						_hover={{
							transform: "scale(1.05)",
							cursor: "pointer",
						}}
					>
						<CountUpCard title="Projects" value="30+" />
					</Box>
				</Flex>
			</Flex>
		</>
	);
}

export default Stats;
