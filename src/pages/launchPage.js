// pages/launch.js
import { useState } from "react";
import Link from "next/link";
import { Button, Center, Heading, Box } from "@chakra-ui/react";
import ThreeAnimation from "../components/ThreeAnimation"; // Import the ThreeAnimation component

function LaunchPage() {
	const [isDoorOpen, setDoorOpen] = useState(false);

	const handleLaunch = () => {
		setDoorOpen(true);
		// Wait for the animation to complete before redirecting
		setTimeout(() => {
			window.location.href = "/";
		}, 1000); // Adjust the delay based on your animation duration
	};

	const doorStyle = {
		animation: isDoorOpen ? "door-opening 1s ease" : undefined, // Apply the animation only when isDoorOpen is true
		transformOrigin: "0% 50%",
	};

	return (
		<Center h="100vh" flexDirection="column">
			<Heading size="xl" mb="4">
				Welcome to Our Website
			</Heading>
			<Box
				style={doorStyle}
				onAnimationEnd={() => {
					if (isDoorOpen) setDoorOpen(false);
				}}
			>
				<Button
					colorScheme="teal"
					size="lg"
					onClick={handleLaunch}
					disabled={isDoorOpen}
				>
					Launch
				</Button>
			</Box>
			{/* <ThreeAnimation /> Add the Three.js animation */}
		</Center>
	);
}

export default LaunchPage;
