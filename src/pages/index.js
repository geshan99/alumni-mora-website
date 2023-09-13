import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Rotaract Alumni Mora</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				<Navbar></Navbar>
				<ImageSlider></ImageSlider>
				<Footer></Footer>
			</main>
		</>
	);
}
