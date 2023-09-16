import Footer from "@/components/Footer";
import GetinTouch from "@/components/GetinTouch";
import Navbar from "@/components/Navbar";
import PageHeader from "@/components/PageHeader";

function ContactUs() {
	return (
		<>
			<Navbar></Navbar>
			<PageHeader title="Contact Us"></PageHeader>
			<GetinTouch></GetinTouch>
			<Footer></Footer>
		</>
	);
}

export default ContactUs;
