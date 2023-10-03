import React, { useEffect, useState } from "react";
import { Spinner, Box } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

function LoadingAnimation() {
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		// Simulate loading your data or performing an async operation
		setTimeout(() => {
			setFadeOut(true); // Trigger the fade-out effect
		}, 100); // Replace this with your actual data loading logic
	}, []);

	return (
		<AnimatePresence>
			{fadeOut ? (
				<motion.div
					key="loading-spinner"
					initial={{ opacity: 1 }}
					animate={{ opacity: 0.5 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1 }}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100vh",
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
					}}
				>
					<Box>
						<Spinner size="xl" color="pink.500" thickness="4px" />
					</Box>
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}

export default LoadingAnimation;
