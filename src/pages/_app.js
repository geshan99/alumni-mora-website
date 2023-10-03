import { ChakraProvider } from "@chakra-ui/react";
import "../styles/ImageSlider.css";
import Head from "next/head";
import LoadingAnimation from "@/components/Loading";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Simulate loading your data or performing an async operation
		setTimeout(() => {
			setIsLoading(false);
		}, 800); // Replace this with your actual data loading logic
	}, []);

	return (
		<ChakraProvider>
			<Head>
				<title>Rotaract Alumni Mora</title>
				<meta
					name="description"
					content="Official website of Rotaract Alumni Mora"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta
					name="author"
					content="Geshan Sudasinghe, Bhanuka Uyanage"
				/>
				<meta
					name="keywords"
					content="Rotaract, Rotaract Alumni Mora, University of Moratuwa, UoM,Alumni Mora"
				></meta>
				<meta name="robots" content="index, follow"></meta>
				<link rel="icon" href="/fav.ico" />
			</Head>
			{isLoading ? (
				<LoadingAnimation />
			) : (
				<div>
					<Component {...pageProps} />
				</div>
			)}
		</ChakraProvider>
	);
}
