import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

function Home() {
	return (
		<>
			<Hero />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default Home;
