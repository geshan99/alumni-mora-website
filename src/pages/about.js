import Footer from "@/components/Footer";
import History from "@/components/History";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

function About() {
	return (
		<>
			<Navbar></Navbar>
			<PageHeader title="About Us"></PageHeader>
			<History></History>
			<Footer></Footer>
		</>
	);
}

export default About;
