import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Academics from "./Academics";

function Home() {
	return (
		<>
			<Hero />
			<Academics />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
