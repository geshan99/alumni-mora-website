import Footer from "@/components/Footer";
import LeftImageSection from "@/components/LeftImageSection";
import Navbar from "@/components/Navbar";

const points = ["hfgsdhj dhgvkhfdg ugfjh", "gfgfgf gfgf "];

function Avenues() {
	return (
		<>
			<Navbar></Navbar>
			<LeftImageSection
				imageUrl="https://images.pexels.com/photos/13356682/pexels-photo-13356682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
				title="International Services"
				subtitle="Broadening the bnbnbm bnh gcghS"
				points={points}
			></LeftImageSection>
			<Footer></Footer>
		</>
	);
}

export default Avenues;
