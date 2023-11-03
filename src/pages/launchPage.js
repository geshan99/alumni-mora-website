// pages/launch.js
import { useState } from "react";
import Link from "next/link";
import { Button, Center, Heading, Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import animationData from "../components/launch.json"; // Use the correct path to your animation JSON file

function LaunchPage() {
	const [isDoorOpen, setDoorOpen] = useState(false);

	const handleLaunch = () => {
		setDoorOpen(true);

		// Wait for the animation to complete before redirecting
		setTimeout(() => {
			window.location.href = "/";
		}, 2000); // Adjust the delay based on your animation duration
	};

	const doorStyle = {
		animation: isDoorOpen ? "door-opening 1s ease" : undefined,
		transformOrigin: "0% 50%",
	};

	return (
		<Center h="100vh" flexDirection="column">
			<Heading size="xl" mb="4">
				Welcome to
			</Heading>
			<Heading size="xl" mb="4" color={"teal"}>
				Official Website of Rotaract Alumni Mora
			</Heading>
			<Box
				style={doorStyle}
				onAnimationEnd={() => {
					if (isDoorOpen) setDoorOpen(false);
				}}
			>
				<Lottie
					animationData={animationData}
					loop={true}
					play={!isDoorOpen}
					style={{ width: 300, height: 300 }}
				/>
			</Box>

			<Button
				colorScheme="teal"
				size="lg"
				onClick={handleLaunch}
				disabled={isDoorOpen}
			>
				Launch
			</Button>
		</Center>
	);
}

export default LaunchPage;
